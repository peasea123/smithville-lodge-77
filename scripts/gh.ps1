# Wrapper so `gh` works when PATH is stale (common right after winget install).
# Usage: .\scripts\gh.ps1 auth login
#        .\scripts\gh.ps1 repo create ...

$ghExe = "C:\Program Files\GitHub CLI\gh.exe"
if (-not (Test-Path $ghExe)) {
    Write-Host "GitHub CLI not installed. Run: winget install GitHub.cli" -ForegroundColor Red
    exit 1
}
& $ghExe @args
