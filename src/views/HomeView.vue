<script setup lang="ts">
import { useShowStore } from "@/stores/show";
import { storeToRefs } from "pinia";
import ShowList from "../components/ShowList/ShowList.vue";
import AppSearch from "../components/search/AppSearch.vue";

const { shows } = storeToRefs(useShowStore());
</script>

<template>
  <div>
    <AppSearch />
    <main>
      <ShowList :shows="shows" />
    </main>
  </div>
</template>
