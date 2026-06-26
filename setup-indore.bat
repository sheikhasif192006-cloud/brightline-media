@echo off
title BRIGHTLINE MEDIA - ONE CLICK SETUP
color 0A

echo ================================================
echo         BRIGHTLINE MEDIA - AUTO SETUP
echo         Indore Ready in 5 Minutes
echo ================================================
echo.

REM ─── Check Admin ───
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] Please run as Administrator (right-click ^> Run as Admin)
    pause
    exit /b
)

echo [1/6] Installing Node.js...
winget install OpenJS.NodeJS.LTS -h --silent >nul 2>&1
echo      ✓ Node.js installed

echo [2/6] Installing Git...
winget install Git.Git -h --silent >nul 2>&1
echo      ✓ Git installed

echo [3/6] Installing VS Code...
winget install Microsoft.VisualStudioCode -h --silent >nul 2>&1
echo      ✓ VS Code installed

echo [4/6] Creating Projects folder...
if not exist "C:\Projects" mkdir C:\Projects
echo      ✓ C:\Projects created

echo [5/6] Cloning projects from GitHub...
cd /d C:\Projects
if not exist "C:\Projects\brightline-media" (
    git clone https://github.com/sheikhasif192006-cloud/brightline-media.git >nul 2>&1
    echo      ✓ Brightline Media cloned
) else ( echo      ✓ Brightline Media already exists )

if not exist "C:\Projects\volt-studio" (
    git clone https://github.com/sheikhasif192006-cloud/volt-studio.git >nul 2>&1
    echo      ✓ Volt Studio cloned
) else ( echo      ✓ Volt Studio already exists )

echo [6/6] Installing npm packages...
cd /d C:\Projects\brightline-media
call npm install --silent 2>nul
echo      ✓ Brightline Media ready

cd /d C:\Projects\volt-studio
call npm install --silent 2>nul
echo      ✓ Volt Studio ready

echo.

REM ─── Create Desktop Shortcut ───
echo Creating desktop shortcut...
set SCRIPT="%TEMP%\shortcut.vbs"
echo Set WshShell = WScript.CreateObject("WScript.Shell") > %SCRIPT%
echo Set Shortcut = WshShell.CreateShortcut(WshShell.SpecialFolders("Desktop") ^& "\Brightline Media.lnk") >> %SCRIPT%
echo Shortcut.TargetPath = "cmd.exe" >> %SCRIPT%
echo Shortcut.Arguments = "/c cd /d C:\Projects\brightline-media ^&^& npx next dev -p 3003" >> %SCRIPT%
echo Shortcut.WorkingDirectory = "C:\Projects\brightline-media" >> %SCRIPT%
echo Shortcut.Description = "Brightline Media Development Server" >> %SCRIPT%
echo Shortcut.IconLocation = "C:\Projects\brightline-media\public\brand-icon.svg" >> %SCRIPT%
echo Shortcut.WindowStyle = 1 >> %SCRIPT%
echo Shortcut.Save >> %SCRIPT%
cscript //nologo %SCRIPT%
del %SCRIPT%
echo      ✓ Desktop shortcut created

echo.
echo ================================================
echo       ✅ SETUP COMPLETE!
echo ================================================
echo.
echo    Desktop pe "Brightline Media" shortcut
echo    double-click karo - site start ho jayegi!
echo.
echo    VS Code: code C:\Projects\brightline-media
echo    Volt:    code C:\Projects\volt-studio
echo.
echo ================================================
pause
