<script setup lang="ts">
import type { Season } from "@/types";
import type { PropType } from "vue";
import { formatSummary } from "@/utils";

defineProps({
  season: { type: Object as PropType<Season>, required: true },
});
</script>

<template>
  <div class="shadow-lg flex flex-wrap w-full">
    <div
      class="bg-cover bg-bottom border w-full h-[10rem] relative"
      :style="`background-image: url(${
        season?.image?.original ??
        'https://joadre.com/wp-content/uploads/2019/02/no-image.jpg'
      })`"
    >
      <div class="absolute text-xl">
        <em
          class="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"
        ></em>
      </div>
    </div>

    <div class="w-full rounded">
      <div class="h-full relative">
        <div
          class="bg-gray-800 lg:h-full p-3 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center"
        >
          <div
            class="w-full lg:border-right lg:border-solid text-center md:text-left"
          >
            <h5
              id="seasonNumber"
              class="text-sm font-semibold tracking-tight text-white"
            >
              Season: {{ season?.number }}
            </h5>
            <h5
              id="seasonName"
              class="text-md font-semibold tracking-tight min-h-[20px] text-white"
            >
              {{ season?.name }}
            </h5>
            <p class="text-sm text-gray-400 text-justify min-h-[60px]">
              {{ formatSummary(season.summary, 100) }}
            </p>
          </div>
          <div class="text-right mt-4">
            <button
              class="px-2 py-1 rounded-sm text-gray-500 bg-blue-100 cursor-not-allowed"
              disabled
            >
              view
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
