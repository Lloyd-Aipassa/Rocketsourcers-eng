<template>
    <div>
        <ElipseTop />
        <ElipseLeft> <img src="~/assets/Hero/EllipseLeft.svg" class="hero-orange-left" alt="halve circel" /> </ElipseLeft>
        <HeroCard>
            <template #heroCard class="h-card"/>
            <template #heroImg><img class="test" src="/Hero/heroBanner.webp" alt=""></template>
            <template #heroTitle>
                <h1>We find the best and most talented candidates.<span>.</span></h1>
            </template>
            <template #heroText><p>Als equal opportunity talent sourcing specialist geloven we dat het succes van een team schuilt in een unieke mix van vaardigheden, ervaringen en achtergronden. Onze missie is om vooruitstrevende organisaties te verbinden met uitzonderlijk talent, waardoor zij de positieve impact van diversiteit en inclusiviteit kunnen ervaren.</p></template>
        </HeroCard>

        <div  v-for="(card, index) in cardTwo" :key="index">
            <RecommendationBlueCard :Image="card.image" :Name="card.name" :Title="card.Title" :Function="card.function"
                :Quote="card.quote" :ShortQuote="card.ShortQuote" />
        </div>

        <TitleComp>
            <h2>WHY OUTSOURCE SOURCING<span>.</span></h2>
        </TitleComp>
        <div class="cards-container">
            <div class="hero-card" v-for="(Hcards, index) in HeroCardsData" :key="index">
                <HeroCards :HeroCardsImg="Hcards.HeroCardsImg" :CardsTitle="Hcards.CardsTitle"
                    :CardsContent="Hcards.CardsContent" />
            </div>
            <div class="hero-card" v-for="(Hcards, index) in HeroCardsData2" :key="index">
                <HeroCards :HeroCardsImg="Hcards.HeroCardsImg" :CardsTitle="Hcards.CardsTitle"
                    :CardsContent="Hcards.CardsContent" />
            </div>
            <div class="hero-card" v-for="(Hcards, index) in HeroCardsData3" :key="index">
                <HeroCards :HeroCardsImg="Hcards.HeroCardsImg" :CardsTitle="Hcards.CardsTitle"
                    :CardsContent="Hcards.CardsContent" />
            </div>
            <div class="hero-card" v-for="(Hcards, index) in HeroCardsData4" :key="index">
                <HeroCards :HeroCardsImg="Hcards.HeroCardsImg" :CardsTitle="Hcards.CardsTitle"
                    :CardsContent="Hcards.CardsContent" />
            </div>
            <div class="hero-card" v-for="(Hcards, index) in HeroCardsData5" :key="index">
                <HeroCards :HeroCardsImg="Hcards.HeroCardsImg" :CardsTitle="Hcards.CardsTitle"
                    :CardsContent="Hcards.CardsContent" />
            </div>
            <div class="hero-card" v-for="(Hcards, index) in HeroCardsData6" :key="index">
                <HeroCards :HeroCardsImg="Hcards.HeroCardsImg" :CardsTitle="Hcards.CardsTitle"
                    :CardsContent="Hcards.CardsContent" />
            </div>
        </div>

        <div class="card" v-for="(card, index) in cardOne" :key="index">
            <RecommendationBlueCard :Image="card.image" :Name="card.name" :Title="card.Title" :Function="card.Function"
                :Quote="card.quote" :ShortQuote="card.ShortQuote" />
        </div>

        <WorkfieldsButtons />
        <Founder />
        <Recommendation />
        <ContactComponent />
        <SourcingFor />
        <SourcingForMob />
    </div>
</template>

<script setup>

// ** Hero-card  **
const HeroCardData = [{
    HeroCardImg: "/Hero/heroBanner.webp",
    CardTitle: 'De best passende en getalenteerde kandidaten',
    CardContent: `Als equal opportunity talent sourcing specialist geloven we dat het succes van een team schuilt in een unieke mix van vaardigheden, ervaringen en achtergronden Onze missie is om vooruitstrevende organisaties te verbinden met uitzonderlijk talent, waardoor zij de positieve impact van diversiteit en inclusiviteit kunnen ervaren.`
}]
// ** Hero-card END **


