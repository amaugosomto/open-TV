<script setup lang="ts">
import { useShowStore } from "@/stores/show";
import { storeToRefs } from "pinia";
import ShowEpisode from "./ShowEpisode.vue";
import ShowSeason from "./ShowSeason.vue";

const { showDetails, episodes, seasons } = storeToRefs(useShowStore());
</script>

<template>
  <main>
    <div class="container my-10 lg:w-4/5 mx-auto">
      <div v-if="showDetails.isEpisode">
        <h5 class="text-xl text-white font-semibold mb-2">Episodes:</h5>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <ShowEpisode
            v-for="(episode, index) in episodes"
            :key="index"
            :episode="episode"
          />
        </div>
      </div>
      <div v-if="showDetails.isSeason">
        <h5 class="text-xl text-white font-semibold mb-2">Seasons:</h5>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <ShowSeason
            v-for="(season, index) in seasons"
            :key="index"
            :season="season"
          />
        </div>
      </div>
    </div>
  </main>
</template>
