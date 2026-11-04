# AGENTS.md

## Project
Smart Campus room availability checker; one room checked at a time, fictional data.

## Structure
- src/lib/availability.ts: checkAvailability (booking rules)
- src/App.tsx: main UI (room picker, time inputs, result card)
- src/components/RoomTimeline.tsx: day timeline
- src/data/rooms.ts: fixtures (rooms, bookings, fixed CURRENT_TIME). Do not modify.
- src/availability.test.ts: tests

## Constraints
Preserve AC1–AC6; no backend, login or booking creation.

## Engineering rules
Prefer pure functions and minimal changes; use at most 2 justified patterns.
Do not mutate booking fixtures; keep responsive UI feedback.

## Commands
- Tests: npx vitest run
- Type check: npm run typecheck
- Lint: npm run lint
- Build: npm run build

## Forbidden
Do not change UI design, fixture data, CURRENT_TIME or acceptance criteria.

## Verification
Run existing tests and add focused regression tests.
Do not weaken or delete existing assertions.
Report changed files, rationale and test evidence.