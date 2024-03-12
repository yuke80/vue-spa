#!/bin/bash
set -e

# This is required to modify the api urls before starting
find .nuxt/ \
  -type f \
  -name '*.js' \
  -exec sed -i "s+%%API_BASE_URL%%+${API_BASE_URL:?}+g" '{}' \;

#npx nuxt start
npx cross-env NODE_ENV=production node server/index.js