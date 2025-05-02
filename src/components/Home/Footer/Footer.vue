<template>
    <v-footer class="customContainer bg-white py-10" elevation="0">
        <v-container>
            <v-row align="start" justify="space-between" no-gutters>
                <!-- Logo -->
                <v-col cols="12" sm="2" class="mb-6 mb-sm-0 d-flex justify-start">
                    <img :src="lightLogo" alt="logo" width="40" height="40" />
                </v-col>

                <!-- Link Columns -->
                <v-col v-for="(section, index) in links" :key="index" cols="12" sm="6" lg="2" 
                    class="text-left mb-6">
                    <h4 class="text-footer-subtitle mb-4">{{ section.title }}</h4>
                    <div v-for="(item, i) in section.items" :key="i" class="text-footer-link mb-3">
                        <a href="#" class="text-decoration-none text-grey-darken-1">{{ item }}</a>
                    </div>
                </v-col>
                <!-- <v-col sm="1"></v-col> -->
            </v-row>

            <!-- Copyright -->
            <v-row justify="center" class="mt-10">
                <v-col cols="12" class="text-center text-caption text-grey-darken-1">
                    All rights reserved.© 2024 DejectStudio
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script setup>
import lightLogo from '@/assets/img/lightLogo.svg';
const links = [
    {
        title: 'Product',
        items: ['Features', 'Pricing', 'Changelog', 'Support']
    },
    {
        title: 'Legal',
        items: ['Terms of Privacy', 'Privacy Policy', 'Security']
    },
    {
        title: 'Company',
        items: ['Blog', 'Contact']
    },
    {
        title: 'Social',
        items: ['Dribbble', 'Behance', 'Discord']
    }
]
</script>

<style lang="scss" scoped>
.text-footer-subtitle {
    font-family: Inter;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0px;
        color: #282828;
}

.text-footer-link {
    font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0px;
        color: #5F6980;
}

.gap-6 {
    gap: 1.5rem;
}

</style>