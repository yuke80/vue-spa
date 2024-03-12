def docker_repo = "zenplace-spa"
def platform_name = "zenplace"
def region_list = ["ap-northeast-1"]
def branch_name
def commit_id
pipeline {
    agent {
        label 'slave'
    }
    options {
        ansiColor colorMapName: 'XTerm'
    }
    environment {
        DOCKER_PATH = tool (name: "docker-latest", type: 'org.jenkinsci.plugins.docker.commons.tools.DockerTool')
        AWS_ACCOUNT = sh (script: "aws sts get-caller-identity | jq -r '.Account'", returnStdout: true).trim()
        SERVICE_NAME = "zenplace SPA"
    }
    stages {
        stage("checkout"){
            steps {
                script {
                    commit_id = checkout(scm).GIT_COMMIT
                    sh "echo -n ${commit_id} > COMMIT_ID"
                    branch_name = env.BRANCH_NAME
                }
            }
        }
        stage("build"){
            steps {
                script {
                    sh "docker build -t ${docker_repo}:${branch_name} . -f ./Dockerfile"
                }
            }
        }

        stage("push"){
            steps {
                script {
                    try {
                        region_list.each { region_name ->
                            repo_status = sh(script: "aws ecr describe-repositories --repository-names ${docker_repo} --region ${region_name}", returnStatus: true)
                            if(repo_status != 0){
                                sh "aws ecr create-repository --repository-name ${docker_repo} --region ${region_name}"
                            }
                            sh "eval \$(aws ecr get-login --region ${region_name} --no-include-email)"
                            sh "docker tag ${docker_repo}:${branch_name} ${AWS_ACCOUNT}.dkr.ecr.${region_name}.amazonaws.com/${docker_repo}:${branch_name}"
                            sh "docker push ${AWS_ACCOUNT}.dkr.ecr.${region_name}.amazonaws.com/${docker_repo}:${branch_name}"
                            sh "docker rmi ${AWS_ACCOUNT}.dkr.ecr.${region_name}.amazonaws.com/${docker_repo}:${branch_name}"
                        }
                        currentBuild.result = "SUCCESS"
                    } finally {
                        sh "docker rmi ${docker_repo}:${branch_name}"
                    }
                }
            }
        }

        stage("deploy"){
            steps {
                script {
                    sh "aws ecs update-service --cluster ${env.environment}-zenplace --service ${env.environment}-zenplace-spa --force-new-deployment --region ap-northeast-1"
                }
            }
        }
    }

    post {
        always {
            deleteDir()
        }
        success {
            build job: 'slack_notify', parameters: [string(name: 'build_status', value: "SUCCESS"), string(name: 'message', value: "[${SERVICE_NAME}] deployment (#${env.BUILD_NUMBER}) has success.\n${env.BUILD_URL}changes")]
        }
        failure {
            build job: 'slack_notify', parameters: [string(name: 'build_status', value: "FAILED"), string(name: 'message', value: "[${SERVICE_NAME}] deployment (#${env.BUILD_NUMBER}) has failed.\n${env.BUILD_URL}")]
        }
    }
}
