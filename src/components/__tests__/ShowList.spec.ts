import { describe, it, expect, vi, beforeEach } from "vitest";
import { createTestingPinia } from "@pinia/testing";

import { shallowMount, VueWrapper } from "@vue/test-utils";
import ShowView from "../ShowList/ShowView.vue";
import ShowListMock from "./mocks/ShowLists.mock";
import { useShowStore } from "@/stores/show";

describe("Show Lists", () => {
  describe("Show View", () => {
    let wrapper: VueWrapper<any>;
    const showList = ShowListMock.showList;

    beforeEach(() => {
      wrapper = shallowMount(ShowView as any, {
        props: {
          show: showList[0],
        },
        global: {
          plugins: [
            createTestingPinia({
              createSpy: vi.fn,
            }),
          ],
        },
      });
    });

    it("renders correctly when passed the right props", () => {
      const store = useShowStore();
      store.$patch({ shows: showList });

      expect(wrapper.find("#showName").text()).toBe(showList[0].name);
      expect(store.resetShowDetails).toHaveBeenCalledTimes(1);
    });
  });
});
