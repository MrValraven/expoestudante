<template>
    <section class="hero">
      <div class="spread-video">
      <video autoplay muted loop id="backgroundVideo">
        <source src="@/assets/fundos/fundoAnimado.mp4" type="video/mp4">
      </video>
      </div>
      <img src="@/assets/fundos/ondinhaHero.png" alt="">
      <slot></slot>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.hero {
  z-index: 0;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: flex-end;

  .spread-video > video {
  width: 100%;
  }
  
  .spread-video{
    position: absolute;
    z-index: -2;
    top: -15vh;
    width: 100%;
    overflow: hidden;
  }

  img {
    z-index: -1;
    position: absolute;
    bottom: -18vh;
    width: 100%;
  }
}

</style>