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
    subTitle: 'DE BESTE HR KANDIDATEN?',
    content: `Het aantrekken van de juiste HR-professionals vraagt om een mix van inzicht, empathie en strategie. HR neemt een sleutelpositie in bij de begeleiding van het personeel, daarom gaan we actief op zoek naar de professionals die hier het beste invulling aan kunnen geven. <br> <br> HR is niet enkel gericht op werving en selectie, het bestrijkt ook aspecten zoals talentontwikkeling, compensatiebeheer, werknemerstevredenheid en conflictbemiddeling. Wij sourcen kandidaten die ervaring hebben met dit brede spectrum aan verantwoordelijkheden, met oog voor zowel de technische aspecten van HR als de menselijke dynamiek die de kern van het veld vormt. <br> <br> Een succesvolle HR-professional combineert kennis van wetten en best practices in HR met luistervaardigheden, begrip en strategisch denken. Zij dienen een verbindende rol op zich te nemen tussen management en werknemers, en een bedrijfscultuur uit te dragen die de waarden en doelen van de organisatie reflecteert. <br> <br> In onze zoektocht naar HR-professionals gaan we verder dan alleen diploma's en ervaring. We letten op de persoonlijkheid, houding en culturele fit van de kandidaat. Wij zoeken iemand met de juiste balans tussen empathie en zakelijk inzicht, die een waardevolle toevoeging zal zijn aan jouw organisatie.`
}]
</script>