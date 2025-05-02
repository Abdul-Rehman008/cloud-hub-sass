<template>
    <v-container fluid class="pa-0 bg-gradient-orange">
        <v-container class="customContainertext-center py-16 text-md-center" max-width="800">
            <h2 class="title text-white mb-4">
                Keep every one in the loop
            </h2>
            <p class="text-descp mb-6 text-white mx-md-auto">
                All good things starts with a homepage. Get inspired without breaking your wallet.
            </p>
            <v-btn color="white" class="text-none" style="height: 50px;" rounded>Start for free</v-btn>
        </v-container>

        <!-- Project dashboard preview image -->
        <v-container class="customContainer d-flex justify-center pb-0 dashboardImgWrapper">
            <img :src="dashboardImg" alt="Project Dashboard Preview" />
        </v-container>
    </v-container>
</template>

<script setup>
import dashboardImg from '@/assets/img/daashboardImg.png';
</script>

<style scoped>
.title {
    font-family: Inter;
    font-weight: 600;
    font-size: 63px;
    line-height: 73px;
    letter-spacing: -2.5px;

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

.text-descp {
    font-family: Inter;
    font-weight: 400;
    font-size: 20px;
    line-height: 35px;
    letter-spacing: 0px;
    max-width: 55%;

    @media (max-width: 959px) {
    max-width: 95%;
    }

}

.dashboardImgWrapper {
    img {
        max-width: 1014px;

        @media (max-width: 1279px) {
            max-width: 95%;
            margin: 0 auto;
        }
    }
}
</style>
