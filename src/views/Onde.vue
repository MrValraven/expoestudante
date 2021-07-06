<template>

  <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
  <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
  <Navbar v-if="!mobileMode" class="navbar" />
  <div v-if="!activatedNavbar" class="pageContent">
    <section class="hero">
      <img src="@/assets/onde.png" alt="" v-if="!mobileMode" >
      <h2>Onde</h2>
      <h1>Vai ser a expo?</h1>
      <div class="info">
         <i class="fas fa-map-marker-alt" v-if="!mobileMode"></i>
         <div class="infoText">
           <h1 id="googleMaps">Aqui no google maps</h1>
           <div class="locais">
             <div class="locaisCont">
               <i class="fas fa-map-marker-alt" v-if="mobileMode"></i>
              <ul v-if="selectedBox == 'ces'">
                <li>Colégio Espírito Santo</li>
                <li>R. do Cardeal Rei 6</li>
                <li>7000-645 Évora</li>
              </ul>
              <ul v-if="selectedBox == 'arena'">
                <li>Arena de Évora</li>
                <li>Av. Gen. Humberto Delgado</li>
                <li>7005-158 Évora</li>
              </ul>
             </div>
            <div class="palcos">
              <ul>
                <li id="palcoli" :class="{selected: selectedBox == 'arena'}" @click="updateSelection()">
                    <svg id="palco" height="50px" width="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 216a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z"/><path d="m320 136a23.926 23.926 0 0 1 -16.971-7.029l-47.029-47.03-47.029 47.03a24 24 0 0 1 -33.942-33.942l64-64a24 24 0 0 1 33.942 0l64 64a24 24 0 0 1 -16.971 40.971z" fill="#5153ff"/><path d="m256 488a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z"/><path d="m256 488a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 33.942-33.942l47.029 47.03 47.029-47.03a24 24 0 0 1 33.942 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#5153ff"/><path d="m464 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#5153ff"/><path d="m192 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z" fill="#5153ff"/></svg>
                    <p>Arena de Évora</p>
                </li>
                <li id="palcoli" :class="{selected: selectedBox == 'ces'}" @click="updateSelection()">
                    <svg id="palco" height="50px" width="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 216a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z"/><path d="m320 136a23.926 23.926 0 0 1 -16.971-7.029l-47.029-47.03-47.029 47.03a24 24 0 0 1 -33.942-33.942l64-64a24 24 0 0 1 33.942 0l64 64a24 24 0 0 1 -16.971 40.971z" fill="#5153ff"/><path d="m256 488a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z"/><path d="m256 488a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 33.942-33.942l47.029 47.03 47.029-47.03a24 24 0 0 1 33.942 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#5153ff"/><path d="m464 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#5153ff"/><path d="m192 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z" fill="#5153ff"/></svg>
                    <p>CES</p>
                </li>
              </ul>
            </div>
          </div>
         </div>
      </div>
      <div class="travel">
         <h1>Como chegar lá?</h1>
         <img  v-if="mobileMode" src="@/assets/mobile/porque.png" alt="">
        <ul class="meios">
          <li><a @click="meioDeTransporte = getTitulo(0); primeiroParagrafo = getPrimeiroParagrafo(0); segundoParagrafo = getSegundoParagrafo(0);"  >De carro</a></li>
          <li><a @click="meioDeTransporte = getTitulo(1); primeiroParagrafo = getPrimeiroParagrafo(1); segundoParagrafo = getSegundoParagrafo(1);"  >De autocarro</a></li>
          <li><a @click="meioDeTransporte = getTitulo(2); primeiroParagrafo = getPrimeiroParagrafo(2); segundoParagrafo = getSegundoParagrafo(2);"  >De comboio</a></li>
          <li><a @click="meioDeTransporte = getTitulo(3); primeiroParagrafo = getPrimeiroParagrafo(3); segundoParagrafo = getSegundoParagrafo(3);"  >A pé</a></li>
        </ul>
      </div>
    </section>
    <section class="transportes">
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
      selectedBox: "arena",
      meioDeTransporte: "",
      primeiroParagrafo: "",
      segundoParagrafo: "",
      arena: {
        transportes: [
          {titulo: "Rodoviária de Évora - Arena de Évora | A pé: (aprox. 10 minutos):" , primeiroParagrafo: "Siga para sudeste, em direção à Av. Túlio Espanca/N114 e vire à esquerda. Na rotunda, saia pela 2ª saída. Depois vire à esquerda em direção à Av. Gen. Humberto Delgado e seguidamente vire à direita e encontrará a Arena de Évora  (Av. Gen. Humberto Delgado, 7005-158 Évora).", segundoParagrafo: ""},
          {titulo: "Rodoviária de Évora - Arena de Évora | De carro: (aprox. 5 minutos): " , primeiroParagrafo: "Saia da rodoviária pela 3ª saída da rotunda, para a  Av. São Sebastião. Na rotunda seguinte saia na 2ª saída para a Av. Túlio Espanca/ N114). Seguidamente saia na 1ª saída da seguinte rotunda e siga pela Av. Dinis Miranda/ IP2 em direção à Av. Fundação Calouste Gulbenkian.", segundoParagrafo: " Para tal terá de sair na rotunda pela 3ª saída. Por último vire à esquerda e encontrará a Arena de Évora (Av. Gen. Humberto Delgado, 7005-158 Évora)."},
          {titulo: "Estação de comboios - Arena de Évora | A pé: (aprox. 15 minutos):" , primeiroParagrafo: "Siga na rotunda pela Av. Dr. Francisco Barahona, depois vire à direita em direção à Av. Gen.Humberto Delgado. Nas próximas 2 bifurcações vire à esquerda e chegará à Arena de Évora (Av. Gen. Humberto Delgado, 7005-158 Évora).", segundoParagrafo: ""},
          {titulo: "Estação de comboios - Arena de Évora | De carro (aprox. 3 minutos): " , primeiroParagrafo: "Siga para norte, para a rotunda e saia na 1ª saída, em direção à Av. Combatentes da Grande Guerra. Na Av. Combatentes da Grande Guerra vire à esquerda para a Av. Gen. Humberto Delgado, volte a virar à esquerda e encontrará a Arena de Évora Évora (Av. Gen. Humberto Delgado, 7005-158 Évora).", segundoParagrafo: ""},
        ],
      },
      ces: {
        transportes: [
          {titulo: "Rodoviária de Évora - Colégio Espírito Santo | De carro (aprox. 7 minutos): " , primeiroParagrafo: "Saia da rodoviária pela 3ª saída da rotunda, para a  Av. São Sebastião. Na rotunda seguinte saia na 2ª saída para a Av. Túlio Espanca/ N114). Na seguinte rotunda saia na 3ª saída para a Av. Dom Nuno Álvares Pereira/IP2. Seguidamente saia na 1ª saída da próxima rotunda. Nas próximas duas rotundas saia na 2ª saída. Siga pela Av. Dom Manuel Trindade Salgueiro/ IP2, na rotunda saia na 1ª saída para a R. de José Estevão Cordovil.", segundoParagrafo: "Posteriormente vire à esquerda em direção ao Largo dos Colegiais e depois vire outra vez à esquerda para a R. do Cardeal Rei, o Colégio Espírito Santo encontra-se à esquerda (R. do Cardeal Rei 6, 7000-645 Évora)."},
          {titulo: "Rodoviária de Évora - Colégio Espírito Santo | A pé (aprox. 24 minutos): " , primeiroParagrafo: "Ao sair da rodoviária siga em direção à Av. De São Sebastião e continue pela Rua Serpa Pinto até chegar à Praça do Giraldo. Na praça do Giraldo siga pela R. da República e vire à esquerda na R. Miguel Bombarda. Ao passar pela pousada da juventude vai encontrar uma bifurcação, pode seguir por qualquer uma das ruas pois ambas vão dar à Rotunda Quadrada. Na Rotunda Quadrada, siga pela 3ª saída, no final da rua vire à direita e irá encontra uma pequena rotunda, siga pela segunda saída e irá encontrar o Colégio Espírito Santo à sua esquerda.", segundoParagrafo: ""},
          {titulo: "Estação de Comboios - Colégio Espírito Santo | De carro (aprox. 8 minutos): " , primeiroParagrafo: "Siga em direção à rotunda e saia na 1ª saída em direção à Av. Combatentes da Grande Guerra. Vire à direita em direção à Av. Dinis Miranda/ IP2 e ao chegar à rotunda saia na 2ª saída em direção à R. Dr. António José de Almeida/ N18/N254. Nas próximas três rotundas saia na 2ª saída e irá chegar à Av. São João de Deus. Ao chegar ao final da rua irá encontrar uma outra rotunda perto de um posto de abastecimento BP e do Pingo Doce, saia na 4ª saída dessa rotunda pela Av. da Universidade/ N18.", segundoParagrafo: "Ao chegar à próxima rotunda pode sair na 1ª saída e estacionar no parque de estacionamento à sua direita e posteriormente ir até ao Colégio Espírito Santo a pé que são cerca de 2 minutos de distância, ou pode na sair na 3ª saída da rotunda e estacionar no parque dentro da universidade. Para tal ao sair na 3ª saída da rotunda suba a R. José Estevão Cordovil e quando chegar ao cimo da subida vire à esquerda em direção ao Largo dos Colegiais. Ao chegar ao final desta rua vire à esquerda em direção à R. do Cardeal Rei, o Colégio Espírito Santo encontra-se à sua esquerda. (Rua do Cardeal Rei 6, 7000-645 Évora)"},
          {titulo: "Estação de Comboios - Colégio Espírito Santo | A pé (aprox. 23 minutos): " , primeiroParagrafo: "Siga em direção à rotunda e saia na 1ª saída pela Av. Combatentes da Grande Guerra. Quando chegar ao final da rua siga pela Av. Fundação Calouste Gulbenkian e seguidamente pela R. da Rampa que se encontra à esquerda. Continue pela Tv. Peras e seguidamente vire à direita em direção à R. Miguel Bombarda. Ao chegar ao final da rua encontrará a Rotunda Quadrada, saia na 3ª saída da rotunda e siga em direção ao Largo dos Colegiais e, posteriormente, vire à esquerda em direção à r. do Cardeal Rei, o Colégio Espírito Santo encontra-se à sua esquerda. (Rua do Cardeal Rei 6, 7000-645 Évora).", segundoParagrafo: ""},
        ],
      },
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
    this.meioDeTransporte = this.arena.transportes[0].titulo;
    this.primeiroParagrafo = this.arena.transportes[0].primeiroParagrafo;
    this.segundoParagrafo = this.arena.transportes[0].segundoParagrafo;
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

    handleScroll() {
      window.pageYOffset >= 250 ? this.isAtTop = false : this.isAtTop = true;

    },

    handleResize() {
      this.mobileMode = window.innerWidth <= 1015;
      if(!this.mobileMode) {
        this.activatedNavbar = false;
      }
    },
    getPrimeiroParagrafo(option: number) {
      if(this.selectedBox == 'arena') {
        switch (option) {
          case 0:
            return this.arena.transportes[0].primeiroParagrafo;
          case 1:
            return this.arena.transportes[1].primeiroParagrafo;
          case 2:
            return this.arena.transportes[2].primeiroParagrafo;
          case 3:
            return this.arena.transportes[3].primeiroParagrafo;
        
          default: 
            return null;
        }
      }

      else {
         switch (option) {
          case 0:
            return this.ces.transportes[0].primeiroParagrafo;
          case 1:
            return this.ces.transportes[1].primeiroParagrafo;
          case 2:
            return this.ces.transportes[2].primeiroParagrafo;
          case 3:
            return this.ces.transportes[3].primeiroParagrafo;
        
          default: 
            return null;
        }
      }
    },
    getSegundoParagrafo(option: number) {
      if(this.selectedBox == 'arena') {
        switch (option) {
          case 0:
            return this.arena.transportes[0].segundoParagrafo;
          case 1:
            return this.arena.transportes[1].segundoParagrafo;
          case 2:
            return this.arena.transportes[2].segundoParagrafo;
          case 3:
            return this.arena.transportes[3].segundoParagrafo;
        
          default: 
            return null;
        }
      }

      else {
         switch (option) {
          case 0:
            return this.ces.transportes[0].segundoParagrafo;
          case 1:
            return this.ces.transportes[1].segundoParagrafo;
          case 2:
            return this.ces.transportes[2].segundoParagrafo;
          case 3:
            return this.ces.transportes[3].segundoParagrafo;
        
          default: 
            return null;
        }
    }
  },
  getTitulo(option: number) {
      if(this.selectedBox == 'arena') {
        switch (option) {
          case 0:
            return this.arena.transportes[0].titulo;
          case 1:
            return this.arena.transportes[1].titulo;
          case 2:
            return this.arena.transportes[2].titulo;
          case 3:
            return this.arena.transportes[3].titulo;
        
          default: 
            return null;
        }
      }

      else {
         switch (option) {
          case 0:
            return this.ces.transportes[0].titulo;
          case 1:
            return this.ces.transportes[1].titulo;
          case 2:
            return this.ces.transportes[2].titulo;
          case 3:
            return this.ces.transportes[3].titulo;
        
          default: 
            return null;
        }
      }
    },
  updateSelection() {
    if(this.selectedBox == 'arena') {
      this.selectedBox = 'ces';
      this.meioDeTransporte = this.ces.transportes[0].titulo;
      this.primeiroParagrafo = this.ces.transportes[0].primeiroParagrafo;
      this.segundoParagrafo = this.ces.transportes[0].segundoParagrafo;
    }

    else {
      this.selectedBox = 'arena';
      this.meioDeTransporte = this.arena.transportes[0].titulo;
      this.primeiroParagrafo = this.arena.transportes[0].primeiroParagrafo;
      this.segundoParagrafo = this.arena.transportes[0].segundoParagrafo;
    }
    }
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
  z-index: 200;
  position: relative;
  display: flex;
  margin-top: 25vh;
  justify-content: center;
  flex-direction: column;

  img {
    position: absolute;
    z-index: -15;
    top: -25vh;
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
          padding: 0;
          margin-left: 0;

          li {
            width: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 50px 0 0;
            border-radius: 50px;
            border: 1px solid $blueTextColor;
            transition: all 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);

            &:hover {
              cursor: pointer;
            }

            svg {
              margin-right: 5px;
              fill: #8690fa;
            }
          }

          .selected {
            background-color: $headerTextColor;
            color: white;
            cursor: pointer;

            #palco {
              fill: #FFFFFF;
            }
          }
        }
      }

      
    }
  }
} 

