# Run after: gh auth login  (or: .\scripts\gh.ps1 auth login)
# Creates GitHub repo (if needed) and pushes main.

$ErrorActionPreference = "Stop"
$RepoName = "smithville-lodge-77"

# Refresh PATH so `gh` works without restarting the terminal (Windows)
$ghDir = "C:\Program Files\GitHub CLI"
if (Test-Path "$ghDir\gh.exe") {
    $env:Path = "$ghDir;" + $env:Path
}

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "GitHub CLI not found." -ForegroundColor Red
    Write-Host "Install: winget install GitHub.cli" -ForegroundColor Yellow
    Write-Host "Then close and reopen PowerShell, or run: .\scripts\gh.ps1 auth login" -ForegroundColor Yellow
    exit 1
}

gh auth status 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Not logged in. Run: gh auth login" -ForegroundColor Yellow
    exit 1
}

Set-Location $PSScriptRoot\..

if (git remote get-url origin 2>$null) {
    Write-Host "Remote 'origin' exists. Pushing..."
    git push -u origin main
} else {
    Write-Host "Creating GitHub repo '$RepoName' and pushing..."
    gh repo create $RepoName --public --source=. --remote=origin --push
}

Write-Host "Done. Open: https://github.com/$(gh api user -q .login)/$RepoName" -ForegroundColor Green
