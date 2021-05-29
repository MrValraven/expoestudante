<template>

  <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
  <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
  <Navbar v-if="!mobileMode" class="navbar" />
  <div v-if="!activatedNavbar" class="pageContent">
    <section class="hero">
      <img src="@/assets/onde.png" alt="" v-if="!mobileMode">
      <h2>Onde</h2>
      <h1>Vai ser a expo?</h1>
      <div class="info">
         <i class="fas fa-map-marker-alt"></i>
         <div class="infoText">
           <h1>Aqui no google maps</h1>
           <div class="locais">
            <ul>
              <li>Universidade de Évora</li>
              <li>Largo dos Colegiais 2</li>
              <li>7000-812 Évora</li>
              <li>Entrada B/Sul<br>Coordenadas: 41.19888, -8.692</li>
            </ul>
            <div class="palcos">
              <ul>
                <li>
                    <svg id="palco" height="50px" width="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 216a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z" fill="#8690fa"/><path d="m320 136a23.926 23.926 0 0 1 -16.971-7.029l-47.029-47.03-47.029 47.03a24 24 0 0 1 -33.942-33.942l64-64a24 24 0 0 1 33.942 0l64 64a24 24 0 0 1 -16.971 40.971z" fill="#5153ff"/><path d="m256 488a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z" fill="#8690fa"/><path d="m256 488a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 33.942-33.942l47.029 47.03 47.029-47.03a24 24 0 0 1 33.942 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#5153ff"/><path d="m464 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z" fill="#8690fa"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#8690fa"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#5153ff"/><path d="m192 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z" fill="#8690fa"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z" fill="#8690fa"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z" fill="#5153ff"/></svg>
                    <p>Main Stage</p>
                </li>
                <li>
                    <svg id="palco" height="50px" width="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 216a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z" fill="#8690fa"/><path d="m320 136a23.926 23.926 0 0 1 -16.971-7.029l-47.029-47.03-47.029 47.03a24 24 0 0 1 -33.942-33.942l64-64a24 24 0 0 1 33.942 0l64 64a24 24 0 0 1 -16.971 40.971z" fill="#5153ff"/><path d="m256 488a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z" fill="#8690fa"/><path d="m256 488a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 33.942-33.942l47.029 47.03 47.029-47.03a24 24 0 0 1 33.942 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#5153ff"/><path d="m464 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z" fill="#8690fa"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#8690fa"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#5153ff"/><path d="m192 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z" fill="#8690fa"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z" fill="#8690fa"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z" fill="#5153ff"/></svg>
                    <p>Auditório Nobre</p>
                </li>
                <li>
                    <svg id="palco" height="50px" width="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 216a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z" fill="#8690fa"/><path d="m320 136a23.926 23.926 0 0 1 -16.971-7.029l-47.029-47.03-47.029 47.03a24 24 0 0 1 -33.942-33.942l64-64a24 24 0 0 1 33.942 0l64 64a24 24 0 0 1 -16.971 40.971z" fill="#5153ff"/><path d="m256 488a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z" fill="#8690fa"/><path d="m256 488a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 33.942-33.942l47.029 47.03 47.029-47.03a24 24 0 0 1 33.942 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#5153ff"/><path d="m464 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z" fill="#8690fa"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#8690fa"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#5153ff"/><path d="m192 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z" fill="#8690fa"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z" fill="#8690fa"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z" fill="#5153ff"/></svg>
                    <p>Granito</p>
                </li>
                <li>
                    <svg id="palco" height="50px" width="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 216a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z" fill="#8690fa"/><path d="m320 136a23.926 23.926 0 0 1 -16.971-7.029l-47.029-47.03-47.029 47.03a24 24 0 0 1 -33.942-33.942l64-64a24 24 0 0 1 33.942 0l64 64a24 24 0 0 1 -16.971 40.971z" fill="#5153ff"/><path d="m256 488a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z" fill="#8690fa"/><path d="m256 488a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 33.942-33.942l47.029 47.03 47.029-47.03a24 24 0 0 1 33.942 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#5153ff"/><path d="m464 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z" fill="#8690fa"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#8690fa"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#5153ff"/><path d="m192 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z" fill="#8690fa"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z" fill="#8690fa"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z" fill="#5153ff"/></svg>
                    <p>CES</p>
                </li>
              </ul>
            </div>
          </div>
         </div>
      </div>
    </section>
    <section class="travel" v-if="after29">
      <h1>Como chegar lá?</h1>
      <ul>
        <li><a @click="meioDeTransporte = transportes[0].titulo; primeiroParagrafo = transportes[0].primeiroParagrafo; segundoParagrafo = transportes[0].segundoParagrafo;"   >De carro</a></li>
        <li><a @click="meioDeTransporte = transportes[1].titulo; primeiroParagrafo = transportes[1].primeiroParagrafo; segundoParagrafo = transportes[1].segundoParagrafo;"  >De autocarro</a></li>
        <li><a @click="meioDeTransporte = transportes[2].titulo; primeiroParagrafo = transportes[2].primeiroParagrafo; segundoParagrafo = transportes[2].segundoParagrafo;"  >De comboio</a></li>
        <li><a @click="meioDeTransporte = transportes[3].titulo; primeiroParagrafo = transportes[3].primeiroParagrafo; segundoParagrafo = transportes[3].segundoParagrafo;"  >De taxi</a></li>
      </ul>
      <Transporte :titulo="meioDeTransporte" :primeiroParagrafo="primeiroParagrafo" :segundoParagrafo="segundoParagrafo" />
    </section>
    <Footer id="footer" />
  </div>
