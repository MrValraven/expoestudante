<template>

  <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
  <NavbarMobile v-if="mobileMode" @activatedNavbar="activateNavbar()" />
  <Navbar v-if="!mobileMode" class="navbar"   />
  <div v-if="!activatedNavbar" class="pageContent">
    <section class="hero">
      <img src="@/assets/porque.png" alt="" v-if="!mobileMode">
      <h2>Porquê</h2>
      <h1>Vir à expo?</h1>
      <div class="info">
         <div class="infoText">
           <div class="locais">
            <ul>
              <li>A Expo Estudante 2021 tem como tema base a tecnologia, mas não é restrita ao tema, aliás, os temas destas talks são diversificados e, apesar de ligados à vertente tecnológica, terás de certeza pontos de interesse.</li>
              <li>Durante estes 6 dias vais ainda contar com experiências de aproximação das empresas ao teu interesse e futuro. Vais adquirir contactos e propostas, experiência e muito conhecimento.</li>
              <li>Por isso a questão é outra: será que vais querer ficar de fora?</li>
            </ul>
            <div class="palcos" v-if="after29">
              <ul>
                <li>
                    <svg id="palco" height="50px" width="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 216a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z" fill="#8690fa"/><path d="m320 136a23.926 23.926 0 0 1 -16.971-7.029l-47.029-47.03-47.029 47.03a24 24 0 0 1 -33.942-33.942l64-64a24 24 0 0 1 33.942 0l64 64a24 24 0 0 1 -16.971 40.971z" fill="#5153ff"/><path d="m256 488a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z" fill="#8690fa"/><path d="m256 488a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 33.942-33.942l47.029 47.03 47.029-47.03a24 24 0 0 1 33.942 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#5153ff"/><path d="m464 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z" fill="#8690fa"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#8690fa"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#5153ff"/><path d="m192 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z" fill="#8690fa"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z" fill="#8690fa"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z" fill="#5153ff"/></svg>
                    <p><span>50</span> Oradores</p>
                </li>
                <li>
                    <svg id="palco" height="50px" width="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 216a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z" fill="#8690fa"/><path d="m320 136a23.926 23.926 0 0 1 -16.971-7.029l-47.029-47.03-47.029 47.03a24 24 0 0 1 -33.942-33.942l64-64a24 24 0 0 1 33.942 0l64 64a24 24 0 0 1 -16.971 40.971z" fill="#5153ff"/><path d="m256 488a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z" fill="#8690fa"/><path d="m256 488a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 33.942-33.942l47.029 47.03 47.029-47.03a24 24 0 0 1 33.942 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#5153ff"/><path d="m464 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z" fill="#8690fa"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#8690fa"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#5153ff"/><path d="m192 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z" fill="#8690fa"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z" fill="#8690fa"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z" fill="#5153ff"/></svg>
                    <p><span>100</span> Empresas</p>
                </li>
                <li>
                    <svg id="palco" height="50px" width="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 216a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z" fill="#8690fa"/><path d="m320 136a23.926 23.926 0 0 1 -16.971-7.029l-47.029-47.03-47.029 47.03a24 24 0 0 1 -33.942-33.942l64-64a24 24 0 0 1 33.942 0l64 64a24 24 0 0 1 -16.971 40.971z" fill="#5153ff"/><path d="m256 488a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z" fill="#8690fa"/><path d="m256 488a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 33.942-33.942l47.029 47.03 47.029-47.03a24 24 0 0 1 33.942 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#5153ff"/><path d="m464 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z" fill="#8690fa"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#8690fa"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#5153ff"/><path d="m192 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z" fill="#8690fa"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z" fill="#8690fa"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z" fill="#5153ff"/></svg>
                    <p><span>33</span> Stands</p>
                </li>
              </ul>
            </div>
          </div>
         </div>
      </div>
    </section>
    <Footer />
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';
import NavbarMobile from '../components/NavbarMobile.vue';
import ScrollToTopButton from '../components/ScrollToTopButton.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      activatedNavbar: false,
      isAtTop: true,
      mobileMode: false,
      after29: false,
    }
  },
  components: {
    Navbar,
    NavbarMobile,
    ScrollToTopButton,
    Footer,
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
   methods: {
    activateNavbar() {
      this.activatedNavbar = !this.activatedNavbar;
    },

    scrollToElement(destination: string) {
      const element = document.querySelector(destination);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    },

    getImgURL(image: String) {
        return require('../assets/' + image);
    },

    handleScroll () {
      window.pageYOffset >= 250 ? this.isAtTop = false : this.isAtTop = true;
    },

    handleResize () {
      this.mobileMode = window.innerWidth <= 1015;
      if(!this.mobileMode) {
        this.activatedNavbar = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>

$textColor: #596FF0;
$blueTextColor: #0010FF;

.pageContent {
  position: relative;
  max-width: 100vw;
  overflow: hidden;
}

.hero {
   z-index: -15;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 15vh;

  img {
    position: absolute;
    z-index: -15;
    top: 70vh;
    width: 100vw;
  }

  h2 {
    margin: 0vh 0 0 10vw;
    text-transform: uppercase;
    font-size: 60px;
    font-weight: 800;
    color: $blueTextColor;
    
  }

  h1 {
    margin: 0 0 0 200px;
    text-transform: uppercase;
    font-size: 100px;
    color: $textColor;
    font-weight: 300;
    font-style: italic;
  }

  .info {
    display: flex;
    justify-content: center;

    .infoText {
      display: flex;
      flex-direction: column;

      .locais {
        display: flex;
        justify-content: center;
        width: 100%;

        ul {
          width: 60%;

          li {
            font-size: 25px;
            font-weight: 300;
            font-style: italic;
            padding: 10px;
            color: $textColor;
          }
        }


        .palcos ul{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 0;
          margin-left: 8vw;

          li {
            display: flex;
            width: 300px;
            justify-content: center;
            align-items: center;
            margin: 0;

            p {
              display: flex;
              justify-content: space-around;
              align-items: center;
              font-weight: bold;
              font-size: 23px;

              span {
                margin-left: 10px;
                margin-right: 5px;
                color: $blueTextColor;
                font-weight: 800;
                font-size: 60px;
              }
            }
          }
        }
      }

      
    }
  }
}

@media (max-width: 500px) {

  .hero {
    margin-top: 100px;
    height: auto;
    h2 {
      font-size: 30px;
      margin-left: 20px;
    }

    h1 {
      font-size: 50px;
      margin-left: 30px;
    }

    .info .infoText .locais ul li {
      font-size: 16px;
    }
  }
}

</style>
