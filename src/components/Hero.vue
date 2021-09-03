<template>
    <section class="hero">
      <video autoplay muted loop id="backgroundVideo">
      <source src="@/assets/fundoAnimado.mp4" type="video/mp4">
      </video> 
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.hero {
  z-index: -299;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  overflow-x: none;

  #backgroundVideo {
    position: absolute;
    z-index: -300;
    top: -15vh;
    width: 100vw;
    overflow: hidden;
  }

  @media (min-width: 1800px) {

    .datas {
      margin-left: 5vw;
      margin-bottom: 3vh;
    }

  }

  @media (max-width: 365px) {

    .datas {
      margin-left: 5vw;
      margin-bottom: 3vh;
  
      h1 {
        font-size: 25px;
      }

      h2 {
        font-size: 18px;
      }

      span {
        font-size: 11px;
      }

      hr {
        width: 50px;
      }
    }
  }

}

</style>