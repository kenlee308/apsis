@echo off
REM Serves the Apsis site locally at http://localhost:8090
cd /d "%~dp0"
start "apsis-site-8090" /min python -m http.server 8090 --bind 127.0.0.1
timeout /t 2 >nul
start "" http://localhost:8090
echo Apsis site running at http://localhost:8090 (run stop.bat to stop)
