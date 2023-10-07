<script setup>
const emit = defineEmits(['action'])

defineProps({
    text: {
        type: String,
        required: true
    },
    buttonType: {
        type: String,
        default: '' 
    },
    disabled: {
        type: Boolean,
        default: false,
    },
})

// METHODS
const handleClick = () => emit('action')

</script>
<template >
    <button id="button" :class="`${buttonType} ${disabled ? 'disabled' : ''}`" :disabled="disabled" @click="handleClick">{{ text }}</button>
</template>

<style lang="scss" scoped>
#button {
  width: 100%;
  height: 2.5rem;
  border: none;
  cursor: pointer;
}

.disabled {
    background-color: $disabled-color !important;
}

.primary {
    background-color: $primary-color;
    color: $text-color-white;
    border-radius: 4px;
    &:hover {
        background-color: $primary-color-hover;
    }
}

.font-size-bg {
    font-size: 30px;
}

.secondary {
    background-color: $secondary-color;
    color: $text-color;
    border-radius: 4px;
    &:hover {
        background-color: $secondary-color-hover;
    }
}

.link {
    background-color: white;
    color: $link-color;
    &:hover {
        color: $link-color-hover;
        text-decoration: underline;
    }
}

</style>