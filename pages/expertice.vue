<template>
    <div>
        <div class="card" v-for="(card, index) in cardOne" :key="index">
            <WorkfieldsPageComponent :Title="card.title" :SubTitle="card.subTitle" :Content="card.content" />
        </div>
    </div>
</template>

<script setup>
const cardOne = [{
    title: "",
    subTitle: 'Expertice',
    content: 'Ons specialisme is het identificeren en verleiden van talentvolle kandidaten met behulp van geavanceerde zoektechnieken, sociale media, netwerken en andere sourcing strategieën. Naast de sourcing bieden wij extra services als het maken van maandelijkse persona’s, talentmaps en social media videos.'
}]
</script>