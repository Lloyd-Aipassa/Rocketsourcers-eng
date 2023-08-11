
<template>
    <!-- <HeaderTopWhite /> -->
    <main id="wfpc">
        <section class="content">
            <h1>{{ Title }}</h1>
            <h2>{{ SubTitle }}</h2>
            <p v-html="Content"></p>
        </section>
        <div class="container">
            <ContactAlgemeen />
        </div>
    </main>
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
    min-height: 80vh;
    display: flex;
    margin: 50px auto;
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

.container{
    width: 100%;
}

@media screen and (max-width: 600px) {
    #wfpc {
        max-width: 90%;
        display: flex;
        flex-direction: column;
        margin: 0px auto 0 auto;
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
        margin: 24px 0 -26px;
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

    ;
}</style>    