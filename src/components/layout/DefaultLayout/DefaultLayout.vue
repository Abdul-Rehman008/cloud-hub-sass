<!-- src/components/layout/DefaultLayout.vue -->
<template>
    <v-app>

        <v-app-bar flat elevation="0" height="80" class="px-6">
            <v-container class="customContainer pa-0">
                <div class="d-flex align-center justify-space-between">
                    <!-- Left: Logo + Nav Icon for Mobile -->
                    <div class="d-flex align-center">
                        <!-- Mobile Menu Icon -->
                        <!-- <v-app-bar-nav-icon color="black" class="d-md-none mr-3" @click="drawer = !drawer" /> -->

                        <!-- Logo -->
                        <img :src="logo" alt="Cloudhub Logo" height="30" class="mr-2" />

                        <!-- Desktop Nav Links -->
                        <div class="d-none d-md-flex ml-10">
                            <v-menu>
                                <template #activator="{ props }">
                                    <v-btn variant="text" class="navBtn" v-bind="props">
                                        Product
                                        <IconChevronDown size="16" class="ml-2" />
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item title="Overview" />
                                    <v-list-item title="Features" />
                                </v-list>
                            </v-menu>

                            <v-btn variant="text" class="px-0 navBtn">Home</v-btn>
                            <v-btn variant="text" class="px-0 navBtn">Shop</v-btn>
                            <v-btn variant="text" class="px-0 navBtn">Pages</v-btn>
                            <v-btn variant="text" class="navBtn">Integrations</v-btn>
                            <v-btn variant="text" class="navBtn">Developers</v-btn>
                        </div>
                    </div>

                    <!-- Right: Actions -->
                    <div class="d-md-flex d-none align-center gap-4">
                        <v-btn variant="text" class="btn-outline">Login</v-btn>
                        <v-btn class="bg-gradient-orange text-white btn-dark" rounded="pill">
                            Start for free
                        </v-btn>
                    </div>
                    <div class="d-md-none d-block"><img :src="mobileMenuIcon" alt="mobileMenuIcon"
                            @click="drawer = !drawer" /> </div>
                </div>
            </v-container>
        </v-app-bar>

        <!-- Mobile Drawer -->
        <v-navigation-drawer v-model="drawer" app temporary class="d-md-none">
            <v-list>
                <v-list-item title="Product">
                    <v-list>
                        <v-list-item title="Overview" />
                        <v-list-item title="Features" />
                    </v-list>
                </v-list-item>
                <v-list-item title="Home" />
                <v-list-item title="Shop" />
                <v-list-item title="Pages" />
                <v-list-item title="Integrations" />
                <v-list-item title="Developers" />
            </v-list>
            <v-divider class="my-2" />
            <div class="px-4">
                <v-btn block variant="text" class="btn-outline mb-2">Login</v-btn>
                <v-btn block class="bg-gradient-orange text-white btn-dark" rounded="pill">
                    Start for free
                </v-btn>
            </div>
        </v-navigation-drawer>


        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<!-- <script setup>
import logo from '@/assets/img/logoWithName.svg';
import { IconChevronDown } from '@tabler/icons-vue';
</script> -->
<script setup>
import { IconChevronDown } from '@tabler/icons-vue';
import mobileMenuIcon from '@/assets/img/mobileMenuIcon.svg'
import { ref } from 'vue';

const drawer = ref(false);

const logo = new URL('@/assets/img/logoWithName.svg', import.meta.url).href;
</script>


<style lang="scss" scoped>
.navBtn {
    font-family: Inter;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0px;
    color: #282828;
    text-transform: none;
    margin-right: 10px;
}

.btn-outline {
    font-family: Inter;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0px;
    color: #282828;
    text-transform: none;
}

.btn-dark {
    font-family: Inter;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
    text-transform: none;
}
</style>