<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { storeToRefs } from 'pinia'
import { useLoaderStore } from '@/stores/loader';
import { useComicStore } from '@/stores/comic';
import GenericLoader from '@/components/global/GenericLoader.vue';
import ComicInfo from '@/components/ComicInfo.vue';

// STORES
const comic = useComicStore();
const loadStore = useLoaderStore();
const { getError } = storeToRefs(comic)
const { getLoaderStatus } = storeToRefs(loadStore);
const { requestComic } = comic;

// LIFECYCLE HOOKS
onBeforeMount( async() => await requestComic())
</script>

<template>
  <div id="comic-container" class="mb-xl">
    <div class="error-message" v-if="getError !== ''">
      <h4>ERROR</h4>
      <p>{{getError}}</p>
    </div>
    <ComicInfo v-else/>
    <GenericLoader v-show="getLoaderStatus" />
  </div>
</template>

<style lang='scss' scoped>
#comic-container {
  position: relative;
  width: 100%;
  height: 100%;
  .error-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: $error-message;
  }
}

</style>
