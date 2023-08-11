<template>
    <section id="contact">
        <h2>Interesse?</h2>
        <h3>NEEM CONTACT OP</h3>
        <ContactBlock />
        <!-- <img class="astronaut" src="~/assets/contact/Astronaut-contact.webp" width="370" height="393"
            alt="Astronaut opzoek naar talent"> -->

    </section>
</template>
 
 
<style scoped>
#contact {
    position: relative;
    max-width: 1200px;
    /* background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), radial-gradient(85.65% 83.38% at -35.75% 80.18%, #4F698F 38%, #4B71A9 45%, #33445C 81%, #241433 150%); */
    background: var(--color-blue);
    border-radius: 8px;
    margin: 0 auto 40px auto;
    padding: 50px;
}

/* #contact::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff14;
} */

h2 {
    z-index: 3;
    position: relative;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    color: #f89a03;
}

h3 {
    z-index: 3;
    position: relative;
    font-size: 32px;
    font-weight: 800;
    line-height: 32px;
    color: #fff;
    margin-bottom: 20px;
}





img.astronaut {
    position: absolute;
    bottom: 0;
    right: 130px;
}


@media screen and (max-width: 1439px) {
    #contact {
        max-width: 1080px;
    }

    img.astronaut {
        right: 150px;
    }
}


@media screen and (max-width: 1239px) {
    #contact {
        max-width: 785px;
    }

    img.astronaut {
        right: 50px;
    }
}

@media screen and (max-width: 720px) {}

@media screen and (max-width: 720px) {

    #contact {
        max-width: 90%;
        margin: 0 auto 40px auto;
        padding: 50px 24px;
    }

    img.astronaut {
        position: relative;
        bottom: 0;
        right: 0;
        margin-bottom: -50px;
        margin-right: -40px;
        width: 100%;
        height: 100%;
    }


}
</style>