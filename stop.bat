@echo off
REM Stops whatever is serving on port 8090
for /f "tokens=5" %%p in ('netstat -ano ^| findstr ":8090" ^| findstr "LISTENING"') do taskkill /PID %%p /F >nul 2>&1
echo Apsis local server on port 8090 stopped.
