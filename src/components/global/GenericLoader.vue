<script setup>
import GenericModal from '@/components/global/GenericModal.vue';

</script>
<template>
    <GenericModal>
        <template #content>
            <div class="dots"></div>
        </template>
    </GenericModal>
</template>

<style lang="scss" scoped>
.dots {
    width: 15px;
    aspect-ratio: 1;
    position: relative;

    &::before,
    &::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: rgb(0, 75, 173);
    }

    &::before {
        box-shadow: -25px 0;
        animation: dot-start 1s infinite linear;
    }
    &::after {
        transform: rotate(0deg) translateX(25px);
        animation: dot-restart 1s infinite linear;
    }

}
</style>