<template>
    <v-container class="customContainer py-12">
        <h2 class="mb-8">
            Loved By Designers At
        </h2>

        <v-row class="pa-4" justify="center" align="center">
            <v-col v-for="(logo, index) in logos" :key="index" cols="6" md="4" lg="3" class="d-flex justify-center">
                <v-sheet rounded="xl" class="pa-md-6 cards d-flex align-center justify-center">
                    <img :src="logo.src" :alt="logo.alt" max-height="40" contain />
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import bandDesigner1 from '@/assets/img/bandDesigner1.svg';
import bandDesigner2 from '@/assets/img/bandDesigner2.svg';
import bandDesigner3 from '@/assets/img/bandDesigner3.svg';
import bandDesigner4 from '@/assets/img/bandDesigner4.svg';
import bandDesigner5 from '@/assets/img/bandDesigner5.svg';
import bandDesigner6 from '@/assets/img/bandDesigner6.svg';
import bandDesigner7 from '@/assets/img/bandDesigner7.svg';
import bandDesigner8 from '@/assets/img/bandDesigner8.svg';

const logos = [
    { src: bandDesigner1, alt: 'CrowdStrike' },
    { src: bandDesigner2, alt: 'Airbus' },
    { src: bandDesigner3, alt: 'Hays' },
    { src: bandDesigner4, alt: 'Sentry' },
    { src: bandDesigner5, alt: 'Medwing' },
    { src: bandDesigner6, alt: 'Cathay Pacific' },
    { src: bandDesigner7, alt: 'Liquid Web' },
    { src: bandDesigner8, alt: 'AutoTrader' },
]
</script>

<style lang="scss" scoped>
h2 {
    font-family: Inter;
    font-weight: 600;
    font-size: 54px;
    line-height: 63px;
    letter-spacing: -1.5px;
    text-align: center;
    color: #282828;

    @media (max-width: 1279px) {
        font-size: calc(100% + 35px);
        line-height: calc(100% + 25px);
    }

    @media (max-width: 959px) {
        font-size: 44px;
        line-height: 50px;
        text-align: left;
    }

    @media (max-width: 599px) {
        font-size: 34px;
        line-height: 40px;
    }
}

.cards {
    max-width: 295px !important;
    min-height: 144px;
    width: 100%;
    background-color: #F9FAFB;
    @media (max-width: 959px) {
        max-width: 165px !important;
        max-height: 135px;
        img {
            max-width: 110px;
            max-height: 40px;
        }
    }
}
</style>