<template>
    <section id="hero-card">
        <slot name="heroImg">
            <img src="/Hero/VicDuy2.webp" class="test" alt="talent sourcers" />
        </slot>
        <!-- <div class="im">
        </div> -->
        <div class="content">
            <slot name="heroTitle">
                <h1><span>.</span></h1>
            </slot>
            <slot name="heroText">
                <p></p>
            </slot>
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
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    max-width: 1200px;
    margin: 136px auto -65px;
}

h1 {
    max-width: 850px;
    text-transform: uppercase;
    margin-bottom: 34px;
}

h1 span {
    color: var(--color-orange);
}

#hero-card p {
    max-width: 685px;
    padding-bottom: 64px;
}

#hero-card h2 span {
    color: var(--color-orange);
}

img.test {
    /* position: absolute; */
    /* top: -18px; */
    margin-right: -50px;
    bottom: 0;
    height: auto;

}

@media screen and (max-width: 1439px) {
    #hero-card {
        max-width: 1080px;
    }
}

@media screen and (max-width: 1239px) {
    #hero-card {
        display: flex;
        flex-direction: column-reverse;
        max-width: 785px;
        padding: 0;
    }

    img.hero-img {
        position: relative;
        top: 1px;
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
        padding: 0;
    }
}

@media screen and (max-width: 720px) {
    .content {
        padding: 0;
    }

    #hero-card {
        display: flex;
        flex-direction: column-reverse;
        max-width: 90%;
        margin: 0 auto;
        padding: 0;
        overflow: hidden;
        z-index: 200;
    }

    img.test {
        width: 100%;
        top: 1px;
    }

    #hero-card h1 {
        font-size: 29px;
        font-weight: 900;
        line-height: 110%;
        text-transform: uppercase;
        width: 100%;
        margin: 48px auto 16px;
    }

    #hero-card p {
        font-size: 14px;
        line-height: 24px;
    }
}
</style>