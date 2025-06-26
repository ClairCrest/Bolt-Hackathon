@echo off
echo Starting AI Paper Assistant Frontend...
echo.

REM Check if project directory exists
if not exist "project" (
    echo Error: project directory not found!
    echo Please make sure you're running this from the root directory.
    pause
    exit /b 1
)

REM Change to project directory
cd project

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    if errorlevel 1 (
        echo Error: Failed to install dependencies!
        pause
        exit /b 1
    )
)

REM Start the development server
echo Starting development server...
npm run dev

REM Keep window open if there's an error
if errorlevel 1 (
    echo.
    echo Error: Failed to start development server!
    pause
)