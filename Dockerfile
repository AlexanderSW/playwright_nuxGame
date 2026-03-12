FROM node:20-bookworm

WORKDIR /app

COPY package*.json ./
RUN npm ci

# Install browsers and Linux dependencies that match the Playwright version from package-lock.json
RUN npx playwright install --with-deps

COPY . .

RUN mkdir -p /app/playwright-report /app/test-results

CMD ["npx", "playwright", "test", "--config=playwright.docker.config.ts"]
