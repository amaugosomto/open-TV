<template>
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ShowView v-for="(item, index) in shows" :key="index" :show="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ShowView from "./ShowView.vue";
import type { Show } from "@/types";
import type { PropType } from "vue";

defineProps({
  shows: { type: Object as PropType<Show[]> },
});
</script>
