@ECHO OFF
IF NOT "%SF_BUILDMODE%" == "DEBUG" GOTO :eof

ECHO --- Creating web.config for IIS ---
ECHO Target folder: %1
SET C=""
SET C=%C%"<?xml version='1.0' encoding='UTF-8'?>"
SET C=%C%"<configuration>"
SET C=%C%"<system.webServer>"
SET C=%C%"<staticContent>"
SET C=%C%"<clientCache cacheControlMode='UseMaxAge' cacheControlMaxAge='0.00:00:00' setEtag='false'/>"
SET C=%C%"</staticContent>"
SET C=%C%"<caching enabled='false' />"
SET C=%C%"</system.webServer>"
SET C=%C%"</configuration>"

call :create %C% "%~1\web.config"

goto :eof

:create
REM This will stripe out necessary quotes
SET C=%1
ECHO | SET /p="%C:"=%" >%2
goto :eof
