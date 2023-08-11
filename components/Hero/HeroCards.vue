<template>
    <NuxtLink to="/expertice" @click="Close">
        <section id="cards">
            <div class="cards">
                <img :src="HeroCardsImg" alt="" />
                <h4>{{ CardsTitle }}</h4>
                <p>{{ CardsContent }}</p>
            </div>
        </section>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    HeroCardsImg: String,
    CardsTitle: String,
    CardsContent: String,
})
</script>

<style scoped>
/* CARDS */
#cards {
    margin: 0px auto;
    max-width: 1200px;
    z-index: 2;
    position: relative;
    height: 100%;
}

#cards h2 {
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 100%;
    margin-bottom: 24px;
}

#cards h2 span {
    color: var(--color-orange);
}

.cards {
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 40px;
    width: 100%;
    background-color: #fff;
    z-index: 3;
    height: 100%;
  
}

.cards h4 {
    width: 100%;
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    color: #001d3d;
}

a{
    text-decoration: none;
    height: 100%;
}
.cards p  {
    width: 100%;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    color: #001d3d;
}

@media screen and (max-width: 1439px) {
    #cards {
        max-width: 1080px;
    }

    .cards {
        margin-top: 0px;
        padding: 35px 30px 35px 35px ;
    }

}

@media screen and (max-width: 1239px) {

    #cards {
        max-width: 785px;
    }

    #cards h2 {
        font-weight: 800;
        font-size: 24px;
        line-height: 100%;
    }
}

@media screen and (max-width: 720px) {

    /* CARDS */
    #cards {
        width: 90%;
    }

    .cards {
        margin-top: 0px;
        padding: 35px;
    }

    .cards p {
        width: 100%;
        margin-bottom: 15px;
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
    }

}
</style>