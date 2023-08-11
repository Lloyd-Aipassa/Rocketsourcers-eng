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
    subTitle: 'DE BESTE LEGAL KANDIDATEN?',
    content: 'Het vinden van de juiste juridische professionals vereist kennis en strategie. In een veld dat precisie, ethiek en intellect vereist, hebben we een subtiele aanpak nodig. We moeten technische kennis van de rechtspraktijk combineren met de menselijke elementen die de juridische sector uniek maken. <br> <br> We starten door de nodige competenties en ervaring voor de functie te bepalen. Een bedrijfsjurist, arbeidsrechtadvocaat of compliance officer, bijvoorbeeld, vereist elk andere vaardigheden en kennis. Door de nuances van deze specialisaties te begrijpen, kunnen we kandidaten vinden die perfect bij de functie passen. <br> <br> Ook de culturele fit van een kandidaat is belangrijk. Juridische professionals werken vaak in intensieve en collaboratieve omgevingen en moeten goed kunnen samenwerken. We houden rekening met de cultuur en waarden van jouw organisatie om kandidaten te vinden die technisch geschikt zijn en bijdragen aan de organisatie als geheel. <br> <br> We hanteren een proactieve aanpak bij het vinden van juridisch talent. We zoeken niet alleen actieve kandidaten, maar identificeren ook passieve kandidaten die openstaan voor een nieuwe uitdaging. Dit houdt in dat we relaties opbouwen binnen de juridische gemeenschap en aanwezig zijn in relevante online netwerken. <br> <br>Het vinden van juridisch talent is een uitdaging, maar we hebben de kennis, vaardigheden en strategieën om deze aan te gaan. We vinden niet alleen de meest gekwalificeerde kandidaten, maar ook diegenen die het beste passen bij jouw organisatie en haar unieke behoeften.'
}]
</script>