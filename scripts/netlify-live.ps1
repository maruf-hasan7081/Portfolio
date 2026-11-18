# Deploy this repo to https://maruf-hasan-chowdhury-profile.netlify.app
# Run: powershell -ExecutionPolicy Bypass -File scripts/netlify-live.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

Write-Host "1) Log in to Netlify in the browser if asked..."
netlify login

$status = netlify status 2>&1 | Out-String
if ($status -match "Not logged in") {
    Write-Error "Netlify login failed. Run again and approve in the browser."
}

Write-Host "2) Create or link site name: maruf-hasan-chowdhury-profile"
$linked = Test-Path .\.netlify\state.json
if (-not $linked) {
    netlify init --manual `
        --site maruf-hasan-chowdhury-profile `
        2>$null
    if ($LASTEXITCODE -ne 0) {
        netlify sites:create --name maruf-hasan-chowdhury-profile
        netlify link --name maruf-hasan-chowdhury-profile
    }
}

Write-Host "3) Build and deploy to production..."
netlify deploy --build --prod

Write-Host ""
Write-Host "Live: https://maruf-hasan-chowdhury-profile.netlify.app"