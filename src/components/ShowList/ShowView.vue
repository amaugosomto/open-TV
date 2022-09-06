<template>
  <div class="w-full max-w-sm rounded-lg shadow-md bg-gray-800 border-gray-700">
    <a href="#">
      <img
        class="p-5 rounded-t-lg h-52 md w-full"
        :src="show?.image?.original"
        alt="Movie image"
      />
    </a>
    <div class="px-5 pb-5">
      <a href="#">
        <h5
          id="showName"
          class="text-md font-semibold tracking-tight text-white"
        >
          {{ show?.name }}
        </h5>
        <p class="py-1 text-xs min-h-[30px]">{{ genres }}</p>
      </a>
      <div
        class="text-sm text-justify tracking-tight text-white min-h-[100px] md:min-h-[160px]"
      >
        {{ formatSummary(show?.summary ?? "") }}
      </div>
      <ShowRating :rating="show?.rating" />
      <div class="flex justify-between items-center">
        <span
          class="text-sm inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-purple-600 text-white rounded"
        >
          {{ show?.language }}
        </span>
        <router-link
          class="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-1.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          :to="`/show/${show?.id ?? 0}`"
          >View</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, type PropType } from "vue";
import type { Show } from "@/types";
import ShowRating from "../rating/ShowRating.vue";
import { formatSummary } from "@/utils";
import { useShowStore } from "@/stores/show";

const showStore = useShowStore();

const props = defineProps({
  show: { type: Object as PropType<Show | Record<string, null>> },
});

const genres = computed(() => {
  return props.show?.genres?.join(", ");
});

onMounted(() => {
  showStore.resetShowDetails();
});
</script>
