export default {
  season: {
    id: 1,
    url: "http://test.com",
    number: 1,
    name: "First season",
    episodeOrder: 1,
    premiereDate: "2022-03-02",
    endDate: "2024-03-02",
    network: {
      id: 1,
      name: "",
      country: {
        name: "",
        code: "",
        timezone: "",
      },
    },
    webChannel: {
      id: 1,
      name: "UBC",
      country: "USA",
      officialSite: "",
    },
    image: {
      medium: "http://testimage.com",
      original: "http://testOriginal.com",
    },
    summary: "Summary of the season",
    _links: {
      self: {
        href: "http://test.com",
      },
    },
  },
  episode: {
    id: 1,
    url: "http://test.com",
    name: "First Episode",
    season: 1,
    number: 1,
    type: "regular",
    airdate: "2022-03-02",
    airtime: "2022-03-02",
    airstamp: "2022-03-02",
    runtime: 44,
    rating: {
      average: 7.5,
    },
    image: {
      medium: "http://testimage.com",
      original: "http://testOriginal.com",
    },
    summary: "Summary of episode",
    _links: {
      self: {
        href: "http://test.com",
      },
    },
  },
};
