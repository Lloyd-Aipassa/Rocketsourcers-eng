<template>
    <section id="sourcing-for">
        <TitleComp>
            <h2>WIJ SOURCEN VOOR<span>.</span></h2>
        </TitleComp>
        <div class="slider">
            <swiper :modules="modules" :slides-per-view="3" :space-between="15"
                :autoplay="{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: false }" :loop="true"
                :pagination="{ clickable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
                @swiper="onSwiper" @slideChange="onSlideChange">
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
                        <img src="~/assets/sourcingFor/rijksoverheid.webp" width="278" height="159"
                            alt="logo de rechtspraak" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="slide">
                        <img src="~/assets/sourcingFor/letsGetIt.webp" width="234" height="45" alt="logo de rechtspraak" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="slide">
                        <img src="~/assets/sourcingFor/CodeClan2.webp" width="235" height="235" alt="logo de rechtspraak" />
                    </div>
                </swiper-slide>
            </swiper>
        </div>
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

#title h2 {
    position: relative;
    max-width: 850px;
    text-transform: uppercase;
    margin: 21px 0 -14px;
    z-index: 5;
}

#title h2 span,
h3 span {
    color: var(--color-orange);
}

#sourcing-for {
    max-width: 1220px;
    margin: 0 auto;
    overflow: visible;
}

.slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 375px;
    height: 375px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
    margin: 40px 0;
    margin-left: 10px
}

/* span.swiper-pagination-bullet {
    width: 18px!important;
    height: 18px;
    display: inline-block;
    border-radius: var(--swiper-pagination-bullet-border-radius,50%);
    background: var(--swiper-pagination-bullet-inactive-color,#000);
    opacity: var(--swiper-pagination-bullet-inactive-opacity, .2);
} */



@media screen and (max-width: 1439px) {
    #sourcing-for {
        max-width: 1080px;
        margin: 0 auto;
        overflow: visible;
    }

    .slide {
        padding: 65px;
        width: 100%;
        height: 335px;
        margin: 40px 0;
        margin-left: 0px
    }

    .slide img {
        width: 100%;
        height: auto;
    }
}

@media screen and (max-width: 1239px) {
    #sourcing-for {
        max-width: 770px;
        margin: 0 auto;
        overflow: visible;
    }

    .slide {
        padding: 24px;
        width: 100%;
        height: 235px;
        margin: 40px 0;
    }

    .slide img {
        width: 100%;
        height: auto;
    }
}


@media screen and (max-width: 720px) {
    #sourcing-for {
        display: none;
    }
}
</style>