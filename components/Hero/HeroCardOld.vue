<template>
    <section id="hero-card">
        <img :src="HeroCardImg" class="hero-img"  alt="talent sourcers" />
        <div class="content">
            <h2>{{ CardTitle }}<span>.</span> </h2>
            <p v-html="CardContent"></p>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    HeroCardImg: String,
    CardTitle: String,
    CardContent: String,
})
</script>

<style scoped>
#hero-card {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    padding: 54px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
}

#hero-card h2 {
    font-size: 32px;
    font-weight: 800;
    line-height: 32px;
    max-width: 800px;
    max-width: 422px;
    margin-bottom: 10px;
}

#hero-card p {
    max-width: 645px;
}

#hero-card h2 span {
    color: var(--color-orange);
}

img.hero-img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: auto;
    min-height: 100%;
}

@media screen and (max-width: 1439px) {
    #hero-card {
        max-width: 1080px;
    }
}

@media screen and (max-width: 1239px) {
    #hero-card {
        display: flex;
        flex-direction: row-reverse;
        max-width: 785px;
        padding: 0;
    }

    .content {
        padding: 32px;
    }

    img.hero-img {
        position: relative;
        width: auto;
        height: 100%;
        top: 0;
        right: 0;
        bottom: 0;
    }

    #hero-card h2 {
        font-size: 24px;
        font-weight: 800;
        line-height: 21px;
        max-width: 360px;
        margin-bottom: 11px;
    }

    #hero-card p {
        font-size: 14px;
        line-height: 24px;
    }
}

@media screen and (max-width: 720px) {
    .content {
        padding: 32px 24px;
    }

    #hero-card {
        display: block;
        max-width: 90%;
        margin: 0 auto;
        background-color: #fff;
        padding: 0;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
    }

    img.hero-img {
        position: relative;
        width: 100%;
        height: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    #hero-card h2 {
        font-size: 18px;
        font-weight: 800;
        line-height: 21px;
        max-width: 800px;
        margin-bottom: 11px;
    }

    #hero-card p {
        font-size: 14px;
        line-height: 24px;
    }
}
</style>