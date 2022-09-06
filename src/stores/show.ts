import {
  getShowsByQuery,
  getShowByShowId,
  getShowByQuery,
  getShowEpisodesByShowId,
  getShowSeasonsByShowId,
} from "@/api";
import type { Episode, Season, Show, ShowDetails } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useShowStore = defineStore("shows", () => {
  const unMutatedShows = ref<Show[]>([]);
  const shows = ref<Show[]>([]);
  const genres = ref<string[]>([]);
  const show = ref<Show | null>(null);
  const seasons = ref<Season[]>([]);
  const episodes = ref<Episode[]>([]);
  const showDetails = ref<ShowDetails>({
    isEpisode: false,
    isSeason: false,
  });

  const getShows = async (query: string) => {
    const response = await getShowsByQuery(query);
    const data = response.data.map((shows) => shows.show);
    unMutatedShows.value = data;
    shows.value = data;
    extractGenres(data);
  };

  const extractGenres = (shows: Show[]) => {
    const data: string[] = [];

    shows.map((show) => {
      show.genres.map((genre) => {
        if (!data.includes(genre)) {
          data.push(genre);
        }
      });
    });

    genres.value = data;
  };

  const filterByGenre = (genre: string) => {
    if (genre === "all") {
      shows.value = [...unMutatedShows.value];
      return;
    }

    const data = unMutatedShows.value.filter((show) =>
      show.genres.includes(genre)
    );
    shows.value = data;
  };

  const getShow = async (showId: number) => {
    const response = await getShowByShowId(showId);
    show.value = response.data;
  };

  const getSingleShowByQuery = async (query: string) => {
    const response = await getShowByQuery(query);
    show.value = response.data;
    return response.data.id;
  };

  const getShowDetails = (showId: number, key: "isEpisode" | "isSeason") => {
    if (key === "isEpisode") {
      if (!showDetails.value.isEpisode) {
        showDetails.value.isEpisode = true;
        showDetails.value.isSeason = false;

        getShowEpisodesByShowId(showId).then((response) => {
          episodes.value = response.data;
        });
      }
    } else {
      if (!showDetails.value.isSeason) {
        showDetails.value.isSeason = true;
        showDetails.value.isEpisode = false;

        getShowSeasonsByShowId(showId).then((response) => {
          seasons.value = response.data;
        });
      }
    }
  };

  const resetShowDetails = () => {
    if (showDetails.value.isEpisode) {
      showDetails.value.isEpisode = false;
      episodes.value = [];
    }
    if (showDetails.value.isSeason) {
      showDetails.value.isSeason = false;
      episodes.value = [];
    }
  };

  return {
    shows,
    genres,
    show,
    episodes,
    seasons,
    showDetails,
    getShows,
    getShow,
    filterByGenre,
    getShowDetails,
    resetShowDetails,
    getSingleShowByQuery,
  };
});
