<template>
    <div>
        <ElipseTop />
        <ElipseLeft />
        <HeroCard>
            <template #heroImg><img class="test" src="/Hero/VicDuy2.webp" alt=""></template>
            <template #heroTitle>
                <h1>organisaties <br>verbinden met<br> uitzonderlijk talent<span>.</span></h1>
                <!-- <h1>VOORUITSTREVENDE ORGANISATIES VERBINDEN MET UITZONDERLIJK TALENT<span>.</span></h1> -->
            </template>
            <template #heroText>
                <p>Het succes van toonaangevende organisaties ligt in het vermogen om een werkomgeving te creëren waarin iedereen zich gewaardeerd, gerespecteerd en betrokken voelt, ongeacht hun achtergrond, cultuur, leeftijd, geslacht, seksuele geaardheid, religie, handicap of andere persoonlijke kenmerken. Wij erkennen dat diversiteit en inclusie cruciaal zijn voor het bouwen van de sterke, innovatieve teams van morgen.</p>
            </template>
        </HeroCard>

        <div class="card" v-for="(card, index) in cardTwo" :key="index">
            <RecommendationBlueCard :Image="card.image" :Name="card.name" :Title="card.Title" :Function="card.function"
                :Quote="card.quote" :ShortQuote="card.ShortQuote"/>
        </div>


        <!-- <div class="cards-container">
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
        </div> -->

     

        <div class="card2">
            <img src="/Hero/onze-cultuur.webp" class="diensten-img" alt="talent sourcers" />
            <h2>Onze cultuur<span>.</span> </h2>
            <p>Wij zijn ambitieus, data-driven, resultaatgericht en geloven in gelijke kansen voor iedereen. <br><br>
                Voor ons is een team niet alleen een waardevol bezit, maar ook een bron van innovatie, creativiteit en
                empathie. Inclusiviteit betekent voor ons het erkennen, waarderen en benutten van de unieke bijdrage die een
                collega brengt. Wij geloven dat iedere stem telt en dat elke ervaring, ieder perspectief waardevol is.
                <br><br>
                We begrijpen dat elke collega wordt gedreven door zijn of haar eigen ambities, passies en waarden. In plaats
                van deze verschillen te negeren, omarmen we deze. Dit respect voor individuele drijfveren helpt ons om een
                teamcultuur te creëren waarin iedereen zich gezien, begrepen en gewaardeerd voelt. </p>
        </div>

        <div class="card" v-for="(card, index) in cardOne" :key="index">
            <RecommendationBlueCard :Image="card.image" :Name="card.name" :Title="card.Title" :Function="card.function"
                :Quote="card.quote" :ShortQuote="card.ShortQuote" />
        </div>


        <TeamNew />
        <Recommendation />
        <SourcingFor />
        <SourcingForMob />
        <ContactComponent />
    </div>
</template>

<script setup>

