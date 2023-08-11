<template>
    <slot> <img src="~/assets/Hero/EllipseMobile.svg" class="hero-orange-top-mob" alt="talent sourcers" />
        <img src="~/assets/Hero/orangeheroelipce.svg" class="hero-orange-top" alt="talent sourcers" />
    </slot>
</template>

<style scoped>
.hero-orange-top {
    position: absolute;
    top: 0;
    right: 0;
    width: 39vw;
}

.hero-orange-top-mob {
    display: none;
}

@media screen and (max-width: 1440px) {
    .hero-orange-top {
        width: 35vw;
    }
}

@media screen and (max-width: 1240px) {
    .hero-orange-top {
        width: 75vw;
    }
}

@media screen and (max-width: 720px) {
    .hero-orange-top {
        display: none;

    }

    .hero-orange-top-mob {
        display: block;
        position: absolute;
        top: 480px;
        right: 0;
        width: 95vw;
    }
}
</style>