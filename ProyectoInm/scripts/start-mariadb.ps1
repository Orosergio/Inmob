$ErrorActionPreference = "Stop"

$mysqlBase = "C:\Program Files\MariaDB 12.2"
$mysqldPath = Join-Path $mysqlBase "bin\mysqld.exe"
$defaultsFile = Join-Path $mysqlBase "data\my.ini"

if (-not (Test-Path $mysqldPath)) {
    throw "MariaDB server was not found at $mysqldPath."
}

$existingListener = Get-NetTCPConnection -LocalPort 3306 -State Listen -ErrorAction SilentlyContinue
if ($existingListener) {
    Write-Output "MariaDB is already listening on port 3306."
    exit 0
}

Start-Process -FilePath $mysqldPath -ArgumentList @("--defaults-file=$defaultsFile", "--console") -WindowStyle Hidden | Out-Null
Start-Sleep -Seconds 5

$listener = Get-NetTCPConnection -LocalPort 3306 -State Listen -ErrorAction SilentlyContinue
if (-not $listener) {
    throw "MariaDB did not start on port 3306."
}

Write-Output "MariaDB is listening on 127.0.0.1:3306."
