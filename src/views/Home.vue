<template>

  <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
  <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
  <Navbar v-if="!mobileMode" class="navbar" />
  <div v-if="!activatedNavbar" class="pageContent">
    <section class="hero">
      <img src="@/assets/contactos.png" alt="" v-if="!mobileMode"> 
      <img src="@/assets/mobile/homepage.png" alt="" v-if="mobileMode"> 
    </section>
    <section class="future">
      <img src="@/assets/backgrounds/backgroundHomepage.png" alt="" v-if="!mobileMode">
      <div class="datas"> 
        <h2>Início</h2>
        <h1>
          08
          <span>NOV</span>
          <hr>
          13
          <span>NOV</span>
        </h1>
        <h2>Fim</h2>
      </div>
      <div class="mainText">
        <h2>O futuro</h2>
        <div>
          <h1>É agora</h1>
          <svg id="arrows" height="50px" width="50px" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><g fill="#5153ff"><path d="m320 424a24 24 0 0 1 -16.971-40.971l127.03-127.029-127.03-127.029a24 24 0 0 1 33.942-33.942l144 144a24 24 0 0 1 0 33.942l-144 144a23.928 23.928 0 0 1 -16.971 7.029z"/><path d="m184 424a24 24 0 0 1 -16.971-40.971l127.03-127.029-127.03-127.029a24 24 0 0 1 33.942-33.942l144 144a24 24 0 0 1 0 33.942l-144 144a23.928 23.928 0 0 1 -16.971 7.029z"/><path d="m48 424a24 24 0 0 1 -16.971-40.971l127.03-127.029-127.03-127.029a24 24 0 0 1 33.942-33.942l144 144a24 24 0 0 1 0 33.942l-144 144a23.928 23.928 0 0 1 -16.971 7.029z"/></g></svg>
          <div class="text">
            <p>O teu futuro não é amanhã, é construído hoje, por isso trazemos-te um summit único, pensado e programado especialmente a pensar em ti e no teu futuro.</p>
            <p>Durante os 6 dias poderás encontrar e criar oportunidades para o teu futuro pois vamos encurtar a distância entre ti e as empresas, vamos ajudar-te a dar este next step na tua carreira!</p>
          </div>
        </div>
      </div>

      <div class="localizacao">
        <a id="evora" href="https://www.google.com/maps/place/Associa%C3%A7%C3%A3o+Acad%C3%A9mica+da+Universidade+de+%C3%89vora/@38.5711961,-7.908017,18z/data=!3m1!4b1!4m5!3m4!1s0xd19e56f2f19aec9:0xc41513d0faa3463b!8m2!3d38.5711961!4d-7.9069841" target="_blank" rel="noopenner" class="localizacaoLink">
          <i class="fas fa-map-marker-alt"></i>
          <h1>Évora</h1>
        </a>
      </div>
      
      <div class="surpresas">
        <h2>Só aqui se trazem</h2>
        <h1>Surpresas</h1>
      </div>
     
      <div class="fastLinks" v-if="after29">
        <ul>
          <li><router-link to="/">Programa</router-link></li>
          <li><router-link to="/">Inscrições</router-link></li>
          <li><router-link to="/">Acreditações</router-link></li>
          <li><router-link to="/">Contatos</router-link></li>
        </ul>
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
      backgroundImage: '',
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
  computed: {
      style () :String {
        this.backgroundImage = this.mobileMode ? this.getImgURL("mobile/homepage.png") : this.getImgURL("contactos.png");
        return `background-image: url(${this.backgroundImage})`;
      }
    },
});
</script>

<style lang="scss" scoped>

$primaryColor: #5A68E0;
$darkerPrimaryColor: #7179F4;
$transitionEase: cubic-bezier(0.075, 0.82, 0.165, 1);

.pageContent {
  position: relative;
  max-width: 100vw;
  overflow: hidden;
}

