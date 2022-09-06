import { afterAll, afterEach, beforeAll } from "vitest";
import { rest } from "msw";
import { setupServer } from "msw/node";
import showDetailsMock from "./showDetails.mock";
import showListMock from "./ShowLists.mock";

const handlers = [
  rest.get("https://api.tvmaze.com/shows/:id/episodes", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([{ ...showDetailsMock.episode }]));
  }),
  rest.get("https://api.tvmaze.com/shows/:id", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(showListMock.showList));
  }),
  rest.get("https://api.tvmaze.com/search/shows", (req, res, ctx) => {
    return res(ctx.json(showListMock.showList));
  }),
];

export const server = setupServer(...handlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
