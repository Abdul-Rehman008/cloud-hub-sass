<template>
    <v-container class="customContainer px-0 py-md-8 py-14">
        <swiper :slides-per-view="6" :space-between="20"
            :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false }" :breakpoints="swiperBreakpoints"
            class="trusted-swiper">
            <swiper-slide v-for="(logo, index) in logos" :key="index" class="d-flex justify-center align-center">
                <img :src="logo" alt="Company logo" class="logo-img" />
            </swiper-slide>
        </swiper>
    </v-container>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
// import SwiperCore, { Grid } from 'swiper';

// Import Swiper styles
import 'swiper/css';


const logos = [
    new URL('@/assets/img/brandImg1.svg', import.meta.url).href,
    new URL('@/assets/img/brandImg2.svg', import.meta.url).href,
    new URL('@/assets/img/brandImg3.svg', import.meta.url).href,
    new URL('@/assets/img/brandImg4.svg', import.meta.url).href,
    new URL('@/assets/img/brandImg5.svg', import.meta.url).href,
    new URL('@/assets/img/brandImg6.svg', import.meta.url).href,
    new URL('@/assets/img/brandImg7.svg', import.meta.url).href,
];

const swiperBreakpoints = {
    0: {
        slidesPerView: 2,
          
    },
    600: {
        slidesPerView: 3,
    },
    960: {
        slidesPerView: 5,
    },
    1280: {
        slidesPerView: 7,
    },
};
</script>

<style lang="scss" scoped>
.trusted-swiper {
    max-width: 100%;
}

.logo-img {
    max-width: 140px;
    max-height: 60px;
    object-fit: contain;
}
</style>