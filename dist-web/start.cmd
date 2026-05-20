@echo off
chcp 65001 >nul
echo ============================================
echo   coze-mini-program
echo ============================================
echo.
echo Starting server...
echo.
start http://localhost:8080
npx http-server -p 8080 --cors -o
pause
