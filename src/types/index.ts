type Rating = {
  average: number;
};

type Image = { medium: string; original: string };

type Network = {
  id: number;
  name: string;
  country: {
    name: string;
    code: string;
    timezone: string;
  };
};

type Show = {
  averageRuntime: number;
  dvdCountry?: string;
  ended: string;
  genres: string[];
  id: number;
  image: Image;
  language: string;
  name: string;
  network?: Network;
  officialSite: string;
  premiered: string;
  rating: Rating;
  runtime: number;
  schedule: { time: string; days: string[] };
  status: string;
  summary?: string;
  type: string;
  updated: number;
  url: string;
  webChannel?: string;
  weight: string;
};

type ShowList = {
  score: string;
  show: Show;
};

type Episode = {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: Rating;
  image?: Image;
  summary: string;
  _links: {
    self: {
      href: string;
    };
  };
};

type Season = {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
  network?: Network;
  webChannel: {
    id: number;
    name: string;
    country?: string;
    officialSite: string;
  };
  image?: Image;
  summary: string;
  _links: {
    self: {
      href: string;
    };
  };
};

type ShowDetails = {
  isEpisode: boolean;
  isSeason: boolean;
};

export type { Show, Rating, ShowList, Episode, ShowDetails, Season };
