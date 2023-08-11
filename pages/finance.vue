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
    subTitle: 'DE BESTE FINANCE KANDIDATEN?',
    content: 'Het vinden van finance professionals is een unieke uitdaging. Dit komt omdat financiële vaardigheden en kennis verder gaan dan alleen het begrijpen van cijfers; ze omvatten strategisch denken, uitgebreide probleemoplossing, ethisch inzicht en uitstekende communicatieve vaardigheden. <br> <br> Elke rol, van een boekhouder tot een chief financial officer, vereist een specifieke set van competenties en ervaringen. Deze rollen vereisen niet alleen technische vaardigheden, zoals het vermogen om balansen te analyseren en budgetten te beheren, maar ook soft skills, zoals leiderschap en teammanagement. <br> <br> Om talent met het juiste financiële profiel te vinden, is een gedegen begrip van de behoeften van de rol essentieel. Dit betekent niet alleen het kennen van de functieomschrijving, maar ook het begrijpen van de bedrijfscultuur, de waarden en de strategische doelstellingen van de organisatie. Deze factoren helpen bij het identificeren van kandidaten die niet alleen de vaardigheden en ervaring hebben die nodig zijn voor de functie, maar die ook in staat zullen zijn om een positieve bijdrage te leveren aan de organisatie als geheel.<br> <br> Verder is het belangrijk om de juiste tools en methoden te gebruiken bij het zoeken naar financieel talent. Dit omvat geavanceerde zoektechnieken, maar ook het benutten van professionele netwerken en het bouwen van sterke relaties met potentiële kandidaten. Het gaat hierbij niet alleen om het vinden van actieve kandidaten, maar ook om het identificeren van passieve kandidaten die mogelijk geïnteresseerd zijn in nieuwe kansen.'
}]
</script>