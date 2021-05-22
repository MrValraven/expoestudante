<template>

  <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
  <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
  <Navbar v-if="!mobileMode" class="navbar" />
  <div v-if="!activatedNavbar" class="pageContent">
    <section class="hero">
      <h1>EXPO ESTUDANTE</h1>
    </section>
    <section class="future" style='background: url("@/assets/backgrounds/backgroundHomepage.png");'>
      <img src="@/assets/backgrounds/backgroundHomepage.png" alt="">
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
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, quas! Pariatur obcaecati quibusdam minima illum placeat quis ex illo corrupti numquam provident. Ea repudiandae nemo id? Quaerat officiis reiciendis reprehenderit sapiente alias tenetur, itaque neque, ad at molestias accusamus laudantium voluptates architecto facilis nulla nam delectus corrupti saepe sequi quod iste autem. Tenetur pariatur distinctio inventore voluptatem beatae modi cum.</p>
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
     
      <div class="fastLinks">
        <ul>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 600 315.375">
              <g class="cls-2">
                <path id="Caminho_109-2" data-name="Caminho 109" class="cls-1" d="M289.106,1104.441S182.77,938.815,89.023,939.066s-173.507,90.608-248.338,165.374Z" transform="translate(214.31 -864.07)"/>
              </g>
            </svg>
            <router-link to="/">Programa</router-link>
          </li>
          <li>
             <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 598.421 315.375">
              <g class="cls-2" transform="matrix(1, 0, 0, 1, 0, 0)">
                <path id="Caminho_109-2" data-name="Caminho 109" class="cls-1" d="M289.106,1104.441S182.77,938.815,89.023,939.066s-173.507,90.608-248.338,165.374Z" transform="translate(214.31 -864.07)"/>
              </g>
            </svg>
            <router-link to="/">Inscrições</router-link></li>
          <li>
             <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 598.421 315.375">
              <g class="cls-2" transform="matrix(1, 0, 0, 1, 0, 0)">
                <path id="Caminho_109-2" data-name="Caminho 109" class="cls-1" d="M289.106,1104.441S182.77,938.815,89.023,939.066s-173.507,90.608-248.338,165.374Z" transform="translate(214.31 -864.07)"/>
              </g>
            </svg>
            <router-link to="/">Acreditações</router-link></li>
          <li>
             <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 598.421 315.375">
              <g class="cls-2" transform="matrix(1, 0, 0, 1, 0, 0)">
                <path id="Caminho_109-2" data-name="Caminho 109" class="cls-1" d="M289.106,1104.441S182.77,938.815,89.023,939.066s-173.507,90.608-248.338,165.374Z" transform="translate(214.31 -864.07)"/>
              </g>
            </svg>
            <router-link to="/">Contatos</router-link></li>
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
});
</script>

<style lang="scss" scoped>

$primaryColor: #5A68E0;
$darkerPrimaryColor: #7179F4;
$transitionEase: cubic-bezier(0.075, 0.82, 0.165, 1);


.hero {
  height: 60vh;
  width: 100%;
  z-index: -20;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

.future {
  overflow: none;
  
  img {
    position: absolute;
    top: 50vh;
    max-width: 100vw;
    z-index: -15;
  }

  .datas {
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 5vw;
    color: $primaryColor;

    h2 {
      font-size: 56px;
      font-weight: 300;
      font-style: italic;
    }

    h1 {
      display: flex;
      align-items: center;
      margin: 0px 20px 0px 20px;
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
    margin-top: 5vh;

    .localizacaoLink {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: #FFFFFF;
      opacity: 0.80;
      margin-right: 150px;
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

    li {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      padding: 100px;

      svg {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 600px;
        height: 310px;
        fill: #FFFFFF;
        stroke: #000;
        z-index: -10;
      }

      a {
        color: $darkerPrimaryColor;
      }
    }
  }
}

</style>
