import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useLoaderStore } from './loader';
import Repository from '../services/RepositoryFactory';

const apiRest = Repository.get('api');


export const useComicStore = defineStore('comic', () => {

  // STORES
  const loadStore = useLoaderStore();
  const { handlerLoader } = loadStore;

  // DATA
  const comic = ref({});
  const id = ref(1)
  const errorMessage = ref('')

  // COMPUTED
  const getComic = computed(() => {
    return comic.value
  });

  const getError = computed(() => {
    return errorMessage.value
  });

  // METHODS
  async function requestComic() {
      try {
        handlerLoader();
        const randomNumber = Math.floor(Math.random() * 1000) + 1
        id.value = randomNumber.toString();
        const response = await apiRest.getRandomComic(id.value);
        comic.value = {...response.data, rating: -1}
        return response;
      } catch (error) {
        errorMessage.value = error.message || 'Please contact to an administrator'
      } finally {
        handlerLoader();
      }
  }

  function assignRate(rate) {
    comic.value.rating = rate
  }

  return { comic, getError, getComic, requestComic, assignRate }
})