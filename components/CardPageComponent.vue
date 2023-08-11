
<template>
    <HeaderTopWhite />
    <HeaderBotWhite />

    <main id="wfpc">
        <section class="wfpc">
            <div class="content">
                <h1>{{ Title }}</h1>
                <h2>{{ SubTitle }}</h2>
                <p v-html="Content"></p>
            </div>
            <ContactAlgemeen />
        </section>
    </main>
    <section class="content-bottom">
        <div class="button-container">
            <WorkfieldsButtons />
        </div>
        <img src="~/assets/QuickScan/astronaut.webp" width="250" height="255" alt="Vliegende astronaut">
    </section>
</template>

<script setup>
const props = defineProps({
    Title: String,
    SubTitle: String,
    Content: String,
})
</script>

<style scoped>
#wfpc {
    max-width: 1200px;
    height: 100%;
    margin: 50px auto 0 auto;
}

.wfpc {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 50px;
}

h1 {
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    color: var(--color-orange);
}

h2 {
    font-size: 32px;
    font-weight: 800;
    line-height: 32px;
    margin-bottom: 20px;
    max-width: 533px;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 720px;
    background-color: #fff;
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
    padding: 50px 50px 50px 50px;
    min-height: 430px;
    border-radius: 8px;
}

.button-container {
    width: 1000px;
    margin: 0 auto 0 auto;
}

.content-bottom {
    display: flex;
    justify-content: center;
    max-width: 1200px;
    margin: auto;
}

.content-bottom img {
    position: relative;
    pointer-events: none;
    align-self: flex-end;
    animation-name: example;
    animation-duration: 7s;
    animation-iteration-count: infinite;
}

@media screen and (max-width: 600px) {
    #wfpc {
        max-width: 90%;
        height: 100%;
        margin: 50px auto 0 auto;
    }

    .wfpc {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 720px;
        background-color: #fff;
        box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
        padding: 50px 24px;
        min-height: 430px;
        border-radius: 8px;
    }

    h2 {
        font-size: 28px;
        font-weight: 800;
        line-height: 28px;
        margin-bottom: 20px;
    }

    p {
        font-size: 14px;
    }


    .button-container {
        width: 100%;
    }

    .content-bottom {
        display: flex;
        flex-direction: column;
    }

    .content-bottom img {
        margin-top: -60px;
        align-self: center;
        animation-name: example;
        animation-duration: 7s;
        animation-iteration-count: infinite;
    }

}

/* ANIMATIES */
@keyframes example {
    0% {

        left: 0px;
        top: 0px;
    }

    25% {

        left: 3px;
        top: 8px;
    }

    50% {

        left: 0px;
        top: 0px;
    }

    75% {

        left: 3px;
        top: 8px;
    }

    100% {

        left: 0px;
        top: 0px;
    }
}
</style>    