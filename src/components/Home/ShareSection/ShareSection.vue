<template>
    <v-container class="customContainer py-md-16 py-10">
        <v-row :class="[feedbackFlexClass, shareFlexClass]" align="center" justify="space-between" class="">
            <!-- Left Section -->
            <v-col cols="12" md="6">
                <v-chip class="mb-4 text-white font-weight-bold bg-gradient-orange bg-rounded-100">
                    {{ badge.text }}
                </v-chip>

                <h2 class="title mb-5">{{ title }}</h2>
                <p class="mb-8 description-text">{{ description }}</p>

                <div class="d-flex align-center gap-4 mb-8" v-if="showFeedback">
                    <template v-for="(feature, index) in features" :key="index">
                        <div class="rounded-circle bg-grey-lighten-4 d-flex align-center justify-center"
                            style="width: 24px; height: 24px;">
                            <IconCheck :size="14" color="#282828" />
                        </div>
                        <span class="text-feature mr-3">{{ feature }}</span>
                    </template>
                </div>

                <div class="d-flex align-center works-btn-wrap" v-if="button">
                    <div class="d-flex justify-center align-center bg-gradient-orange rounded-circle"
                        style="width: 24px; height: 24px;">
                        <IconPlayerPlayFilled :size="14" color="#fff" />
                    </div>
                    <p class="ml-3">{{ button.text }}</p>
                </div>
            </v-col>

            <!-- Right Section -->
            <v-col cols="12" md="6">
                <div class="codeFrameWrap d-flex justify-center align-center pa-8">
                    <img :src="selectedImage" alt="illustration" class="codeFrame" />
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { IconCheck, IconPlayerPlayFilled } from '@tabler/icons-vue';
import codeBaseWindow from '@/assets/img/codingFrame.png';
import feedbackFrame from '@/assets/img/feedbackFrame.png';

// defineProps({
//     title: {
//         type: String,
//         default: 'Share anything you’re working on.',
//     },
//     description: {
//         type: String,
//         default:
//             "Campsite has been instrumental in keeping designers aware of each others' work-in-progress in a way that was previously slowing us down. It's also one of the only channels where.",
//     },
//     badge: {
//         type: Object,
//         default: () => ({ text: 'Share' }),
//     },
//     features: {
//         type: Array,
//         default: () => ['Coded', '100% Secure'],
//     },
//     button: {
//         type: Object,
//         default: () => ({
//             text: 'See how it works',
//         }),
//     },
//     image: {
//         type: String,
//         required: true,
//         default: () => ({ codeBaseWindow }),
//     },
// });
const props = defineProps({
    title: String,
    description: String,
    badge: Object,
    features: Array,
    button: Object,
    image: String,
    showFeedback: {
        type: Boolean,
        default: false,
    },
});

const title = props.title || 'Share anything you’re working on.';
const description = props.description || "Campsite has been instrumental in keeping designers aware of each others' work-in-progress...";
const badge = props.badge || { text: 'Share' };
const features = props.features || ['Coded', '100% Secure'];
const button = props.button || { text: 'See how it works' };


const feedbackFlexClass = computed(() => ({
    'flex-md-row-reverse flex-column-reverse': !props.showFeedback,
}))
const shareFlexClass = computed(() => ({
    'flex-md-row flex-column': props.showFeedback,
}))

const selectedImage = computed(() =>
    props.image ? props.image : (props.showFeedback ? codeBaseWindow : feedbackFrame)
);


</script>


<style lang="scss" scoped>
.title {
    font-family: Inter;
    font-weight: 600;
    font-size: 54px;
    line-height: 63px;
    letter-spacing: -1.5px;
    color: #282828;

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
        text-align: left;
    }
}

.description-text {
    font-family: Inter;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #5f6980;

    @media (max-width: 959px) {
        font-size: 16px;
        line-height: 24px;
    }
}

.works-btn-wrap {
    font-family: Inter;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: #282828;
}

.codeFrameWrap {
    background: #fafafa;
    border-radius: 24px;

    .codeFrame {
        max-width: 530px;
        height: 330px;

        @media (max-width: 959px) {
            max-width: 300px;
            height: auto;
        }
    }
}

.text-feature {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #282828;
}

.gap-4 {
    gap: 1rem;
}
</style>
