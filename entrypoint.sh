#!/bin/sh
node /api/main.js &
nginx -g 'daemon off;'
