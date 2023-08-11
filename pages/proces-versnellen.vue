<template>
    <div>
        <div class="card" v-for="(card, index) in cardOne" :key="index">
            <CardPageComponent :Title="card.title" :SubTitle="card.subTitle" :Content="card.content" />
        </div>
    </div>
</template>

<script setup>
const cardOne = [{
    title: "Versnel je sourcing proces",
    subTitle: 'VOOR HET VINDEN VAN DE BESTE KANDIDATEN',
    content: 'Sourcing is een wervingsmethode waarbij we actief op zoek gaan en in contact komen met potentiële kandidaten. We creëren een pool van gekwalificeerde kandidaten die geïnteresseerd zijn om voor de klant te werken. Dit versnelt het wervingsproces omdat de klant een lijst met kandidaten heeft waarmee hij direct contact kan opnemen.<br> <br>Bovendien kan sourcing de time-to-hire verkorten, de tijd die nodig is om een functie in te vullen. Wanneer een klant een pijplijn van gekwalificeerde kandidaten heeft, kunnen ze snel en efficiënt contact met hen opnemen, waardoor ze sneller door het wervingsproces worden geleid. Dit helpt ervoor te zorgen dat openstaande vacatures sneller worden ingevuld. <br><br> Tot slot kan sourcing de kandidaat ervaring verbeteren door een relatie op te bouwen met potentiële kandidaten. Wanneer we in contact komen met potentiële kandidaten en een positieve ervaring creëren, is de kans groter dat deze kandidaten geïnteresseerd zijn om voor onze klant te werken. Dit kan helpen om het wervingsproces te versnellen, aangezien deze kandidaten al geïnteresseerd en betrokken zijn. '
}]
</script>