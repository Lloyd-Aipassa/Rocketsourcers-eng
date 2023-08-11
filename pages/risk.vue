<template>
    <div>
        <div class="card" v-for="(card, index) in cardOne" :key="index">
            <WorkfieldsPageComponent :Title="card.title" :SubTitle="card.subTitle" :Content="card.content" />
        </div>
    </div>
</template>

<script setup>
const cardOne = [{
    title: "Ben jij op zoek naar",
    subTitle: 'DE BESTE RISK KANDIDATEN',
    content: `Het werven van Risk professionals is een specifieke taak waarvoor gerichte expertise en inzicht nodig is. Deze professionals spelen een cruciale rol bij het beheersen van de financiële stabiliteit van een organisatie, daarom is het essentieel om de juiste mensen te vinden die de complexiteit van dit vakgebied begrijpen. <br> <br> We identificeren de benodigde vaardigheden, begrijpen de technische aspecten van risicobeheer en de bredere context waarin deze risico's zich voordoen. Het gaat niet alleen om operationeel, krediet, markt of strategisch risico; elke subdiscipline vereist een unieke set skills en inzichten.<br> <br> Technische vaardigheden zijn belangrijk, maar de mogelijkheid om complexe informatie te communiceren en snel te reageren op veranderende omstandigheden is even belangrijk. We zoeken naar professionals die sterke analytische vaardigheden hebben, een goed begrip van de business en de industrie, en die zich flexibel opstellen. <br> <br>De culturele fit binnen jouw organisatie is ook van groot belang. We evalueren hoe een risk professional zich aanpast aan jouw team en bedrijfscultuur, aangezien hun effectiviteit in stressvolle situaties hiervan afhankelijk kan zijn. <br> <br>Onze zoektocht is uitgebreid. We kijken niet alleen naar professionals die actief op zoek zijn naar nieuwe kansen, maar we identificeren ook passieve kandidaten. Dit doen we door relaties op te bouwen binnen de risk management gemeenschap, social media en andere digitale platforms in te zetten.`
}]
</script>