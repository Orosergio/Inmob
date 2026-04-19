$ErrorActionPreference = "Stop"

$mysqlPath = "C:\Program Files\MariaDB 12.2\bin\mysql.exe"
$sqlFile = (Resolve-Path (Join-Path $PSScriptRoot "..\..\inmobiliaria.sql")).Path

if (-not (Test-Path $mysqlPath)) {
    throw "MariaDB client was not found at $mysqlPath."
}

if (-not (Test-Path $sqlFile)) {
    throw "SQL dump was not found at $sqlFile."
}

& $mysqlPath -h 127.0.0.1 -P 3306 -u root -e "DROP DATABASE IF EXISTS inmobiliaria; CREATE DATABASE inmobiliaria CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; CREATE USER IF NOT EXISTS 'inmob_app'@'127.0.0.1' IDENTIFIED BY 'InmobApp2026!'; CREATE USER IF NOT EXISTS 'inmob_app'@'localhost' IDENTIFIED BY 'InmobApp2026!'; GRANT ALL PRIVILEGES ON inmobiliaria.* TO 'inmob_app'@'127.0.0.1'; GRANT ALL PRIVILEGES ON inmobiliaria.* TO 'inmob_app'@'localhost'; FLUSH PRIVILEGES;"

cmd /c """$mysqlPath"" -h 127.0.0.1 -P 3306 -u root inmobiliaria < ""$sqlFile"""

Write-Output "Database import completed."