</template>



<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';
import NavbarMobile from '../components/NavbarMobile.vue';
import ScrollToTopButton from '../components/ScrollToTopButton.vue';
import Transporte from '../components/Transporte.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      activatedNavbar: false,
      isAtTop: true,
      mobileMode: false,
      after29: false,
      meioDeTransporte: "",
      primeiroParagrafo: "",
      segundoParagrafo: "",
      transportes: [
        {titulo: "De carro" , primeiroParagrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quia eum animi culpa necessitatibus, amet quam eius magni et explicabo illum quaerat natus dolorum, sequi architecto possimus fugiat voluptatibus. Repudiandae.", segundoParagrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quia eum animi culpa necessitatibus, amet quam eius magni et explicabo illum quaerat natus dolorum, sequi architecto possimus fugiat voluptatibus. Repudiandae."},
        {titulo: "De autocarro" , primeiroParagrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quia eum animi culpa necessitatibus, amet quam eius magni et explicabo illum quaerat natus dolorum, sequi architecto possimus fugiat voluptatibus. Repudiandae.", segundoParagrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quia eum animi culpa necessitatibus, amet quam eius magni et explicabo illum quaerat natus dolorum, sequi architecto possimus fugiat voluptatibus. Repudiandae."},
        {titulo: "De comboio" , primeiroParagrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quia eum animi culpa necessitatibus, amet quam eius magni et explicabo illum quaerat natus dolorum, sequi architecto possimus fugiat voluptatibus. Repudiandae.", segundoParagrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quia eum animi culpa necessitatibus, amet quam eius magni et explicabo illum quaerat natus dolorum, sequi architecto possimus fugiat voluptatibus. Repudiandae."},
        {titulo: "De taxi" , primeiroParagrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quia eum animi culpa necessitatibus, amet quam eius magni et explicabo illum quaerat natus dolorum, sequi architecto possimus fugiat voluptatibus. Repudiandae.", segundoParagrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quia eum animi culpa necessitatibus, amet quam eius magni et explicabo illum quaerat natus dolorum, sequi architecto possimus fugiat voluptatibus. Repudiandae."},
      ]
    }
  },
  components: {
    Navbar,
    NavbarMobile,
    ScrollToTopButton,
    Transporte,
    Footer,
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    this.meioDeTransporte = this.transportes[0].titulo;
    this.primeiroParagrafo = this.transportes[0].primeiroParagrafo;
    this.segundoParagrafo = this.transportes[0].segundoParagrafo;
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
   methods: {
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
$headerTextColor: #7179F4;
$blueTextColor: #0010FF;

.pageContent {
  position: relative;
  max-width: 100vw;
  overflow: hidden;
}

.hero {
  z-index: -15;
  position: relative;
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;

  img {
    position: absolute;
    z-index: -15;
    top: 0vh;
    width: 100vw;
    height: 130vh;
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
    width: 100%;
    display: flex;
    justify-content: center;

    i {
      font-size: 100px;
      color: $textColor;
      opacity: 0.5;
      margin-left: 15vw;
    }

    .infoText {
      display: flex;
      flex-direction: column;
      width: 100%;

      h1 {
        margin: 0 0 0 25px;
        font-size: 40px;
        color: $blueTextColor;
        font-weight: bold;
        font-style: normal;
      }
      .locais {
        display: flex;
        justify-content: space-around;

        ul {

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
          flex-wrap: wrap;
          padding: 0;
          margin-left: 0;

          li {
            width: 200px;
            display: flex;
            align-items: center;
            flex: 0 0 45%;
            margin: 0;
          }
        }
      }

      
    }
  }
} 

@media (max-width: 500px) {
  .hero {
    height: auto;

    h1,
    h2 {
      margin-left: 20px;;
    }

    h2 {
      font-size: 25px;
      margin-top: 100px;
    }

    h1 {
      font-size: 40px;
    }

    .info .fa-map-marker-alt {
      height: 100px;
      margin-left: 20px;
      padding-top: 50px;
      display: none;
    }

    .locais {
      flex-direction: column;

      ul li {
        font-size: 12px;
      }

      .palcos {
        width: 100vw;
      }
    }
  }

  .hero .info .infoText {
      h1 {
        font-size: 20px;
      }
    }

    .hero .info .infoText .locais ul li[data-v-157381da] {
      font-size: 16px;
    }
}

.travel {
  margin-top: 60vh;

  ul {
    margin: 0;
    background-color: white;

    li {
      width: 100px;
      padding: 5px;
      border: 1px solid #ececec;

      a {
        min-width: 100%;
        cursor: pointer;
        opacity: 0.75;
      }
    }

    a:hover {
      
      opacity: 1;
    }
  }
}

</style>