.hero {
  z-index: -10;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: flex-end;

  img {
    position: absolute;
    z-index: -15;
    top: 0vh;
    width: 100vw;
    height: 100vh;
  }

  @media (min-width: 1800px) {

    .datas {
      margin-left: 5vw;
      margin-bottom: 3vh;
    }
  }

  @media (max-width: 500px) {

    .datas {
      margin-left: 5vw;
      margin-bottom: 3vh;
  
      h1 {
        font-size: 28px;
      }

      h2 {
        font-size: 25px;
      }

      span {
        font-size: 11px;
      }

      hr {
        width: 50px;
      }
    }
  }

  @media (max-width: 350px) {

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

@media (max-width: 1015px) {

  .hero {
    height: 100vh;
  }
}

.future {
  position: relative;
  z-index: -1;

  img {
    position: absolute;
    z-index: -200;
    bottom: -45vh;
  }

   .datas {
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 5vw;
    margin-top: -20vh;
    color: $primaryColor;

    h2 {
      font-size: 56px;
      font-weight: 300;
      font-style: italic;
    }

    h1 {
      display: flex;
      align-items: center;
      margin: 0vh 20px 0px 20px;
      font-size: 56px;
      font-weight: bold;
      
    }

    span {
      font-size: 23px;
      font-weight: bold;
      margin-right: 5px;
      margin-left: 5px;
    }

    hr {
      background: #0010FF;
      margin-right: 5px;
      margin-left: 5px;
      height: 5px;
      width: 100px;
      border: none;
    }
  }

  .mainText {
    display: flex;
    justify-content: center;
    flex-direction: column;

    h2 {
      text-align: left;
      text-transform: uppercase;
      color: $darkerPrimaryColor;
      font-size: 3.5vw;
      font-weight: 800;
      margin-top: 5vh;
      margin-bottom: 0;
      margin-left: 125px;
    }

    div {
      display: flex;
      justify-content: center;
      margin-left: 100px;

      h1 {
        margin-top: 0;
        text-transform: uppercase;
        font-size: 7vw;
        color: $primaryColor;
        font-weight: 300;
        font-style: italic;
      }

      #arrows {
        transform: rotateZ(90deg);
        margin-top: 20px;
        margin-left: 20px;
        margin-right: 20px;
      }

      .text {
        width: 50%;
        display: flex;
        flex-direction: column;
      }

      p {
        width: 40vw;
        margin-top: 20px;
        color: #596FF0;
        font-size: 1.1vw;
        font-weight: 300;
        font-style: italic;
        hyphens: auto;
      }
    }
  }

  @media (max-width: 1100px) {

    .mainText div {
    
    
      h2 {
        font-size: 2.5vw
      }
    
      h1 {
        font-size: 5vw;
      }
    }
    .text {
      width: 30%;
    }
  }

  @media (max-width: 500px) {

    .datas {
      margin-top: -80px;
      margin-left: 5px;

      h2 {
        font-size: 25px;
        margin-right: 5px;
      }

      h1 {
        font-size: 28px;
        margin: 0;

        span {
          font-size: 11px;
        }

        hr {
          width: 100px;
          height: 0.1px;
          border: solid 2px #0010ff;
        }
      }
    }

    .mainText {
    
    
      h2 {
        margin-left: 20px;
        font-size: 40px;
      }

      div {
        flex-direction: column;
        margin-left: 70px;

        h1 {
        font-size: 70px;
        margin-bottom: 5px;
        }
        .text {
          margin-left: 30px;
          width: 200px;
        }

        p {
          font-size: 16px;
          width: 200px;
        }

        #arrows {
        display: none;
        }
      }

      .novidades {
        margin-top: 25px;
        margin-left: 10px;

        .surpresas {
          margin-left: 50px;
          width: 100vw;

          h1 {
            font-size: 40px;
          }

          p {
            width: 70vw;
            font-size: 16px;
          }
        }

         #business {
            width: 250px;
            margin-right: 100px;
            margin-left: 70px;
        }

      }
    
    }

    .localizacao {
      flex-direction: column;

      h1 {
        font-size: 20px;
      }

      #evora {
        margin-top: 0;
        font-size: 30px;
      }
    }
    

  }

  .localizacao {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 2000;
    cursor: pointer;

    #evora {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: white;
      opacity: 0.80;
      margin-top: 10vh;
      margin-right: 13vw;
      transition: all 0.2s $transitionEase;
      z-index: 2000;

      i {
        font-size: 60px;
        margin-bottom: 20px;
        margin-right: 10px;
        transition: all 0.2s $transitionEase;
      }

      h1 {
        text-transform: uppercase;
        font-size: 60px;
        font-weight: 400;
      }

      &:hover {
        cursor: pointer;
        opacity: 1;

        i {
          transform: translateY(-10px);
        }
        
      }
    }
  }

  .surpresas {
    color: #FFFFFF;
    margin-top: 20vh;
    margin-left: 12vw;
    padding-bottom: 15vh;

    h2 {
      font-size: 60px;
      font-weight: bold;
      text-transform: uppercase;
      margin: 0;
    }

    h1 {
      font-size: 200px;
      font-style: italic;
      font-weight: 300;
      text-transform: uppercase;
      margin: 0;
    }
  }

  .fastLinks ul {
    padding: 0;
    margin-bottom: 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    border: 2px solid red;

    li {
      padding: 80px;
      margin-top: 20px;
      margin-left: 5px;



      a {
        color: $darkerPrimaryColor;
      }
    }
  }
}
</style>
