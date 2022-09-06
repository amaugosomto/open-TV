<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useShowStore } from "@/stores/show";
import { storeToRefs } from "pinia";

import ShowRating from "@/components/rating/ShowRating.vue";
import ShowDetails from "../components/showDetails/ShowDetails.vue";
import AppSearch from "../components/search/AppSearch.vue";

const showStore = useShowStore();

const props = defineProps({
  id: { type: String },
});

onMounted(() => {
  const id = props.id;
  if (id) showStore.getShow(Number(props.id));
});

const { show } = storeToRefs(useShowStore());

const genres = computed(() => {
  return show?.value?.genres.join(", ");
});

const getDetails = (key: "isEpisode" | "isSeason") => {
  const id = Number(props.id) ?? 0;
  showStore.getShowDetails(id, key);
};
</script>

<template>
  <AppSearch :isDetails="true" />
  <div class="container mt-10 mx-auto p-4 md:p-0">
    <div class="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
      <div
        class="bg-cover bg-bottom border w-full md:mx-20 lg:mx-0 lg:w-1/3 h-[20rem] lg:h-[25rem] relative"
      >
        <img
          :src="
            show?.image?.original ??
            'https://joadre.com/wp-content/uploads/2019/02/no-image.jpg'
          "
          alt="episode image"
          class="w-full h-full object-fill"
        />
      </div>

      <div class="w-full lg:w-2/3 md:rounded">
        <div class="h-full mx-auto md:px-0 md:pt-1 md:pb-1 lg:-ml-6 relative">
          <div
            class="bg-gray-800 md:mx-auto md:rounded-md lg:h-full p-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center"
          >
            <div
              class="w-full lg:border-right lg:border-solid text-center md:text-left"
            >
              <h5
                id="showName"
                class="text-xl lg:text-4xl font-semibold tracking-tight text-white"
              >
                {{ show?.name }}
              </h5>
              <p
                class="py-1 text-xs min-h-[30px] lg:mt-2 lg:text-sm text-white"
              >
                {{ genres }}
              </p>
              <hr class="w-1/4 md:ml-0 mx-auto mt-4 border lg:hidden" />
            </div>

            <div class="w-full">
              <p
                class="mt-4 lg:mt-0 text-justify md:text-left text-sm text-white"
                v-html="show?.summary"
              ></p>
            </div>
            <div>
              <ShowRating :rating="show?.rating" />
            </div>
            <div
              class="w-full flex flex-col md:flex-row justify-between items-center"
            >
              <span
                class="text-sm py-1.5 px-2.5 leading-none self-start text-center whitespace-nowrap font-bold bg-purple-600 text-white rounded"
              >
                {{ show?.language }}
              </span>
              <div class="mt-4 md:mt-0">
                <button
                  class="text-white border-blue-300 hover:bg-purple-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center"
                  @click="getDetails('isSeason')"
                >
                  View Season(s)
                </button>
                <button
                  class="text-white ml-2 border-blue-300 hover:bg-purple-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center"
                  @click="getDetails('isEpisode')"
                >
                  View Episodes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ShowDetails />
  </div>
</template>
