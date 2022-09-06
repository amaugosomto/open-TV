import type { Episode, Season, Show, ShowList } from "@/types";
import httpClient from "./httpClient";

const getShowsByQuery = (query: string) =>
  httpClient.get<ShowList[]>(`search/shows?q=${query}`);

const getShowByShowId = (showId: number) =>
  httpClient.get<Show>(`shows/${showId}`);

const getShowByQuery = (query: string) =>
  httpClient.get<Show>(`singlesearch/shows?q=${query}`);

const getShowEpisodesByShowId = (showId: number) =>
  httpClient.get<Episode[]>(`shows/${showId}/episodes`);

const getShowSeasonsByShowId = (showId: number) =>
  httpClient.get<Season[]>(`shows/${showId}/seasons`);

export {
  getShowsByQuery,
  getShowByShowId,
  getShowByQuery,
  getShowEpisodesByShowId,
  getShowSeasonsByShowId,
};
