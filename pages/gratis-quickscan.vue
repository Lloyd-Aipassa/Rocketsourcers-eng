<template>
    <div>
        <ElipseTop />
        <ElipseLeft />
        <HeroCard>
            <template #heroImg><img class="test" src="/Hero/shaBud.webp" alt=""></template>
            <template #heroTitle>
                <h1>Laten we<br> kennismaken<span>.</span></h1>
            </template>
            <template #heroText>
                <p>Elke organisatie is uniek. Daarom willen we graag je organisatie en je wervingsbehoeften leren kennen,
                    zodat we een sourcing strategie kunnen ontwikkelen die perfect bij jou past. We werken samen om het
                    wervingsproces efficiënt te laten verlopen en de beste kandidaten te vinden. Zie dit als een investering
                    in je bedrijf. Ons team kan echt het verschil maken. Door de juiste mensen aan te trekken, help je je
                    organisatie groeien. Wij staan klaar om je te helpen de juiste kandidaten te vinden.</p>
            </template>
        </HeroCard>

        <main id="main">
            <section id="qs">

                <h3>GRATIS QUICK SCAN<span>.</span></h3>
                <p>
                    <span>Een analyse maken van jullie recruitment uitdagingen</span><br>
                    De eerste stap bij het doen van de quick scan is het uitvoeren van een gedegen analyse. Dit stelt ons in
                    staat om diepgaand inzicht te krijgen in onze klant, hun processen en procedures volledig te begrijpen
                    en de uitdagingen te identificeren die gepaard gaan met hun wervingsproces.
                </p>
                <p>
                    <span>Achterhalen welke ervaring, kennis en vaardigheden jullie zoeken</span><br>
                    Om de juiste kandidaten te sourcen, stellen wij eerst samen vast welke ervaring, kennis en vaardigheden
                    zijn vereist. Dit omvat het identificeren van de benodigde expertise en soft skills. Deze informatie
                    helpt ons om een gericht profiel te creëren dat de basis vormt voor onze talent sourcing werkzaamheden.
                </p>

                <p>
                    <span>Een effectief plan opstellen om de beste kandidaten te sourcen</span><br>
                    Met dit plan optimaliseer je actief je werving, bespaar je waardevolle tijd en middelen en trek je
                    gericht het juiste talent aan. Door dit te implementeren, handel je sneller en efficiënter op de
                    arbeidsmarkt, waardoor je de concurrentie steeds een stap voor blijft.
                </p>
                <a class="lotusknop" rel="nofollow" href=""
                    onclick="Calendly.initPopupWidget({url: 'https://calendly.com/rocketsourcers-viec/gratis-quick-scan?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=001d3d&text_color=ffffff&primary_color=f89a03'});return false;">
                    Boek hier de gratis Quick scan <img class="arrow" src="~/assets/Cards/Arrow-button-orange.svg"
                        alt="oranje pijl">
                </a>
            </section>
        </main>
        <Recommendation />
        <ContactComponent />
        <SourcingFor />
        <SourcingForMob />
    </div>
</template>

<script setup>
useHead({
    script: [
        {
            src: "https://assets.calendly.com/assets/external/widget.js",
            type: "text/javascript",
            defer: true
        },
    ],
})
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
    padding-bottom: 64px;
}

#hero-card h1 span {
    color: var(--color-orange);
}

img.test {
    align-self: flex-end;
    width: 330px;
}

.hero-orange-top-mob {
    display: none;
}

#main {
    max-width: 1200px;
    margin: 0 auto;
}

#main p {
    max-width: 954px;
    margin-bottom: 60px;
}

#qs {
    position: relative;
    background-color: var(--color-blue);
    padding: 64px 0 64px 48px;
    margin-bottom: 86px;
    margin-top: 64px;
    border-radius: 8px;
}

#qs h3 {
    color: #fff;
    margin-bottom: 52px;
    font-size: 32px;
    line-height: 32px;
    font-weight: 800;
}

#qs p span {
    color: var(--color-orange);
    font-weight: 600;

}

#qs p {
    color: #fff;
    max-width: 754px;
    margin-bottom: 52px;
    font-weight: 300;
}


/* Calendly */
.button {
    max-width: 353px;
    display: flex;
    gap: 20px;
}


a.lotusknop {
    z-index: 3;
    position: relative;
    color: #fff;
    background: #FFFFFF00;
    border: 1px solid #F89A03;
    max-width: 353px;
    height: 54px;
    padding: 0 40px;
    text-decoration: none !important;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

a img {
    width: 32px;
}

a.lotusknop:hover {
    color: #f89a03;
}

@media screen and (max-width: 1439px) {
    #main {
        max-width: 1080px;

    }
}

@media screen and (max-width: 1239px) {

    #main {
        max-width: 780px;

    }
    #hero-card p {
        padding-bottom: 90px;
    }

    h1 {
        margin: -62px 0 17px;
    }

    img.test {
        width: 450px;
        align-self: center;
        margin-top: -60px;
    }
}

@media screen and (max-width: 720px) {

    img.test {
        margin: 0px 0 -2px;
        width: 90%;
    }

    h1 {
        margin: 48px 0 17px;
    }

    .hero-orange-top-mob {
        display: block;
        position: absolute;
        top: 720px;
        right: 0;
        width: 94vw;
    }

    #title h1 {
        max-width: 800px;
        text-transform: uppercase;
    }

    #hero-card p {
        padding-bottom: 20px;
    }

    #main {
        width: 90%;
        margin: 0 auto;
    }

    #qs {
        position: relative;
        padding: 64px 24px 64px 24px;
        margin-bottom: 86px;
        border-radius: 8px;
        margin-top: 0;
    }

    #qs .astronaut {
        position: relative;
        width: 100%;
        left: 0;
        top: 0;
        transform: translateY(-0%);
        margin-bottom: -130px;
    }
}
</style>