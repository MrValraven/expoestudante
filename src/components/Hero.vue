<template>
    <section class="hero">
      <div class="spread-video">
      <video v-if="!mobileMode" autoplay muted loop id="backgroundVideo">
        <source src="@/assets/fundos/fundoAnimado.mp4" type="video/mp4">
      </video>
      <video v-else-if="mobileMode && isTablet" autoplay muted loop id="backgroundVideo">
        <source src="@/assets/fundos/fundo16_10.mp4" type="video/mp4">
      </video>
      <video v-else autoplay muted loop id="backgroundVideo">
        <source src="@/assets/fundos/fundo9_16.mp4" type="video/mp4">
      </video>
      </div>
      <img src="@/assets/fundos/ondinhaHero.png" alt="">
      <ul class="socials">
        <li>
            <a href="https://www.instagram.com/expoestudante/" target="_blank" rel="noreferrer noopenner">
                <Instagram :color="iconColor" />
            </a>
        </li>
        <li id="facebook">
            <a href="https://www.facebook.com/ExpoEstudante" target="_blank" rel="noreferrer noopenner">
                <Facebook :color="iconColor" />
            </a>
        </li>
        <li id="linkedin">
            <a href="https://www.linkedin.com/events/expoestudante6831256218653220864/" target="_blank" rel="noreferrer noopenner">
                <Linkedin :color="iconColor" />
            </a>
        </li>
      </ul>
      <slot></slot>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Facebook from '@/components/socials/Facebook.vue'
import Instagram from '@/components/socials/Instagram.vue'
import Linkedin from '@/components/socials/Linkedin.vue'

export default defineComponent({
  name: 'Footer',
  data() {
      return {
          iconColor: "#FFFFFF",
          mobileMode: false,
          isTablet: false,
      }
  },
  components: {
      Facebook,
      Instagram,
      Linkedin
  },
  created() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  computed: {
  },
  methods: {
    handleResize () {
      this.mobileMode = window.innerWidth <= 1015;
      this.isTablet = window.innerWidth <= 1015 && window.innerWidth >= 700;
    },
  }
});
</script>

<style lang="scss" scoped>

.hero {
  z-index: 0;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  .spread-video > video {
    position: absolute;
    top: -7vh;
    width: 100%;
    z-index: -2;
  }
  
  .spread-video{
    position: absolute;
    z-index: -2;
    height: 110vh;
    width: 100%;
    overflow: hidden;
  }

  img {
    z-index: -1;
    position: absolute;
    bottom: -4vh;
    width: 100%;
  }

  .socials {
    position: absolute;
    top: 30vh;
    left: 10px;
    z-index: 3;

    svg {
      position: relative;
      margin-top: 25px;
      opacity: 0.8;
      transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      z-index: 4;

      &:hover {
        opacity: 1;
        transform: translateY(-5px);
        cursor: pointer;
      }
    }
  }
}

@media (max-width: 1450px) {
  .hero .spread-video {
    overflow: visible;
  }
  
  .hero .spread-video > video {
    top: -4vh;
  }
}
@media (max-width: 1350px) {
  .hero .spread-video > video {
    top: 1vh;
  }
}
@media (max-width: 1250px) {
  .hero .spread-video > video {
    top: 10vh;
  }
}

@media (max-width: 1050px) {
  .hero .spread-video > video {
    top: 17vh;
  }

  .hero {
    
    .spread-video {
      overflow: hidden;
    }

    img {
      bottom: 0;
    }

  }
  
  
}


@media (max-width: 1050px) and (max-height: 1400px) and (min-height: 1020px) {

  .hero {
    height: 60vh;
  }

  .hero .spread-video > video {
    top: 40vh;
  }


  .hero .spread-video {
    height: 100vh;
  }
}

@media (max-width: 900px) {
  .hero .spread-video > video {
    top: 20vh;
  }
}

@media (max-width: 700px) {
  .hero .spread-video > video {
    top: -30vh;
  }
}
@media (max-width: 640px) {
  .hero .spread-video > video {
    top: -20vh;
  }
}

@media (max-width: 550px) {
  .hero .spread-video > video {
    top: -10vh;
  }

  .hero img {
    width: 150%;
  }

  .hero .socials {
    display: flex;
    justify-content: space-between;
    top: 70vh;
    left: 15vw;

    svg {
      margin-top: 0;
      margin-right: 35px;
    }
  }
}

@media (max-width: 450px) {
  .hero .spread-video > video {
    top: 0vh;
  }
}

@media (max-width: 420px) {
  .hero .spread-video > video {
    top: 5vh;
  }
}


@media (max-width: 380px) {
  .hero .spread-video > video {
    top: 11.5vh;
  }
}
@media (max-width: 380px) and (min-height: 700px) {
  .hero .spread-video > video {
    top: 11.5vh;
  }

  .hero img {
    bottom: 13vh;
    width: 150%;
  }
}

@media (max-width: 350px) {
  .hero .spread-video > video {
    top: 12vh;
  }
}

</style>