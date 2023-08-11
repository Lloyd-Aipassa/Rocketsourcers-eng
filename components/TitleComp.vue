<template>
    <section id="title">
        <slot />
    </section>
</template>

<script setup>
const props = defineProps({
    Title: String
})
</script>

<style scoped>
#title {
    width: 1200px;
    margin: 0 auto;
}


@media screen and (max-width: 1439px) {
    #title {
        max-width: 1080px;
    }
}

@media screen and (max-width: 1239px) {
    #title {
        max-width: 785px;
    }
}

@media screen and (max-width: 720px) {
    #title {
        width: 90%;
        margin: 36px auto;
    }
}
</style>