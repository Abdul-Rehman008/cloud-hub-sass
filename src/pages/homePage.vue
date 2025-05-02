<template>
    <HeroSection />
    <TrustedBrand />
    <ShareSection :showFeedback="true" />
    <ShareSection title="Better feedback at the right time."
        description="Campsite has been instrumental in keeping designers aware of Feedbackeach others' work-in-progress in a way that was previously slowing us down. It's also one of the only channels where."
        :badge="{ text: 'Feedback' }" :button="{ text: 'Start for free' }" :showFeedback="false" />

    <FeedbackSection />
    <ProgressArchive />
    <Testimonials />
    <BrandLogos />
    <InspiredView />
    <DemostrationSection />
    <Footer />
</template>

<script setup>
import HeroSection from '@/components/Home/HeroSection/HeroSection.vue';
import ShareSection from '@/components/Home/ShareSection/ShareSection.vue';
import FeedbackSection from '@/components/Home/FeedbackSection/FeedbackSection.vue';
import ProgressArchive from '@/components/Home/ProgressArchive/ProgressArchive.vue';
import Testimonials from '@/components/Home/Testimonials/Testimonials.vue';
import BrandLogos from '@/components/Home/BrandLogos/BrandLogos.vue';
import InspiredView from '@/components/Home/InspiredView/InspiredView.vue';
import Footer from '@/components/Home/Footer/Footer.vue';
import DemostrationSection from '@/components/Home/DemostrationSection/DemostrationSection.vue';
import TrustedBrand from '@/components/Home/TrustedBrand/TrustedBrand.vue';
</script>

<style lang="scss" scoped></style>