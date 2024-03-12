#!/bin/bash

# This exists to avoid fetching these on each and every request.
# TODO: this is not used currently, needs more testing & consideration
mkdir static-api-files/
curl https://api.zen-jp.info/zenplace/v1/locations/prefectures/ -o static-api-files/prefectures.json