@media screen and (max-width: 1600px){
  .hero {
    img {
      top: -18vh;
    }
  }

  .travel {

    .meios {
      margin-top: 31vh;

      li {
        margin-left: 20px;

        &:last-child {
          margin-left: 30px;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .hero {
    height: auto;
    margin-top: 5vh;

    h1 {
      margin-left: 35px;
      font-size: 40px;
      margin-bottom: 50px;
    }

    h2 {
      font-size: 25px;
      margin-top: 50px;
      margin-left: 20px;
    }

    .info .fa-map-marker-alt {
      height: 100px;
      margin-left: 10px;
      margin-right: 50px;
      width: 10%;

    }

    .info .infoText .locais {
      flex-direction: column;
      justify-content: normal;

      .locaisCont {
        display: flex;
        justify-content: center;
        align-items: center;

        ul {
          padding-left: 10px;
          width: 70%;
        }
      }

      ul li {
        font-size: 12px;
      }

      .palcos {
        width: 100vw;
        margin-top: 20px;

        ul {
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;

          #palcoli {
            margin-bottom: 30px;
            margin-left: 15px;
          }
        }
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
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      font-weight: 600;
      width: 200px;
    }

    #googleMaps {
      margin-left: 33vw;
    }
  
  .travel {
    img {
      max-width: 100vw;
      z-index: -30000;
      height: auto;
      top: 75vh;
    }
  }
}

.travel {
  margin-top: 10vh;
  z-index: 100;

  h1 {
    display: flex;
    justify-content: flex-end;
    font-size: 45px;
    font-weight: bold;
    color: white;
    margin-right: 10vw;
  }

  ul {
    margin-top: 38vh;
    background-color: transparent;
    display: flex;

    li {
      width: 150px;
      padding: 5px;
      margin-left: 70px;
      margin-right: 30px;
      color: $headerTextColor;
      font-weight: 900;
      text-align: center;

      &:last-child {
        margin-left: 100px;
      }


      a {
        min-width: 100%;
        cursor: pointer;
        opacity: 0.75;
        font-size: 20px;
      }
    }

    a:hover {
      
      opacity: 1;
    }
  }
}

.transportes {
  margin-top: 10vh;
}
</style>