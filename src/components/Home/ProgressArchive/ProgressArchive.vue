<template>
  <v-container class="customContainer py-10">
    <h2 class="mb-10">Your Archive of Progress</h2>

    <v-row>
      <v-col v-for="(card, index) in cards" :key="index" cols="12" md="6">
        <v-card class="pa-6 progressCard text-center" rounded="lg">
          <h4 class="text-subtitle-1 font-weight-bold mb-0">{{ card.title }}</h4>
          <p class="mb-2 text-grey-darken-1">{{ card.description }}</p>
          <div class="imgWrap">
            <!-- <div class="text-h5 font-weight-bold mb-1">{{ card.statValue }}</div>
              <div class="text-caption mb-2 text-grey-darken-1">{{ card.statPercent }}</div> -->
            <img :src="card.image" alt="Graph" />
          </div>
          <!-- <v-card class="pa-4" elevation="1" rounded="lg"> -->
          <!-- <div class="d-flex justify-space-between align-center mb-2">
              <span v-if="card.badge.label" class="text-body-2 font-weight-medium">{{ card.badge.label }}</span>
              <v-chip v-if="card.badge.text" :color="card.badge.color" size="small" text-color="white">
                {{ card.badge.text }}
              </v-chip>
            </div> -->

          <!-- <v-row v-if="card.stat" align="center">
              <v-col>
                <div class="text-h6 font-weight-bold">{{ card.stat.value }}</div>
                <div class="text-caption">{{ card.stat.caption }}</div>
              </v-col>
              <v-col>
                <v-img :src="card.image" alt="Graph" height="80" cover />
              </v-col>
            </v-row> -->


          <!-- </v-card> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import graph1 from '@/assets/img/projectGraph.png'
import graph2 from '@/assets/img/profileGraph.png'
const cards = [
  {
    title: 'Projects',
    description: 'Organize, follow, and archive.',
    // badge: { label: 'Overview', text: 'Monthly', color: 'orange' },
    image: graph1,
  },
  {
    title: 'Member profiles',
    description: 'Automatic portfolios of your work.',
    // badge: { text: 'New Leads', color: 'orange' },
    // statValue: '3,729',
    // statPercent: '70.0%',
    image: graph2,
  },
];
</script>

<style lang="scss" scoped>
.progressCard {
  background-color: #FCFCFC;
  border: 1px solid #0000000D;
  position: relative;
  min-height: 400px;

  .imgWrap {
    position: absolute;
    bottom: -5px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

h2 {
  color: #212121;
  font-family: Inter;
  font-weight: 600;
  font-size: 54px;
  line-height: 63px;
  letter-spacing: -1.5px;
  text-align: center;

  @media (max-width: 1279px) {
    font-size: calc(100% + 35px);
    line-height: calc(100% + 25px);
  }

  @media (max-width: 959px) {
    font-size: 44px;
    line-height: 50px;
    text-align: start;
  }

  @media (max-width: 599px) {
    font-size: 34px;
    line-height: 40px;
  }
}
</style>
