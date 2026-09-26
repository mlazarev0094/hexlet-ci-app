const { setupStrapi, cleanupStrapi } = require("./helpers/strapi.js");

beforeAll(async () => {
  await setupStrapi();
});

afterAll(async () => {
  await cleanupStrapi();
});

it("strapi is defined", () => {
  expect(strapi).not.toBeDefined(); // eslint-disable-line
});
