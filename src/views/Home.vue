<template>

  <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
  <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
  <Navbar v-if="!mobileMode" class="navbar" />
  <div v-if="!activatedNavbar" class="pageContent">
    <section class="hero">
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
          <p>O teu futuro não é amanhã, é contruído hoje, por isso trazemos-te um summit único, pensado e programado especialmente a pensar em ti e no teu futuro. Durante os 6 dias poderás encontrar e criar oportunidades para o teu futuro. Vamos encurtar distância entre ti e as empresas. Vamos ajudar-te a dar este next step na tua carreira.</p>
        </div> 
      </div>

      <div class="localizacao">
        <a href="https://www.google.com/maps/place/Associa%C3%A7%C3%A3o+Acad%C3%A9mica+da+Universidade+de+%C3%89vora/@38.5711961,-7.908017,18z/data=!3m1!4b1!4m5!3m4!1s0xd19e56f2f19aec9:0xc41513d0faa3463b!8m2!3d38.5711961!4d-7.9069841" target="_blank" rel="noopenner" class="localizacaoLink">
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
        this.backgroundImage = this.mobileMode ? this.getImgURL("mobile/homepage.png") : this.getImgURL("backgrounds/backgroundHomepage.png");
        return `background-image: url(${this.backgroundImage})`;
      }
    },
});
</script>

<style lang="scss" scoped>

$primaryColor: #5A68E0;
$darkerPrimaryColor: #7179F4;
$transitionEase: cubic-bezier(0.075, 0.82, 0.165, 1);

.hero {
  position: relative;
  height: 70vh;
  width: 100%;
  z-index: -200;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: none;
  opacity: 1;
}

@media (max-width: 1015) {

  .hero {
    height: 100vh;
  }
}

.future {
  z-index: 10;
  background-position: center;
  background-size: cover;

  img {
    position: absolute;
    z-index: -15;
    top: 60vh;
    width: 100vw;
  }


  .datas {
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 3vw;
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
      font-size: 60px;
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
        font-size: 100px;
        color: $primaryColor;
        font-weight: 300;
        font-style: italic;
      }

      svg {
        transform: rotateZ(90deg);
        margin-top: 20px;
        margin-left: 20px;
        margin-right: 20px;
      }

      p {
        width: 50%;
        margin-top: 20px;
        color: #596FF0;
        font-weight: 300;
        font-style: italic;
      }
    }
  }

  .localizacao {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .localizacaoLink {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: #FFFFFF;
      opacity: 0.80;
      margin-top: 5vh;
      margin-right: 12vw;
      transition: all 0.2s $transitionEase;

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
        opacity: 1;

        i {
          transform: translateY(-10px);
        }
        
      }
    }
  }

  .surpresas {
    color: #FFFFFF;
    margin-top: 25vh;
    margin-left: 12vw;

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
