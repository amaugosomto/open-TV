<script setup lang="ts">
import type { Episode } from "@/types";
import type { PropType } from "vue";
import { formatSummary } from "@/utils";

defineProps({
  episode: { type: Object as PropType<Episode>, required: true },
});
</script>

<template>
  <div class="shadow-lg flex flex-wrap w-full">
    <div class="bg-cover bg-bottom border w-full h-[10rem] relative">
      <img
        :src="
          episode?.image?.original ??
          'https://joadre.com/wp-content/uploads/2019/02/no-image.jpg'
        "
        alt="episode image"
        class="w-full h-full"
      />
    </div>

    <div class="w-full">
      <div class="h-full relative">
        <div
          class="bg-gray-800 lg:h-full p-3 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center"
        >
          <div
            class="w-full lg:border-right lg:border-solid text-center md:text-left"
          >
            <h5
              id="episodeNumber"
              class="text-sm tracking-tight text-white mb-2"
            >
              Season {{ episode?.season }}, Episode {{ episode.number }}
            </h5>
            <h5
              id="episodeName"
              class="text-sm font-bold tracking-tight md:min-h-[40px] text-white"
            >
              {{ episode?.name }}
            </h5>
            <p
              class="text-sm text-gray-400 min-h-[60px] md:min-h-[80px] text-justify"
            >
              {{ formatSummary(episode.summary, 50) }}
            </p>
          </div>
          <div class="text-right mt-2">
            <button
              class="px-2 py-1 rounded-sm text-gray-500 bg-blue-100 cursor-not-allowed"
              disabled
            >
              view
            </button>

            <button
              class="px-2 py-1 ml-1 rounded-sm text-white bg-purple-300 cursor-not-allowed"
              disabled
            >
              watch
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
