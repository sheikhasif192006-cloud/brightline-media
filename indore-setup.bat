@echo off
echo ========================================
echo   BRIGHTLINE MEDIA - INDORE SETUP
echo ========================================
echo.

REM Install Node.js
echo [1/4] Installing Node.js...
winget install OpenJS.NodeJS.LTS -h
echo.

REM Install Git
echo [2/4] Installing Git...
winget install Git.Git -h
echo.

REM Install VS Code
echo [3/4] Installing VS Code...
winget install Microsoft.VisualStudioCode -h
echo.

REM Clone projects
echo [4/4] Cloning projects...
if not exist "C:\Projects" mkdir C:\Projects
cd /d C:\Projects
git clone https://github.com/sheikhasif192006-cloud/brightline-media.git
git clone https://github.com/sheikhasif192006-cloud/volt-studio.git
echo.

REM Install dependencies
echo Installing npm packages...
cd /d C:\Projects\brightline-media
call npm install
cd /d C:\Projects\volt-studio
call npm install
echo.

echo ========================================
echo   SETUP COMPLETE!
echo ========================================
echo.
echo Open VS Code:
echo   code C:\Projects\brightline-media
echo.
echo Run website:
echo   cd C:\Projects\brightline-media
echo   npm run dev
echo.
echo Or just double-click: run-brightline.bat
echo.
pause
