<template>
    <section class="section_wrap">
        <v-container class="customContainer py-10">
            <v-row justify="center" align="start" dense>
                <v-col v-for="(testimonial, index) in testimonials" :key="index" cols="12" md="6">
                    <v-card class="testimonialCard pa-6 bg-transparent">
                        <img :src="testimonial.icon" alt="Testimonial Icon" class="mb-4" />
                        <p class="textBody mb-6">
                            {{ testimonial.text }}
                        </p>
                        <div class="d-flex align-center">
                            <v-avatar size="32">
                                <v-img :src="testimonial.avatar" :alt="testimonial.name" />
                            </v-avatar>
                            <div class="ml-3">
                                <div class="text-subtitle-2 font-weight-medium">{{ testimonial.name }}</div>
                                <div class="text-caption text-grey-darken-1">{{ testimonial.role }}</div>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup>
import avatar from '@/assets/img/avatar.svg';
import firstTestimonial from '@/assets/img/firstTestimonial.svg';
import secondTestimonial from '@/assets/img/secondTestimonial.svg';

const testimonials = [
    {
        icon: firstTestimonial,
        text: `Cloudhub has emerged as an essential asset for the team at Patreon design. Amidst an accelerated
      expanding organization in which the product undergoes rapid changes, Campsite enables us to
      maintain visibility on what’s transpiring across various teams — impeccably aligning with our
      pre-existing procedures.`,
        avatar: avatar,
        name: 'Gabriel Valdivia',
        role: 'Principal Product Designer, Patreon',
    },
    {
        icon: secondTestimonial,
        text: `Cloudhub has demonstrated exceptional worth in preserving open communication among designers
      regarding their current endeavors, a challenge that previously impeded our progress. It
      continually stands as a distinctive platform guiding our dialogue towards imagination and
      consistent review, an element I highly value. Moreover, it has accelerated our propensity for
      early-stage feedback beyond my expectations.`,
        avatar: avatar,
        name: 'Buzz Usborne',
        role: 'Principal Designer, Buildkite',
    }
];
</script>

<style lang="scss" scoped>
.section_wrap {
    background-color: #F9FAFB;
}

.testimonialCard {
    box-shadow: none !important;

    .textBody {
        font-family: Inter;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        letter-spacing: 0px;
        vertical-align: middle;
        color: #171717;
    }
}
</style>
