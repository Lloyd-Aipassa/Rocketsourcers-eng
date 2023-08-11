
<template>
    <section class="mob">
        <swiper
            :pagination="{ clickable: true }"
            :modules="modules" 
            :slides-per-view="1" 
            :space-between="50"
            :autoplay="{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: false }" 
            :loop="true"
            @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide>
                <div class="slide">
                    <img src="~/assets/Hero/check-header.svg" alt="checkmark" />
                    <p>
                        Snelle unieke service
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide">
                    <img src="~/assets/Hero/check-header.svg" alt="checkmark" />
                    <p>
                        Snelle unieke service
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide">
                    <img src="~/assets/Hero/check-header.svg" alt="checkmark" />
                    <p>
                        Snelle unieke service
                    </p>
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
import 'swiper/css/navigation';

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
            modules: [Pagination, A11y, Autoplay, Navigation],
        };
    },
};
</script>

<style scoped>
.mob {
    display: none;
}

section {
    background-color: #001d3d;
}

.slide p {
    color: #fff;
}

.slide {
    display: flex;
    justify-content: center;
}

@media screen and (max-width: 600px) {
    .mob {
        display: block;
    }

}
</style>