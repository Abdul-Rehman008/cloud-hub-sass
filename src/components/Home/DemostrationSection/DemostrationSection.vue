<template>
    <v-container class="customContainer text-center py-md-16 py-10">
        <div class="d-flex justify-center mb-4">
            <img :src="lightLogo" alt="lightLogo" />
        </div>
        <h2 class="title mb-2">
            Increase your team’s visibility and alignment
        </h2>
        <p class="subtitle mb-10">
            Start for free, flexible for all teams.
        </p>
        <div class="d-flex justify-center align-center gap-4">
            <v-btn variant="text" class="text-none font-weight-medium">Request a demo</v-btn>
            <v-btn class="bg-gradient-orange text-white  text-none font-weight-medium" rounded>
                Start for free
            </v-btn>
        </div>
    </v-container>
</template>

<script setup>
import lightLogo from '@/assets/img/lightLogo.svg';
</script>

<style lang="scss" scoped>
.title {
    font-family: Inter;
    font-weight: 700;
    font-size: 26px;
    line-height: 40px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: #212121;
}

.subtitle {
    font-family: Inter;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #525252;
}
</style>
