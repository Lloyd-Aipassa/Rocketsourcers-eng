<template>
    <div>
        <ElipseTop />
        <ElipseLeft> <img src="~/assets/Hero/EllipseLeft.svg" class="hero-orange-left" alt="halve circel" /> </ElipseLeft>
        <TitleComp>
            <h1>MEER OVER TALENT SOURCING EN ONZE MEEST GESTELDE VRAGEN<span>.</span></h1>
        </TitleComp>

        <section id="over-talent-sourcing">
            <div class="card">
                <!-- <img src="~/assets/diensten/map.webp" class="diensten-img" alt="talent sourcers" /> -->
                <h2>Wat zijn de voordelen van talent sourcing? </h2>
                <p> Heb je moeite met het vinden van gekwalificeerde kandidaten voor je vacatures, loop je tegen problemen
                    aan met het lange wervingsproces of ben je veel geld kwijt aan werving & selectie fees? Misschien is de
                    kwaliteit van sollicitanten niet wat je verwacht of is het bereiken van de juiste doelgroep een
                    uitdaging? Talent sourcing kan dan uitkomst bieden. Wij screenen potentiële kandidaten van tevoren,
                    bouwen talent pools en verleiden talentvolle kandidaten om met jouw organisatie in gesprek te gaan.</p>
            </div>
            <div class="card">
                <!-- <img src="~/assets/diensten/sourcing.webp" class="diensten-img" alt="talent sourcers" /> -->
                <h2>Leveren jullie alleen talent sourcing diensten? </h2>
                <p> Zeker. Bij Rocketsourcers begrijpen we dat het werven van personeel een essentieel onderdeel is van je
                    groeiplannen. Het werven van de juiste kandidaten is tijdrovend en kostbaar. Met Rocketsourcers hoef je
                    niet meer eindeloos door databases te zoeken. Ons specialisme is het vinden van geschikte kandidaten en
                    het vullen van je kandidatenpijplijn waarna jouw HR- of recruitmentteam het kan overnemen. Hierdoor
                    kunnen zij zich volledig concentreren op het houden van interviews en het in dienst nemen van de
                    beste professionals.</p>
            </div>
            <div class="card">
                <!-- <img src="~/assets/diensten/equal.webp" class="diensten-img" alt="talent sourcers" /> -->
                <h2>Voor welke branches sourcen jullie? </h2>
                <p> We werken met een diverse mix van organisaties variërend van overheidsinstellingen tot IT-startups. Al
                    deze bedrijven hebben één ding gemeen: ze streven naar topprestaties en begrijpen dat getalenteerde
                    medewerkers daarbij cruciaal zijn. Ons werk bij Rocketsourcers ondersteunt deze ambitie.</p><br>
            </div>

            <div class="card">
                <!-- <img src="~/assets/diensten/video.webp" class="diensten-img" alt="talent sourcers" /> -->
                <h2>Wat houdt equal opportunity talent sourcing in? </h2>
                <p> Equal opportunity talent sourcing is een strategie waarbij wij een divers scala aan kandidaten werven,
                    ongeacht hun geslacht, leeftijd, etniciteit, religie, handicap, seksuele geaardheid of andere kenmerken.
                    Wij sourcen de best passende kandidaat voor onze klanten. Iedereen verdient namelijk een gelijke
                    kans.<br><br>

                    Deze strategie bevordert diversiteit en inclusiviteit binnen onze klanten, wat leidt tot een meer
                    creatieve, innovatieve en productieve werkomgeving. Bovendien verbetert het de reputatie van onze
                    klanten door te laten zien dat zij waarde hechten aan alle vormen van talent en dat zij streeft naar een
                    eerlijke en respectvolle werkomgeving.</p>
            </div>
            <div class="card">
                <!-- <img src="~/assets/diensten/persona.webp" class="diensten-img" alt="talent sourcers" /> -->
                <h2>Welk type vacatures kunnen jullie voor mij opvullen? </h2>
                <p> Wij zijn gespecialiseerd in het sourcen van kandidaten voor diverse office disciplines zoals IT,
                    Finance, Legal, HR, Compliance en Risk. Je kunt ons ook vragen om te ondersteunen bij vacatures op het
                    gebied van Supply Chain, Inkoop en hoge volume posities, zoals Callcenter Agent.</p>
            </div>
            <div class="card">
                <div class="diensten-img">
                    <!-- <img src="~/assets/diensten/rapport.webp" class="rapport-img" alt="talent sourcers" /> -->
                    <h2>Wat verstaan jullie onder een datagedreven aanpak? </h2>
                </div>
                <p>Talent sourcing is niet zomaar een hengel uitgooien en hopen dat iemand bijt. Uiteraard, wanneer je
                    zoveel mogelijk mensen benadert, is de kans groot dat je respons krijgt op jouw vacature. Onze talent
                    sourcers
                    gaan daarbij altijd strategisch te werk. We tracken en analyseren al onze inspanningen, waarbij
                    conversie – het moment dat we iemand daadwerkelijk aan jou kunnen voorstellen – onze belangrijkste KPI
                    is. Transparantie vinden we belangrijk: je krijgt altijd inzicht in onze zoektocht dankzij accurate
                    rapportages. Werk je met ons samen, dan blijf je sowieso in control.</p>
            </div>
        </section>
    </div>
</template>

<script setup>
useHead({
    title: 'Talent sourcing dienst',
    meta: [
        { name: 'description', content: 'Talent sourcing voor diverse disciplines. Heb je moeite om goede kandidaten te vinden? Dan is sourcing de oplossing.' },
        { name: 'keywords', content: 'talent sourcing'},
        { charset: 'utf-8'}
    ],
    link: [
        { rel: 'canonical', href: 'https://rocketsourcers.nl/vragen-over-talent-sourcing' }
    ],
})
</script>

<style scoped>
.hero-orange-left {
    position: absolute;
    top: 1500px;
    left: 0;
    width: 20vw;
}
#title h1 {
    max-width: 880px;
    text-transform: uppercase;
    margin: 137px 0;
}

#title h1 span,
h2 span,
h3 span {
    color: var(--color-orange);
}

h2 {
    max-width: 950px;
    padding-bottom: 10px;
}

#over-talent-sourcing {
    max-width: 1200px;
    margin: -60px auto 0;
}

.card {
    position: relative;
    padding: 50px 40px;
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 40px 0;
    background-color: #fff;
}

.card img {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    height: 100%;
}

.card img.rapport-img {
    position: absolute;
    top: 0;
    right: 30px;
    width: auto;
    height: 100%;
}



.card h3,
.card p {
    max-width: 940px;
}

.card {
    padding: 50px 40px;
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

@media screen and (max-width: 1439px) {
    #over-talent-sourcing {
    max-width: 1080px;
}

    .card p {
        max-width: 700px;
    }
}


@media screen and (max-width: 1239px) {
    #over-talent-sourcing {
    max-width: 780px;
}
}

@media screen and (max-width: 720px) {

    #title h1 {
        margin: 0;
    }

    #over-talent-sourcing {
        width: 90%;
        margin: -20px auto 0;
    }

    .card {
        padding: 0;
        margin: 40px 0;
        overflow: hidden;
        padding: 24px;
    }

    .card img {
        position: relative;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }

    .card img.rapport-img {
        position: relative;
        top: 0;
        right: 30px;
        width: auto;
        height: 100%;
    }


}
</style>