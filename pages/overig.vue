<template>
    <div>
        <div class="card" v-for="(card, index) in cardOne" :key="index">
            <WorkfieldsPageComponent :Title="card.title" :SubTitle="card.subTitle" :Content="card.content" />
        </div>
    </div>
</template>

<script setup>
const cardOne = [{
    title: "We zijn experts in het sourcen voor",
    subTitle: 'MEERDERE TYPE VACATURE’S',
    content: 'Onze kracht als talent sourcer komt voort uit onze bestaande expertise en ons vermogen om ons snel aan te passen en te leren. We omarmen uitdagingen en staan klaar om nieuwe vakgebieden te verkennen. <br> <br> Bij elk nieuw project starten we met grondig onderzoek om de essentiële vaardigheden, kennis en eigenschappen voor succes in die rol te begrijpen. We dompelen onszelf onder in de taal, trends en uitdagingen van het vakgebied en bouwen waardevolle relaties op met professionals en experts. <br> <br> Onze aanpak van talent sourcing past zich moeiteloos aan elk vakgebied aan. Of het nu gaat om IT-professionals, financiële experts, supply chain managers, inkopers, callcenter agents of andere professionals, we passen onze strategieën en tools aan voor optimale resultaten. <br> <br> Wij gaan verder dan alleen het identificeren van technische vaardigheden en ervaring; we zoeken naar de culturele fit, potentie voor groei en unieke eigenschappen van elke kandidaat. Op die manier vinden we professionals die niet alleen aan de technische eisen voldoen, maar ook bijdragen aan de doelstellingen en cultuur van jouw organisatie.<br> <br> Ons vermogen om nieuwe vakgebieden snel te doorgronden en talent te sourcen maakt ons flexibel en veerkrachtig. In een wereld die voortdurend verandert en evolueert, zijn we vastbesloten om het juiste talent te vinden dat jouw organisatie zal helpen groeien!'
}]
</script>