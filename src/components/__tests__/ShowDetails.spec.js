import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import ShowSeason from "../showDetails/ShowSeason.vue";
import ShowEpisode from "../showDetails/ShowEpisode.vue";
import ShowDetailsMock from "./mocks/showDetails.mock";

describe("Show Details", () => {
  describe("Show Season", () => {
    it("renders properly with correct props", () => {
      const wrapper = shallowMount(ShowSeason, {
        props: {
          season: ShowDetailsMock.season,
        },
      });

      expect(wrapper.find("#seasonName").exists()).toBe(true);
      expect(wrapper.find("#seasonNumber").exists()).toBe(true);
      expect(wrapper.find("#seasonNumber").text()).toBe("Season: 1");
      expect(wrapper.find("#seasonName").text()).toBe(
        ShowDetailsMock.season.name
      );
    });

    it("renders properly with inCorrect props", () => {
      const season = { ...ShowDetailsMock.season };
      season.name = "";

      const wrapper = shallowMount(ShowSeason, {
        props: {
          season,
        },
      });

      expect(wrapper.find("#seasonName").exists()).toBe(true);
      expect(wrapper.find("#seasonName").text()).toBe("");
    });
  });

  describe("Show Episode", () => {
    it("renders properly with correct props", () => {
      const wrapper = shallowMount(ShowEpisode, {
        props: {
          episode: ShowDetailsMock.episode,
        },
      });
      const episodeName = ShowDetailsMock.episode.name;
      const episodeNumber = `Season ${ShowDetailsMock.episode.season}, Episode ${ShowDetailsMock.episode.number}`;

      expect(wrapper.find("#episodeName").exists()).toBe(true);
      expect(wrapper.find("#episodeNumber").exists()).toBe(true);
      expect(wrapper.find("#episodeName").text()).toBe(episodeName);
      expect(wrapper.find("#episodeNumber").text()).toBe(episodeNumber);
    });

    it("renders properly with inCorrect props", () => {
      const episode = { ...ShowDetailsMock.episode };
      episode.name = "";

      const wrapper = shallowMount(ShowEpisode, {
        props: {
          episode,
        },
      });

      expect(wrapper.find("#episodeName").exists()).toBe(true);
      expect(wrapper.find("#episodeName").text()).toBe("");
    });
  });
});
