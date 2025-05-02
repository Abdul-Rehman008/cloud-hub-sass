<template>
    <v-container fluid class="px-0 py-10">
        <!-- Background Section -->
        <div class="bg-gradient-orange text-md-center text-left py-16 px-4">
            <div class="textCaption mb-2 text-white">Best time here</div>
            <h2 class="title text-white font-weight-bold mb-12">
                Better feedback at the right time.
            </h2>

            <!-- Feedback Card -->
            <v-card class="mx-auto mb-6 feedback-card">
                <v-card-text class="text-left feedback-card-text">
                    <div class="d-flex justify-space-between align-center flex-wrap mb-10" style="gap: 16px">
                        <div class="d-flex align-center">
                            <img :src="darkLogo" alt="dark logo" style="width: 65px; height:65px" />
                            <div class="ml-4">
                                <div class="font-weight-bold text-white mb-2">Cloudhub</div>
                                <div class="text-grey-lighten-1">2m ago in Brand</div>
                            </div>
                        </div>

                        <v-btn color="deep-orange" class="text-white text-none" rounded>View post</v-btn>
                    </div>

                    <div class="d-flex align-md-center align-end justify-space-between mt-4">
                        <div class="d-flex align-md-center flex-md-row flex-column" style="gap: 16px">
                            <!-- <v-avatar v-for="(avatar, i) in avatars" :key="i" size="32" class="me-n2"> -->
                            <img :src="peopleHorizon" alt="User Avatar" style="max-width: 104px;" />
                            <!-- </v-avatar> -->
                            <span class="ms-md-4 text-white w-md-66 userDetail">3 people are looking for feedback this
                                week</span>
                        </div>
                        <IconChevronRight color="white" />
                    </div>
                </v-card-text>
            </v-card>

            <!-- Feature Grid -->
            <v-row justify="center" class="text-white">
                <v-col cols="12" md="3" v-for="(feature, index) in features" :key="index">
                    <v-card class="feature-box text-left" flat rounded="xl">
                        <v-card-text>
                            <!-- <v-icon class="mb-2">{{ feature.icon }}</v-icon> -->
                            <component :is="iconMap[feature.icon]" :size="28" class="mb-2" />
                            <div class="textSubtitle">{{ feature.title }}</div>
                            <div class="text-desc">{{ feature.desc }}</div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script setup>
import darkLogo from '@/assets/img/darkLogo.svg'
import peopleHorizon from '@/assets/img/peopleHorizon.svg'
import { IconChevronRight, IconListDetails, IconAt, IconCircleCheck } from '@tabler/icons-vue';

const iconMap = {
    IconAt,
    IconListDetails,
    IconCircleCheck,
};

const features = [
    {
        icon: 'IconAt',
        title: 'Mentions',
        desc: 'Mention anyone on your team to include them in a post.'
    },
    {
        icon: 'IconListDetails',
        title: 'Polls',
        desc: 'Get a quick gut check from the team on design options.'
    },
    {
        icon: 'IconCircleCheck',
        title: 'Resolve comments',
        desc: 'Mark comments as resolved to keep the conversation focused.'
    }
];
</script>

<style lang="scss" scoped>
.textCaption {
    font-family: Inter;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0px;
}

.title {
    font-family: Inter;
    font-weight: 600;
    font-size: 54px;
    line-height: 63px;
    letter-spacing: -1.5px;

    @media (max-width: 1279px) {
        font-size: calc(100% + 35px);
        line-height: calc(100% + 25px);
    }

    @media (max-width: 959px) {
        font-size: 44px;
        line-height: 50px;
    }

    @media (max-width: 599px) {
        font-size: 34px;
        line-height: 40px;
    }
}

.feedback-card {
    max-width: 1150px;
    padding: 0 40px 90px;
    border: 1px soild 0000000D;
    background-color: #111111;
    border-radius: 24px;

    .feedback-card-text {
        border: 1px soild 0000000D;
        background-color: #222222;
        border-radius: 20px;
        padding: 60px 29px 29px;
    }

}

.feature-box {
    background-color: #1e1e1e;
    color: white;
    padding: 16px;
    min-height: 120px;

    .text-desc {
        font-family: Inter;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0%;
        vertical-align: middle;
        color: #737373;
        max-width: 85%;
    }

    .textSubtitle {
        font-family: Inter;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0%;
        vertical-align: middle;
    }
}

.userDetail {
    font-family: Inter;
    font-weight: 400;
    font-size: 19.43px;
    line-height: 29.14px;
    letter-spacing: 0%;
    vertical-align: middle;

    @media (max-width: 599px) {
        font-size: 10px;
        line-height: 14px;
    }
}
</style>
