@echo off
cd /d C:\Projects\brightline-media
echo Starting Brightline Media...
start http://localhost:3003
npx next dev -p 3003
pause