// ** Hero-cards start  **
const HeroCardsData = [{
    HeroCardsImg: "/Hero/rocketImg.svg",
    CardsTitle: 'Expertise',
    CardsContent: `Ons specialisme is het identificeren en verleiden van talentvolle kandidaten met behulp van geavanceerde zoektechnieken, sociale media, netwerken en andere sourcing strategieën. Naast de sourcing bieden wij extra services als het maken van maandelijkse persona’s, talentmaps en social media videos.`
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

const HeroCardData2 = [{
    HeroCardImg: "/Hero/onze-cultuur.webp",
    CardTitle: 'Onze cultuur',
    CardContent: `Als equal opportunity talent sourcing specialist geloven we dat het succes van een team schuilt in een unieke mix van vaardigheden, ervaringen en achtergronden. Onze missie is om vooruitstrevende organisaties te verbinden met uitzonderlijk talent, waardoor zij de positieve impact van diversiteit en inclusiviteit kunnen ervaren.`
}]
// ** Hero-card END **

// ** Blue card reconmedation **
const cardOne = [{
    image: "/reconmendations/Ivo.webp",
    name: 'Ivo Knottnerus',
    Title: 'Bolt IT',
    function: 'Co-founder ',
    quote: '"Rocketsourcers begrijpt goed wat wij zoeken en weet daarin de juiste personen en persoonlijkheden te zoeken die past bij een ambitieus groeiend bedrijf, of het nou in IT of Financial services is. Hiermee vinden wij nog steeds unieke goede werknemers in ons bedrijf, ondanks de uitdagende markt."',
    ShortQuote: `"Rocketsourcers begrijpt wat wij zoeken en weet de juiste personen en persoonlijkheden te vinden ondanks de uitdagende markt."`
}]


const cardTwo = [{
    image: '/reconmendations/jidske.webp',
    name: 'Jidske Morris',
    Title: 'Heemskerk fresh & easy',
    function: 'HR Manager ',
    quote: '"We zijn blij om samen te werken met Viec! In onze samenwerking is er sprake van positieve energie waarbij we prettig met elkaar communiceren, zodat we ervoor kunnen zorgen de juiste match te maken. Ik heb de begeleiding gedurende het hele proces als zeer waardevol ervaren. Viec is een zeer bekwame recruiter, is toegewijd en weet hoe hij een business partner moet zijn! Erg blij om met hem te werken."',
    ShortQuote: 'Viec is een zeer bekwame recruiter, is toegewijd en weet hoe hij een business partner moet zijn! Erg blij om met hem te werken."'
}]
// ** Blue card reconmedation end **
</script>

<style scoped>
h1 {
    max-width: 850px;
    text-transform: uppercase;
    margin-bottom: 17px;
}

h1 span {
    color: var(--color-orange);
}

#hero-card p {
    max-width: 685px;
    padding-bottom: 122px;
}

#hero-card h1 span {
    color: var(--color-orange);
}

.cards-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 18px;
}

img.test {
        align-self: flex-end;
    }

.hero-orange-top-mob {
    display: none;
}

.card2 span {
    color: var(--color-orange);
}


.card2 {
    position: relative;
    padding: 50px 40px;
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 40px 0;
    background-color: #fff;
    max-width: 1200px;
    margin: 0 auto 90px;
    overflow: hidden;
    min-height: 274px;
}

.card2 p {
    max-width: 663px;
    margin-top: 10px;
}

.card2 img {
    position: absolute;
    top: 0;
    right: -60px;
    width: 500px;
    height: auto;
}

@media screen and (max-width: 1439px) {
    .card2 {
        padding: 35px;
        max-width: 1080px;
        margin: 0 auto 90px;
    }

    .card2 p {
        max-width: 580px;
    }

    .card2 img {
        position: absolute;
        top: 0;
        right: -80px;
        width: 510px;
        height: auto;
    }
}

@media screen and (max-width: 1239px) {
     h1 {
        max-width: 600px;
        margin: -62px 0 17px;
    }

    .cards-container{
    grid-template-columns: 1fr 1fr;
}

    img.test {
        width: 400px;
        align-self: center;
        margin-top: -60px;
    }

    .card2 {
        padding: 35px;
        max-width: 780px;
        margin: 0 auto 90px;
    }

    .card2 p {
        max-width: 480px;
    }

    .card2 img {
        position: absolute;
        top: 0;
        right: -10px;
        width: 470px;
        height: auto;
        margin-right: -210px;
    }
}


@media screen and (max-width: 720px) {
    h1 {
        margin: 48px 0 17px;
    }

    .cards-container{
    grid-template-columns: 1fr;
}

    img.test {
        margin: 0px 0 -2px;
        width: 90%;
    }

    .hero-orange-top-mob {
        display: block;
        position: absolute;
        top: 580px;
        right: 0;
        width: 94vw;
    }

    #title h1 {
        width: 100%;
    }

    #hero-card p{
        padding-bottom: 30px;
    }

    .card2 {
        padding: 0;
        margin: 40px 0;
        max-width: 90%;
        margin: 0 auto 40px;

    }

    .card2 P {
        padding: 10PX 25PX 25PX;
    }

    .card2 H2 {
        padding: 10PX 25PX 0PX;
    }

    .card2 img {
        position: relative;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
}
</style>