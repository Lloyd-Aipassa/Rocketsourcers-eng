<template>
    <transition name="fade">
        <p v-if="Test">hi</p>
    </transition>
    <button @click="Menu">show</button>
    <button @click="Close">close</button>
</template>


<script setup>
let Test = ref(false)

const Menu = () => Test.value = true
const Close = () => Test.value = false

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}</style>