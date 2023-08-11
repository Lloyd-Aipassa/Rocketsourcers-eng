<template>
    <main>
        <header>
            <section class="header">
                <div class="header-container">
                 <Backbutton />
                    <ul>
                        <li>
                            <img src="~/assets/Hero/check-header.svg" alt="" />
                            <p>
                                Snelle en unieke service
                            </p>
                        </li>
                        <li>
                            <img src="~/assets/Hero/check-header.svg" alt="" />
                            <p>
                                Ervaren Powersourcers
                            </p>
                        </li>
                        <li>
                            <img src="~/assets/Hero/check-header.svg" alt="" />
                            <p>
                                Perfect passende kandidaten
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </header>
        <section class="mob">
            <Backbutton />
            <swiper :modules="modules" :slides-per-view="1" :space-between="50"
                :autoplay="{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: false }" :loop="true"
                @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide>
                    <div class="slide">
                        <img src="~/assets/Hero/check-header.svg" alt="" />
                        <p>
                            Snelle unieke service
                        </p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="slide">
                        <img src="~/assets/Hero/check-header.svg" alt="" />
                        <p>
                            Snelle unieke service
                        </p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="slide">
                        <img src="~/assets/Hero/check-header.svg" alt="" />
                        <p>
                            Snelle unieke service
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
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
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
body {
    background-color: #FFF !important;
}


.header-container a{
    color: black;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
}
.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding:  30px 150px;
}

.header {
    border-bottom: 1px solid #f89a03;
}

ul {
    display: flex;
    gap: 50px;
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
    color: #001d3d;
    font-size: 14px;
}

/* mobiel */

.mob {
    display: none;
}

section {
    background-color: #fff;
}

.slide p {
    color: black;
}

.slide {
    display: flex;
    justify-content: center;
    gap: 5px;
}

@media screen and (max-width: 600px) {
    .header {
        display: none;
    }

    .mob {
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--color-orange);
        justify-content: space-between;
        padding:7px 0 7px 24px;
    }

}
</style>