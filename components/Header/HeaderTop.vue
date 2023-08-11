<template>
    <main>
        <section class="header">
            <div class="container-header">
                <ul>
                    <li>
                        <img src="~/assets/Hero/check-header.svg" alt="check" width="14" height="24" />
                        <p>
                            Snelle unieke service
                        </p>
                    </li>
                    <li>
                        <img src="~/assets/Hero/check-header.svg" alt="check" width="14" height="24" />
                        <p>
                            Ervaren talent sourcers
                        </p>
                    </li>
                    <li>
                        <img src="~/assets/Hero/check-header.svg" alt="check" width="14" height="24" />
                        <p>
                            Gratis quick scan
                        </p>
                    </li>
                    <li>
                        <img src="~/assets/Hero/check-header.svg" alt="check" width="14" height="24" />
                        <p>
                            Perfect passende kandidaten
                        </p>
                    </li>
                </ul>
                <div class="tranlation">
                    <b>NL</b> <span>/</span> ENG
                </div>
            </div>
        </section>


        <section class="mob">
            <swiper :modules="modules" :slides-per-view="1" :space-between="50"
                :autoplay="{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: false }" :loop="true"
                @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide>
                    <div class="slide">
                        <img src="~/assets/Hero/check-header.svg" alt="check" width="14" height="24" />
                        <p>
                            Snelle unieke service
                        </p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="slide">
                        <img src="~/assets/Hero/check-header.svg" alt="check" width="14" height="24" />
                        <p>
                            Ervaren talent sourcers
                        </p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="slide">
                        <img src="~/assets/Hero/check-header.svg" alt="check" width="14" height="24" />
                        <p>
                            Gratis quick scan
                        </p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="slide">
                        <img src="~/assets/Hero/check-header.svg" alt="check" width="14" height="24" />
                        <p>
                            Perfect passende kandidaten
                        </p>
                    </div>
                </swiper-slide>

            </swiper>
        </section>
    </main>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import Swiper styles
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            // console.log(swiper);
        };
        const onSlideChange = () => {
            // console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Pagination, A11y, Autoplay],
        };
    },
};
</script>

<style scoped>
.header {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #001d3d;
    height: 38px;
    position: relative;
    z-index: 3;
}

.container-header{
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.tranlation {
    color: white;
    font-size: 14px;
}

.tranlation span{
    color: var(--color-orange);
}

ul {
    width: 904px;
    display: flex;
    list-style: none;
    justify-content: space-between;
}

li {
    display: flex;
    gap: 5px;
}

img {
    width: 14px;
}

li p {
    color: #fff;
    font-size: 14px;
}

/* mobiel */

.mob {
    display: none;
}

section {
    background-color: #001d3d;
    position: relative;
    z-index: 3;
}

.slide p {
    color: #fff;
}

.slide {
    display: flex;
    justify-content: center;
    gap: 5px;
}


@media screen and (max-width: 1439px) {
    .container-header{
    width: 1080px;
    display: flex;
    justify-content: space-between;
}
}
@media screen and (max-width: 1239px) {
    .container-header{
    width: 785px;
    display: flex;
    justify-content: space-between;
}

li p {
    color: #fff;
    font-size: 12px;
}
ul {
    width: 680px;
    display: flex;
    list-style: none;
    justify-content: space-between;
}
}
@media screen and (max-width: 720px) {

    .header {
        display: none;
    }

    .mob {
        display: block;
    }

}
</style>