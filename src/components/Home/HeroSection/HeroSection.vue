<template>
    <v-container class="customContainer">
        <v-row justify="center">

            <v-col cols=" 12" md="12" class="text-md-center text-left">
                <div class="hero_content_wrap">
                    <h1 class="mb-md-10 mb-6 mt-md-12 mt-8 heroTitle">

                        Create, inspect, and apply synthetic surveillance broadly.

                    </h1>

                    <p class="heroSubTitle">

                        Start with a stunning homepage. Stay motivated without hurting your pocket.

                    </p>

                    <v-btn class="ctaCommon" rounded>Start for free</v-btn>

                    <div class="textCaption d-md-block d-none">

                        Want to talk or get a live demo?

                        <a href="#" class="text-decoration-none font-weight-medium">Get in touch →</a>

                    </div>
                </div>
            </v-col>

        </v-row>
    </v-container>
    <!-- Network Diagram -->
    <div class="networkWrap">
        <img :src="networkImg" alt="Network Image" class="networkImg" />
    </div>

    <div class="textCaption text-block d-md-none">

        Want to talk or get a live demo?

        <a href="#" class="text-decoration-none font-weight-medium">Get in touch →</a>

    </div>
</template>

<script setup>
import networkImg from '../../../assets/img/heroSectionImg.png';
</script>

<style lang="scss" scoped>
.hero_content_wrap {
    position: relative;
    z-index: 12;
}

.heroTitle {
    font-size: 84px;
    line-height: 89px;
    letter-spacing: -3.5px;
    color: #171717;
    // margin-top: 50px;
    font-weight: 600;

    @media (max-width: 1279px) {
        font-size: calc(100% + 50px);
        line-height: calc(100% + 30px);
    }

    @media (max-width: 959px) {
        font-size: 50px;
        line-height: 60px;
        letter-spacing: 0px;
    }

    @media (max-width: 599px) {
        font-size: 34px;
        line-height: 40px;
        text-align: left;
    }
}

.heroSubTitle {
    font-weight: 400;
    font-size: 20px;
    line-height: 35px;
    letter-spacing: 0px;
    color: #5F5F5F;
    margin: 10px 0;

}

.ctaCommon {
    width: 153px;
    height: 52px;
    border-radius: 39px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: -0.2px;
    text-align: center;
    color: #fff;
    background: linear-gradient(315deg, #FF240E 0%, #FF4600 100%);
    box-shadow: 0px -1.5px 0px 0px #FFFFFF52 inset;
    text-transform: unset;
    margin-top: 20px;
}

.textCaption {
    position: relative;
    z-index: 12;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -1%;
    vertical-align: middle;
    color: #A3A3A3;
    margin-top: 30px;
    text-align: center;

    a {
        font-weight: 600;
        color: #525252;
    }

    @media (max-width: 599px) {
        font-size: 12px;
        line-height: 20px;

        a {
            font-size: 14px;
            line-height: 22px;
        }
    }
}

.networkWrap {
    position: relative;
    padding-bottom: 400px;

    .networkImg {
        position: absolute;
        z-index: 10;
        bottom: 30px;
        width: 100%;
    }

    @media (max-width: 959px) {
        padding-bottom: 230px;

        .networkImg {
            bottom: -70px;
            width: 100%;
            height: 360px;
        }

        @media (max-width: 720px) {
            .networkImg {
                bottom: 20px;
                height: 259px;
            }

        }
    }
}
</style>
