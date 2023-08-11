<template>
    <div class="container">
        <slot>
            <img src="~/assets/Hero/EllipseLeft.svg" class="hero-orange-left" alt="halve circel" /> 
        </slot>
    </div>
</template>

<style scoped>
.hero-orange-left {
    position: absolute;
    top: 1800px;
    left: 0;
    width: 20vw;
}

@media screen and (max-width: 1440px) {
    .hero-orange-left {
        position: absolute;
        top: 1200px;
        left: 0;
        width: 15vw;
    }
}

@media screen and (max-width: 1240px) {
    .hero-orange-left {
        position: absolute;
        top: 1200px;
        left: 0;
        width: 25vw;
    }
}

@media screen and (max-width: 720px) {
    .hero-orange-left {
        position: absolute;
        top: 1500px;
        left: 0;
        width: 42vw;
    }
}
</style>