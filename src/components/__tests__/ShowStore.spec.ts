import { describe, it, expect, beforeEach } from "vitest";
import { createTestingPinia } from "@pinia/testing";

import { mount } from "@vue/test-utils";
import ShowPage from "../../views/ShowPage.vue";
import { setActivePinia, createPinia } from "pinia";
import { useShowStore } from "@/stores/show";

describe("Show Store", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
    mount(ShowPage, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
  });

  it("Calls getShows action correctly", async () => {
    const store = useShowStore();
    await store.getShows("girls");

    expect(store.getShows).toHaveBeenCalledTimes(1);
  });

  it("Resets State function is called", async () => {
    const store = useShowStore();
    store.resetShowDetails();

    expect(store.resetShowDetails).toHaveBeenCalledTimes(1);
    expect(store.resetShowDetails).toHaveBeenLastCalledWith();
  });
});
