# Render CLI: https://render.com/docs/cli
# After login: New Blueprint from GitHub OR:
#   render blueprint apply render.yaml

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

if (-not (Get-Command render -ErrorAction SilentlyContinue)) {
  Write-Host "Install Render CLI: https://render.com/docs/cli"
  Start-Process "https://dashboard.render.com/blueprint/new?repo=https://github.com/maruf-hasan7081/Portfolio"
  exit 1
}

render login
Start-Process "https://dashboard.render.com/blueprint/new?repo=https://github.com/maruf-hasan7081/Portfolio"
Write-Host "In the browser: deploy Blueprint, then set DJANGO_ALLOWED_HOSTS to your Render hostname."