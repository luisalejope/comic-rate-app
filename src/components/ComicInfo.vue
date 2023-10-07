<script setup>
import { storeToRefs } from 'pinia'
import { useComicStore } from '@/stores/comic';
import GenericButton from '@/components/global/GenericButton.vue';
import GenericStarRate from '@/components/global/GenericStarRate.vue';

// STORES
const comic = useComicStore();
const { getComic } = storeToRefs(comic);
const { requestComic, assignRate } = comic;

// METHODS
const handleRandom = async() => await requestComic();
const handleRating = (rate)=> assignRate(rate)

</script>
<template>
    <section id='comic'>
        <div class='comic-info'>
            <h2>{{ getComic.title }}</h2>
            <img :src="getComic.img" :alt="getComic.title" srcset="">
            <GenericStarRate :rating='getComic.rating' @rate-action='handleRating'/>
            
            <div class="button-container mt-l">
                 <GenericButton text='Random'  buttonType='primary' @action="handleRandom"/>
            </div>
        </div>

    </section>
</template>
<style lang="scss" scoped>
#comic {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    .comic-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;

        .button-container {
            width: 50%;
        }
    }
}
</style>