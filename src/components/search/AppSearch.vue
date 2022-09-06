<template>
  <div class="md:w-1/3 ml-auto lg:mr-20 p-2 flex my-3">
    <div class="flex justify-center">
      <Menu as="div" class="relative inline-block text-left" v-if="showFilter">
        <div>
          <MenuButton
            class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          >
            Filter By Genre
            <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1">
              <MenuItem v-for="genre in genres" :key="genre">
                <span
                  class="text-gray-700 block cursor-pointer hover:bg-gray-300 px-4 py-2 text-sm"
                  @click="filterByGenre(genre)"
                >
                  {{ genre }}
                </span>
              </MenuItem>
              <MenuItem>
                <span
                  class="text-gray-700 block cursor-pointer hover:bg-gray-300 px-4 py-2 text-sm"
                  @click="filterByGenre('all')"
                >
                  Clear Filter
                </span>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
    <div class="flex ml-4">
      <input
        type="text"
        name="search"
        class="focus:ring-gray-500 focus:border-gray-500 block w-full text-white bg-gray-500 py-2 pl-7 pr-20 sm:text-sm border-gray-300 rounded-md"
        :placeholder="placeholderText"
        v-model="data.searchParams"
      />
      <button
        @click="search"
        class="text-white bg-indigo-400 rounded-md p-2 ml-2"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { useShowStore } from "@/stores/show";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const shows = useShowStore();
const data = reactive({ searchParams: "" });
const { genres } = storeToRefs(useShowStore());

const props = defineProps({
  isDetails: {
    type: Boolean,
    default: false,
  },
});

const placeholderText = computed(() => {
  return props.isDetails ? "Search for a single movie" : "Search for movies";
});

const showFilter = computed(() => {
  return !props.isDetails && genres.value.length > 0;
});

const router = useRouter();

async function search() {
  const query = data.searchParams;
  if (query !== "") {
    if (!props.isDetails) {
      shows.getShows(query);
    } else {
      const id = await shows.getSingleShowByQuery(query);
      router.push({ path: `/show/${id}`, replace: true });
    }
  }
}

function filterByGenre(genre: string) {
  shows.filterByGenre(genre);
}
</script>
