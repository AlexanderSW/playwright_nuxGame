$ErrorActionPreference = 'Stop'

if (!(Test-Path -Path '.\playwright-report')) {
    New-Item -ItemType Directory -Path '.\playwright-report' | Out-Null
}

if (!(Test-Path -Path '.\test-results')) {
    New-Item -ItemType Directory -Path '.\test-results' | Out-Null
}

docker compose build
docker compose run --rm playwright

Write-Host "HTML report folder: $(Resolve-Path '.\playwright-report')"
Write-Host "Artifacts folder: $(Resolve-Path '.\test-results')"
