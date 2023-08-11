<template>
    <div class="title-recommendation">
        <h2>WAT VINDEN ONZE KLANTEN<span>.</span></h2>
    </div>
    <section id="recommendation-container">
        <div class="card" v-for="(card, index) in cardTwo" :key="index">
            <RecommendationCard :Image="card.image" :Name="card.name" :Function="card.function" :Quote="card.quote" />
        </div>
        <div class="card" v-for="(Two, index) in cardOne" :key="index">
            <RecommendationCard :Image="Two.image" :Name="Two.name" :Function="Two.function" :Quote="Two.quote" />
        </div>
    </section>
</template>

<script setup>

const cardOne = [{
    image: "/reconmendations/lotte.jpeg",
    // image: '/public/lotte.jpeg',
    name: 'Lotte Konieczek-Sommerdijk',
    function: `Manager Recruitment & Employer <br> Branding Jumbo Supermarkten`,
    quote: '"Viec was een effectieve en betrouwbare recruiter bij Jumbo met indrukwekkende IT-kennis. Zijn veelzijdigheid en professionaliteit hebben zijn waarde voor ons team bewezen. Zijn inzet en expertise waren lovenswaardig. Ik raad hem ten zeerste aan voor elke wervingsrol."'
}]
const cardTwo = [{
    image: '/reconmendations/Mano.webp',
    name: 'Mano Radema',
    function: 'Openbaar Ministerie <br> Programmamanager arbeidsmarkt strategie',
    quote: '"Rocketsourcers heeft voor het OM consequent uitstekende kandidaten gevonden. Hun aanpak is responsief, samenwerkend en nauwgezet, met een scherp oog voor talent. Ze rapporteren helder over hun werk. Hun toewijding aan diversiteit en inclusie is indrukwekkend."'
}]
</script>

<style scoped>
.title-recommendation h2 {
    position: relative;
    z-index: 5;
    max-width: 1200px;
    margin: 50px auto 20px;
}

.title-recommendation h2 span {

    color: #f89a03;
}

#recommendation-container {
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin: 0 auto 40px auto;
}

.card {
    height: 100%;
}

@media screen and (max-width: 1439px) {
    #recommendation-container {
        max-width: 1080px;
    }

    .title-recommendation h2 {
        position: relative;
        z-index: 5;
        max-width: 1080px;
        margin: 50px auto 20px;
    }
}

@media screen and (max-width: 1239px) {
    #recommendation-container {
        max-width: 785px;
    }

    .title-recommendation h2 {
        position: relative;
        z-index: 5;
        max-width: 785px;
        margin: 50px auto 20px;
    }
}

@media screen and (max-width: 720px) {
    #recommendation-container {
        grid-template-columns: 1fr;
        width: 90%;
    }

    .title-recommendation h2 {
        width: 90%;
        margin: 50px auto 20px;
    }

    .title-recommendation h2 span {
        color: #f89a03;
    }
}
</style>