<template>
    <section id="sourcing-for">
        
        <TitleComp>
            <h2>WIJ SOURCEN VOOR<span>.</span></h2>
        </TitleComp>
     
        <swiper navigation :modules="modules" :slides-per-view="2" :space-between="220"
            :autoplay="{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: false }" :loop="true"
            :pagination="{ clickable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide>
                <div class="slide">
                    <img src="~/assets/sourcingFor/logo_rechtspraak.svg" width="190" height="115"
                        alt="logo de rechtspraak" />
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="slide slide2">
                    <img src="~/assets/sourcingFor/Bold-it.jpg" width="190" height="190" alt="logo de rechtspraak" />
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="slide slide2">
                    <img src="~/assets/sourcingFor/OM.jpeg" width="190" height="190" alt="logo de rechtspraak" />
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="slide slide2">
                    <img src="~/assets/sourcingFor/heemskerk.webp" width="240" height="108" alt="logo de rechtspraak" />
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="slide">
                    <img src="~/assets/sourcingFor/nexxbiz.webp" width="229" height="54" alt="logo de rechtspraak" />
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="slide">
                    <img src="~/assets/sourcingFor/rijksoverheid.webp" width="278" height="159" alt="logo de rechtspraak" />
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide">
                    <img src="~/assets/sourcingFor/letsGetIt.webp" width="234" height="45" alt="logo lets get it" />
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide">
                    <img src="~/assets/sourcingFor/CodeClan2.webp" width="235" height="235" alt="logo code clan" />
                </div>
            </swiper-slide>

        </swiper>
    </section>
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
        return { 
            modules: [Pagination, A11y, Autoplay, Navigation],
        };
    },
};
</script>


<style scoped>
#sourcing-for {
    display: none;
}

#title h2 {
    max-width: 850px;
    text-transform: uppercase;
    margin: 21px 0 -65px;
}

#title h2 span,
h3 span {
    color: var(--color-orange);
}

@media screen and (max-width: 600px) {
    #sourcing-for {
        display: block;
        max-width: 100%;
        margin: 0 auto 40px auto;
    }

    .slide {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 300px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
        margin: 50px 20px;
        padding: 20px;
    }

    .slide img {
        width: 100%;
    }

    .slide2 img {
        width: 80%;
    }
}

@media screen and (max-width: 413px) {
    .slide {
        width: 290px;
        height: 290px;
    }
}

@media screen and (max-width: 391px) {
    .slide {
        width: 280px;
        height: 280px;
    }
}

@media screen and (max-width: 389px) {
    .slide {
        width: 270px;
        height: 270px;
    }
}

@media screen and (max-width: 321px) {
    .slide {
        width: 240px;
        height: 240px;
    }
}
</style>