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
      this.isTablet = window.innerWidth <= 1014 && window.innerWidth >= 700;
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

@media (max-width: 1400px) {
  .hero .spread-video > video {
    top: 0;
  }
}

</style>