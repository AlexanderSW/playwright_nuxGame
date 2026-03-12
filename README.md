# Combine UI, API Automation

Test automation for Business Portal based on Playwright.

## Execute Playwright tests locally

1. Install [Node.js](https://nodejs.org/uk/download/) on your computer.
2. Clone repository: <https://github.com/AlexanderSW/playwright_nuxGame>
3. Open terminal and switch to the project directory.
4. Run `npm install`
5. Make sure you have `.env` file with credentials (ask AQA team for values).
6. Run `npx playwright install`
7. Run tests with `npx playwright test --ui`

More details: <https://playwright.dev/docs/running-tests>

## Run In Docker

Docker setup builds an isolated environment with Node.js, project dependencies, Playwright browsers and Linux system packages required for browser execution.

1. Make sure Docker Desktop is running.
2. Make sure `.env` exists in the project root.
3. Build the image:

```powershell
docker compose build
```

4. Run tests in container:

```powershell
docker compose run --rm playwright
```

Optional Windows helper:

```powershell
.\run-docker.ps1
```

Docker run uses `playwright.docker.config.ts`, writes HTML report to `playwright-report/` and artifacts to `test-results/`.

## Folder Structure

```text
.
|-- src/
|   |-- constants/                Shared constants for tests
|   `-- pageObject/               Page Object Model implementation
|       |-- login/                Login page objects
|       |-- preferences/          Preferences page objects
|       `-- registration/         Registration page objects
|-- tests/
|   |-- login/                    Login test suites
|   |-- preferences/              Preferences test suites
|   `-- registration/             Registration test suites
|-- fixture.ts                    Shared test fixtures
|-- playwright.config.ts          Main local Playwright config
|-- playwright.docker.config.ts   Playwright config for Docker runs
|-- docker-compose.yml            Docker Compose service definition
|-- Dockerfile                    Docker image definition
|-- run-docker.ps1                Convenience script for Docker run on Windows
`-- README.md                     Project documentation
```

## Documentation

- All future documentation links will be stored here.

## Architecture

- `tests/` contains test scenarios grouped by feature.
- `src/pageObject/` contains reusable UI interaction layers.
- `src/constants/` contains shared static test data and constants.
- `fixture.ts` stores shared fixtures and test setup extensions.

## .ENV Example

- `USERNAME=`
- `PASSWORD=`
- `EMAIL=`

## CI

- CI-specific behavior is controlled through `CI=1`.
- Docker container also runs with `CI=1`.

## Reports

- Local and Docker runs generate HTML report in `playwright-report/`.
- Playwright artifacts are stored in `test-results/`.
