# Docker run for Playwright project

## Files to add to the project root
- `Dockerfile`
- `docker-compose.yml`
- `.dockerignore`
- `playwright.docker.config.ts`
- `run-docker.ps1` (optional convenience script for Windows)

## What this setup does
- builds a Docker image with Node.js and project dependencies
- installs Playwright browsers and Linux dependencies inside the image
- runs tests with a dedicated Docker config
- writes the HTML report into `./playwright-report` on the host machine
- writes Playwright artifacts into `./test-results` on the host machine

## Run all tests
```powershell
docker compose build
docker compose run --rm playwright
```

Or on Windows:
```powershell
.\run-docker.ps1
```

## Run one specific test file
```powershell
docker compose run --rm playwright npx playwright test tests/preferences/userProfile.spec.ts --config=playwright.docker.config.ts
```

## Open HTML report locally
```powershell
npx playwright show-report playwright-report
```

## Notes
- The Docker setup uses the existing `playwright.config.ts` as a base and only overrides reporter/output settings for container runs.
- If your tests rely on values from `.env`, they are passed into the container through `env_file` in `docker-compose.yml`.
- The `.dockerignore` excludes `node_modules`, reports and `.env` from the image build context.
