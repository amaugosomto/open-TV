<template>
  <div class="flex items-center mt-2.5 mb-5" v-if="rating?.average">
    <ul>
      <li><div class="stars" :style="percentageRating"></div></li>
    </ul>
    <span
      class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
      >{{ rating?.average }}</span
    >
  </div>
  <div class="flex mt-2.5 mb-5" v-else>
    <span
      class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
      >No rating</span
    >
  </div>
</template>

<script setup lang="ts">
import type { Rating } from "@/types";
import { computed, type PropType } from "vue";

const props = defineProps({
  rating: { type: Object as PropType<Rating | null> },
});

const percentageRating = computed(() => {
  const average = props.rating?.average ?? 0;
  return `--w: ${(average / 10) * 100}%`;
});
</script>

<style scoped>
.stars {
  position: relative;
  display: inline-block;
  font-size: 20px;
  height: 20px;
  line-height: 20px;
}

.stars:before {
  content: "\2606\2606\2606\2606\2606";
}

.stars:after {
  content: "\2605\2605\2605\2605\2605";
  position: absolute;
  left: 0;
  overflow: hidden;
  width: var(--w, 50%);
  color: rgb(255, 200, 0);
  z-index: 1;
}

li {
  display: table;
}
</style>
