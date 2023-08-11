<template>
    <div>
        <div class="card" v-for="(card, index) in cardOne" :key="index">
            <CardPageComponent :Title="card.title" :SubTitle="card.subTitle" :Content="card.content" />
        </div>
    </div>
</template>

<script setup>
const cardOne = [{
    title: "We zorgen ervoor dat het team",
    subTitle: 'MAAR ÉÉN FOCUS HEEFT',
    content: 'Wanneer je met ons samenwerkt, zijn wij jouw toegewijde partner bij het vinden en het benaderen van potentiële kandidaten voor je bedrijf. Wij nemen de verantwoordelijkheid op ons om potentiële kandidaten te identificeren en te bereiken, evenals het screenen en evalueren van hun geschiktheid voor de functies die vervult moeten worden. Dit geeft je team meer tijd om zich te concentreren op waar ze goed in zijn: het evalueren en selecteren van de beste kandidaten voor je bedrijf. Daarnaast zal het je helpen om een sterker, meer competitief team op te bouwen dat in staat is om de uitdagingen van vandaag de dag aan te gaan. '
}]
</script>