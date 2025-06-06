#!/bin/bash
cd /home/kavia/workspace/code-generation/moodweather-connect-33307-069c49e7/moodweather_connect
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

