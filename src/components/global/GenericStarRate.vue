<script setup>
import {computed} from 'vue'
const props = defineProps({
    rating: {
        type: Number,
        required: true
    }
})
const emit = defineEmits(['rate-action'])

// DATA
const maxRating = 5

// COMPUTED
const starClassList = computed(() => {
    return Array.from({ length: maxRating }, (_, i) => {
        return [
        'star',
        i <= props.rating ? 'gold' : ''
        ];
    });
})

// METHODS
const clickStar = (num) => {
      const rated =  num - 1;
      emit('rate-action', rated);
}
</script>

<template>
   <div>
    <p>Rating: {{rating + 1}}</p>
    
    <span v-for="num in maxRating" :key="num"
            :class="starClassList[num-1]"
            @click="clickStar(num)"
            @mouseover="clickStar(num)">
            ★
    </span>
</div>
</template>


<style lang="scss" scoped>

.star {
  color: gray;
  margin: 0.1rem;
  cursor: pointer;
}
.gold {
  color: gold;
}
</style>
