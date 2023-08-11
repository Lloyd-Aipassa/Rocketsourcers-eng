<template>
    <div>
        <div class="card" v-for="(card, index) in cardOne" :key="index">
            <CardPageComponent :Title="card.title" :SubTitle="card.subTitle" :Content="card.content" />
        </div>
    </div>
</template>

<script setup>
const cardOne = [{
    title: "We nemen het gedeelte over",
    subTitle: 'DAT HET MEEST TIJDROVEND IS',
    content: 'Het werven van nieuw talent voor je bedrijf kan een uitdagend en tijdrovend proces zijn. Het doorzoeken van cv’s, het screenen van sollicitaties en het identificeren van potentiële kandidaten die mogelijk geschikt zijn voor de functie, vereist een aanzienlijke investering van tijd en middelen.<br> <br> Door met ons in zee te gaan, kun je de vervelende en tijdrovende taak van het vinden van kandidaten aan ons uitbesteden. Wij zullen namens jou potentiële kandidaten identificeren en benaderen, wat jou veel tijd bespaart. Dit zal helpen om het wervingsproces te stroomlijnen, de kwaliteit van de kandidaten die je in overweging neemt te verbeteren en je uiteindelijk tijd en middelen te besparen op de lange termijn. '
}]
</script>