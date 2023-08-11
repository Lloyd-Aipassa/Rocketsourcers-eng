<template>
    <div>
        <ElipseTop><img src="~/assets/Hero/EllipseMobile.svg" class="hero-orange-top-mob" alt="talent sourcers" />
            <img src="~/assets/Hero/orangeheroelipce.svg" class="hero-orange-top" alt="talent sourcers" />
        </ElipseTop>
        <img src="~/assets/Hero/orangeheroleft.svg" class="hero-orange-left" alt="halve circel" />
        <TitleComp>
            <h1>Neem contact<br> met ons op<span>.</span></h1>
        </TitleComp>

        <section id="contact">
            <div class="form">
                <form id="contact-form" ref="form" @submit.prevent="sendEmail">
                    <input type="hidden" name="contact_number" />
                    <label>Naam</label>
                    <input type="text" name="name" id="name-form" required />
                    <label>E-mail</label>
                    <input type="email" v-model="email" name="email" required />
                    <label>Telefoonnummer</label>
                    <input type="text" name="phone" required />
                    <label>Organisatie</label>
                    <input type="text" name="organisatie" id="organisatie" required />
                    <label>Bericht</label>
                    <textarea rows="5" name="message"></textarea><br>
                    <input type="submit" value="Verstuur" />
                </form>
                <p v-if="verzonden"> Je bericht is verzonden :) </p>
            </div>
            <div class="cards">
                <div class="card">
                    <img src="~/assets/contact/adres.svg" width="46" height="56" alt="">
                    <p>Atoomweg 50 <br> 3542 AB Utrecht</p>
                </div>
                <div class="card">
                    <img src="~/assets/contact/tel.svg" width="46" height="56" alt="">
                    <p>+31 303 039 260<br><span>Maandag t/m vrijdag 09.00 - 17.00</span></p>
                </div>
                <div class="card">
                    <img src="~/assets/contact/envelop.svg" width="46" height="56" alt="">
                    <p> info@rocketsourcers.nl<br><span>Reactie binnen 24 uur</span></p>
                </div>
                <div class="card">
                    <img src="~/assets/contact/social.svg" width="99" height="45" alt="">
                    <div class="content-last-card">
                        <span>
                            <img src="~/assets/contact/linkedin.svg" width="24" height="24" alt="Linkin">
                            <a href="https://www.linkedin.com/company/rocketsourcers"><p>Linkedin</p></a>
                        </span>

                        <span>
                            <img src="~/assets/contact/instagram.svg" width="24" height="24" alt="Instagram">
                            <a href="https://www.instagram.com/rocketsourcers"><p>Instagram</p></a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
        <section id="faq">
            <img src="~/assets/contact/teamfoto.webp" width="871" height="368" alt="team">
        </section>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';
export default {
    data() {
        return {
            email: '',
            verzonden: false
        }
    },

    methods: {
        sendEmail() {
            emailjs.sendForm('service_ozfvgtv', 'template_23frcr9', this.$refs.form, 'NpuBHe_vpdYjJ_LMf')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                    this.email = '' // fix clearing email field bug
                    this.verzonden = true
                    this.$refs.form.reset(); // This will clear that form
                    // this.email= 'hi'
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
        }
    }
}
</script>

<style scoped>
.hero-orange-top {
    position: absolute;
    top: 135px;
    right: 0;
    width: 25vw;
}

#title h1 {
    max-width: 850px;
    text-transform: uppercase;
    margin: 64px 0;
}

#title h1 span,
h3 span {
    color: var(--color-orange);
}

.hero-orange-top-mob {
    display: none;
}

.hero-orange-left {
    position: absolute;
    top: 600px;
    left: 0;
    width: 7vw;
}

#contact {
    max-width: 1200px;
    margin: 0 auto 50px;
    display: flex;
    gap: 20px;
}

.form {
    width: 67%;
    background-color: #fff;
    align-self: stretch;
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 48px 64px;
    z-index: 5;
}

/*********************form***********/

form {
    width: 100%;
    margin: 0 auto;
    border-radius: 5px;
}

form label {
    display: block;
    margin: 10px 0 5px;
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;
    font-family: "inter", sans-serif;
}

form input[type="text"],
form input[type="email"],
form textarea {
    width: 100%;
    max-width: 500px;
    border: 1px solid var(--color-orange);
    /* border-radius: 3px; */
    padding: 14px;
    box-sizing: border-box;
    margin-bottom: 5px;
    font-size: 16px;
}

form input[type="submit"] {
    width: 30%;
    border: none;
    padding: 15px;
    box-sizing: border-box;
    background-color: var(--color-orange);
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    transform: translateY(0);
    margin-top: 15px;
}

form input[type="submit"]:hover {
    transform: translateY(-2px);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
}

form input[type="submit"]:active {
    transform: translateY(0);
    box-shadow: none;
}



.cards {
    width: 33%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-self: stretch;
}

.card {
    text-align: center;
    background-color: #fff;
    min-height: 166.2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 5;
}

.card span {
    color: var(--color-orange);
}

.content-last-card {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 10px;
}

.content-last-card span {
    margin-top: 10px;
    display: flex;
    align-items: bottom;
    gap: 5px;
}

.content-last-card p {
    padding-top: 2px;
}
.content-last-card a  {
    text-decoration: none;
}


#faq {
    position: relative;
    z-index: 5;
    max-width: 1200px;
    margin: 0 auto 50px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
}

#faq img {
    margin: 0 auto -58px;
}

@media screen and (max-width: 1439px) {
    #contact {
        max-width: 1080px;
        margin: 0 auto 50px;
        display: flex;
        gap: 20px;
    }

    .hero-orange-left {
        position: absolute;
        top: 750px;
        left: 0;
        width: 10vw;
    }
}

@media screen and (max-width: 1239px) {
    #contact {
        max-width: 780px;
        margin: 0 auto 50px;
        display: flex;
        gap: 20px;
    }

    #faq {
        max-width: 780px;
}

    #faq img {
        margin: 0 auto -56px;
        width: 90%;
        height: auto;
        text-align: center;
    }
}


@media screen and (max-width: 720px) {
    .hero-orange-top {
     display: none;
    }

    .hero-orange-top-mob {
        display: block;
        position: absolute;
        top: 50px;
        right: 0;
        width: 74vw;
    }

    .hero-orange-left {
        position: absolute;
        top: 750px;
        left: 0;
        width: 40vw;
    }


    #title h1 {
        font-size: 31px;
        font-weight: 900;
        line-height: 110%;
        max-width: 390px;
    }


    #contact {
        width: 90%;
        margin: 0 auto 50px;
        flex-direction: column;
        gap: 20px;
    }

    .form {
        width: 100%;
    }

    .form {


        padding: 48px 24px;
    }

    form label {
        margin: 15px 0 5px;
        font-family: "inter", sans-serif;
    }

    form input[type="submit"] {
        margin-top: 20px;
        width: 50%;

    }

    .cards {
        width: 100%;
        margin: 0 auto;
    }

    .content-last-card {
        margin-top: 10px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        gap: 20px;
    }

}
</style>