// ** Hero-cards start  **
const HeroCardsData = [{
    HeroCardsImg: "/Hero/rocketImg.svg",
    CardsTitle: 'Expertise',
    CardsContent: `Ons specialisme is het identificeren en verleiden van talentvolle kandidaten om met jouw organisatie in gesprek te gaan. Hierbij maken we gebruik van geavanceerde zoektechnieken, sociale media, netwerken en andere sourcing strategieën. Naast de sourcing bieden wij extra services als het maken van maandelijkse persona’s, talentmaps en social media videos.`
}]
const HeroCardsData2 = [{
    HeroCardsImg: "/Hero/bullseyeImg.svg",
    CardsTitle: 'Efficiency',
    CardsContent: `Door uit te besteden kunnen we kostbare tijd besparen, wat jouw team de mogelijkheid geeft om zich te concentreren op andere belangrijke taken. Deze taken kunnen variëren van stakeholdermanagement, het voeren van interviews en het onboarden van nieuwe medewerkers, tot het uitvoeren van projecten die van belang zijn voor de voortgang en het succes van jouw organisatie.`
}]
const HeroCardsData3 = [{
    HeroCardsImg: "/Hero/piggyBankImg.svg",
    CardsTitle: 'Kostenbesparing',
    CardsContent: `Door met ons samen te werken, hoef je niet langer rekening te houden met variabele en onverwachte kosten in je werving- en selectieproces. Voor een vast bedrag per maand krijg je toegang tot ons kundige team van talent sourcers. Deze specialisten zetten hun kennis en vaardigheden in om de juiste kandidaten voor jouw vacatures te vinden.`
}]
const HeroCardsData4 = [{
    HeroCardsImg: "/Hero/FlexibiliteitImg.svg",
    CardsTitle: 'Flexibiliteit',
    CardsContent: `Wij begrijpen dat de wervingsbehoeften van jouw organisatie door (markt)omstandigheden kunnen veranderen. Daarom bieden wij maximale flexibiliteit in onze diensten. Ons team staat klaar om snel op te schalen of af te bouwen om zo aan jouw veranderende behoeften te voldoen. Onze aanpak zorgt op deze wijze voor een naadloze en stressvrije ervaring.`
}]
const HeroCardsData5 = [{
    HeroCardsImg: "/Hero/Talentpool.svg",
    CardsTitle: 'Talentpooling',
    CardsContent: `Wij creëren talentpools met kandidaten die nu of in de toekomst waardevol kunnen zijn. Door deze aanpak bevorderen we diversiteit, verbeteren we de kwaliteit van de match en dragen we bij aan een effectieve personeelsplanning.`
}]
const HeroCardsData6 = [{
    HeroCardsImg: "/Hero/Diversity.svg",
    CardsTitle: 'Diversiteit en inclusie',
    CardsContent: `Wij geloven dat een diverse groep werknemers de sleutel is tot succes en innovatie. Daarom doen onze talent sourcers hun uiterste best om kandidaten van alle achtergronden te vinden. Zo zorgen we ervoor dat ons sourcing aanbod een mooie mix is van ervaringen, perspectieven en vaardigheden. Samen met ons werk je aan een inclusieve werkomgeving en een diverse bedrijfscultuur.`
}]
// ** Hero-cards END **

const cardOne = [{
    image: "/reconmendations/Mano.webp",
    name: 'Mano Radema',
    Title: 'Openbaar Ministerie',
    Function: 'Programmamanager arbeidsmarkt strategie',
    quote: '"Rocketsourcers heeft voor het OM consequent uitstekende kandidaten gevonden. Hun aanpak is responsief, samenwerkend en nauwgezet, met een scherp oog voor talent. Ze rapporteren helder over hun werk. Hun toewijding aan diversiteit en inclusie is indrukwekkend."',
    ShortQuote: `"Ze tonen talentinzicht en heldere rapportages.<br> Rocketsourcers is OM's sourcing partner."`
}]


const cardTwo = [{
    image: '/reconmendations/Thijs.webp',
    name: 'Thijs Roovers',
    Title: 'RNHB',
    function: 'Director HR',
    quote: 'Ik heb fijn met Viec samengewerkt. Hij levert altijd, komt zijn afspraken na en bekwaam in zijn vakgebied. Viec past zich aan wanneer dat moet, gaat altijd net even een stapje verder en zorgt voor duidelijke communicatie. Dit zijn standaard onderdelen van zijn service. Als je een uitdagende vacature hebt, meer sollicitanten wilt hebben of die ene topkandidaat wilt vinden; bel Viec.',
    ShortQuote: `"Topkandidaten nodig voor een lastige vacature? Rocketsourcers levert altijd een geweldige match."`
}]


</script>

<style scoped>

.hero-orange-left {
    position: absolute;
    top: 1800px;
    left: 0;
    width: 20vw;
}

h1 {
    max-width: 850px;
    text-transform: uppercase;
    margin-bottom: 17px;
}
 h1 span {
    color: var(--color-orange);
}

#title h2{
    margin-bottom: 20px;
    text-transform: uppercase;
}

#title h2 span {
    color: var(--color-orange);
}

#hero-card p {
    max-width: 685px;
    padding-bottom: 64px;
}

#hero-card h1 span {
    color: var(--color-orange);
}

.cards-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 18px;
}

@media screen and (max-width: 1440px) {

}
@media screen and (max-width: 1239px) {

    h1 {
        margin: -62px 0 17px;
    }
    img.test{
        width: 550px;
        align-self: center;
        margin-top: -60px;
    }

    
    .cards-container{
    grid-template-columns: 1fr 1fr;
}
}

@media screen and (max-width: 720px) {
    h1 {
        margin: 48px 0 17px;
    }

    #title h2{
    margin-bottom: -20px;
}

    .cards-container{
    grid-template-columns: 1fr;
}

img.test{
    margin: 0px 0 -2px;
    width: 100%;
}
    .card{
    margin-top: 64px;
}

}
</style>
