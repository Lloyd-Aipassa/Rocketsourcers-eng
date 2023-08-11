<template>
    <header>
        <div class="container">
            <NuxtLink to="/">
                <img src="~/assets/Hero/RS-logo.svg" width="259" height="77" alt="logo rocketsourcers">
            </NuxtLink>

            <div class="nav-desktop">
                <ul>
                    <li>
                        <NuxtLink to="/">
                            <p>
                                Home
                            </p>
                        </NuxtLink>

                    </li>
                    <li>
                        <NuxtLink to="/over-ons">
                            <p>
                                Over ons
                            </p>
                        </NuxtLink>

                    </li>
                    <li>
                        <NuxtLink to="/onze-diensten">
                            <p>
                                Onze diensten
                            </p>
                        </NuxtLink>

                    </li>
                    <li>
                        <NuxtLink to="/gratis-quickscan">
                            <p>
                                Gratis quick scan
                            </p>
                        </NuxtLink>

                    </li>
                    <li>
                        <NuxtLink to="/contact">
                            <p>
                                Contact
                            </p>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="nav-mobile">
                <img src="~/assets/Hero/Hamburger.svg" width="259" height="77" alt="menu" @click="Menu">
                <Transition>
                    <div class="slider" v-if="Slider">
                        <ul>
                            <li>
                                <span>
                                    <p>
                                        Menu
                                    </p>
                                </span>
                                <div class="close" @click="Close">
                                    <img class="close-button" src="~/assets/Hero/Close.svg">
                                </div>
                            </li>
                            <NuxtLink to="/" @click="Close">
                                <li>
                                    <p>
                                        Home
                                    </p>
                                    <img src="~/assets/Hero/chevron-right.svg">
                                </li>
                            </NuxtLink>
                            <NuxtLink to="/over-ons" @click="Close">
                                <li>
                                    <p>
                                        Over ons
                                    </p>
                                    <img src="~/assets/Hero/chevron-right.svg">
                                </li>
                            </NuxtLink>
                            <NuxtLink to="/onze-diensten" @click="Close">
                                <li>
                                    <p>
                                        Onze diensten
                                    </p>
                                    <img src="~/assets/Hero/chevron-right.svg">
                                </li>
                            </NuxtLink>
                            <NuxtLink to="/gratis-quickscan" @click="Close">
                                <li>
                                    <p>
                                        Gratis quick scan
                                    </p>
                                    <img src="~/assets/Hero/chevron-right.svg" @click="Close">
                                </li>
                            </NuxtLink>
                            <NuxtLink to="/contact" @click="Close">
                                <li>
                                    <p>
                                        Contact
                                    </p>
                                    <img src="~/assets/Hero/chevron-right.svg">
                                </li>
                            </NuxtLink>
                        </ul>
                        <div class="elipse">
                            <img class="el" src="~/assets/Hero/EllipseMenu.svg">
                            <img class="social" src="~/assets/contact/social.svg">
                            <div class="bottom-el">
                                <div class="social-container">
                                    <img class="social" src="~/assets/contact/instagram.svg">
                                    <a href="https://www.instagram.com/rocketsourcers"><p>Instagram</p></a>
                                </div>
                                <div class="social-container">
                                    <img class="social" src="~/assets/contact/linkedin.svg">
                                    <a href="https://www.linkedin.com/company/rocketsourcers"><p>Linkedin</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </header>
</template>

<script setup>
let Slider = ref(false)
const Menu = () => Slider.value = true
const Close = () => Slider.value = false

</script>



<style scoped>
header {
    background-color: #fff;
    height: 96px;
    display: flex;
    margin: 0 auto;
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1000;
}

.container {
    height: 100%;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-desktop ul {
    display: flex;
    list-style: none;
    gap: 60px;
}

a {
    text-decoration: none;

}

a p {
    text-decoration: none;
    font-weight: 300;
}

a:hover p {
    color: var(--color-orange);
}

.nav-mobile {
    display: none;
}

@media screen and (max-width: 1439px) {
    .container {
        max-width: 1080px;
    }
}

@media screen and (max-width: 1239px) {
    .container {
        max-width: 785px;
    }

    img {
        width: 180px;
    }

    .nav-desktop ul {
        display: flex;
        list-style: none;
        gap: 20px;
    }

    ul {
        display: flex;
        list-style: none;
    }

    a p {
        text-decoration: none;
        font-size: 14px;
    }
}

@media screen and (max-width: 720px) {
    header {
        height: 75px;
    }

    .nav-mobile {
        display: block;
    }

    .nav-mobile img {
        width: 24px;
    }

    .nav-mobile .slider img {
        width: 22px;
        align-self: center;
    }

    .nav-mobile .slider img.close-button {
        padding-top: 10px;
        width: 34px;
    }


    .nav-desktop {
        display: none;
    }

    .container {
        max-width: 90%;
    }


    .slider {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 99999;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .slider p {
        color: #1d1d1d;
    }

    .slider span p {
        color: var(--color-orange);
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px;
        text-transform: uppercase;
    }

    .slider ul {
        display: flex;
        flex-direction: column;
    }

    .slider li {
        border-bottom: 1px solid var(--color-orange);
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 75px;
        padding: 0 30px;
    }

    .close p {
        color: var(--color-orange);
    }

    .elipse {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    img.el {
        position: absolute;
        bottom: 0;
        width: 100% !important;
        pointer-events: none;
    }

    img.social {
        width: 100px !important;
        margin-bottom: 17px;
    }

    .bottom-el {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
        margin-bottom: 12px;
    }

    .social-container {
        display: flex;
        gap: 5px;
    }

    .social-container p {
        padding-top: 2px;
    }

    .bottom-el img {
        width: 24px !important;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

@media screen and (max-width: 400px) {
    .slider li {
        height: 70px;
    }
}

@media screen and (max-width: 350px) {
    .slider li {
        height: 50px;
    }
}


/* animatie mobile menu */
.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    transform: translateX(-100%);
}

.router-link-exact-active p {
    color: var(--color-orange);
    font-weight: 600;
}
</style>