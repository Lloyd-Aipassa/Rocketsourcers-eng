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
    subTitle: 'DE BESTE IT KANDIDATEN',
    content: `Het vinden van IT-professionals is een uitdaging die een uitgebreide aanpak vereist vanwege de snelle ontwikkelingen in de technische wereld.<br> <br> Bij het sourcen van IT-talent duiken we diep in de specifieke technologieën die relevant zijn voor de rol, of dit nu cloud computing, cybersecurity, software development of data-analyse betreft. We zorgen ervoor dat we de laatste trends en best practices in deze technische velden volgen. Naast technische skills, richten we ons ook op soft skills. We zoeken IT-professionals die prettig kunnen samenwerken met anderen, beschikken over goede communicatieve vaardigheden en complexe technische informatie kunnen vertalen naar begrijpelijke taal voor niet-technische collega's. Ook zoeken we naar personen die probleemoplossend kunnen denken en een proactieve houding hebben om bij te blijven met de nieuwste technologische ontwikkelingen. Een andere belangrijke factor in ons sourcing proces is de culturele fit. We zijn op zoek naar IT-professionals die niet alleen de technische kant van een functie aankunnen, maar ook goed passen bij jouw organisatie.<br> <br> Tot slot omarmen we een proactieve sourcing strategie. We wachten niet op sollicitaties, maar zoeken actief naar mogelijk geïnteresseerde kandidaten. Dit doen we door te netwerken, sociale media te volgen en relevante tech-evenementen bij te wonen. Door deze gecombineerde aanpak, kunnen we effectief IT-talent sourcen dat past bij jouw organisatie en de voortdurend veranderende technische wereld. We hebben de ervaring, kennis en drive om de IT-professionals te vinden die jouw organisatie naar een hoger niveau kunnen tillen.`
}]
</script>æ