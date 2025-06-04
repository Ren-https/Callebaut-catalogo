@echo off
echo Iniciando os servidores...
echo.

:: Verifica se o Node.js está instalado
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo Node.js nao encontrado! Por favor, instale o Node.js para continuar.
    pause
    exit
)

:: Navega para o diretório do projeto
cd /d "%~dp0"

:: Verifica se os módulos node estão instalados
if not exist "node_modules" (
    echo Instalando dependencias...
    npm install
)

:: Inicia o servidor Node.js em uma nova janela
echo Iniciando o servidor Node.js...
start "Servidor Node.js" cmd /c "node src/server.js"

:: Aguarda 2 segundos para o servidor Node.js iniciar
timeout /t 2 /nobreak >nul

:: Inicia o servidor React
echo Iniciando o servidor React...
npm start

pause 