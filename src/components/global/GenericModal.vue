<template>
    <div id="myModal" class="modal">
        <div class="modal-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    background-color: $background-color-black;
    background-color: $background-color-opacity;
}

.modal-content {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>