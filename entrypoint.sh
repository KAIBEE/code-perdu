#!/bin/sh
pm2-runtime /api/main.js
nginx -g 'daemon off;'
