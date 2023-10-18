#!/bin/sh
pm2 start /api/main.js
nginx -g 'daemon off;'
