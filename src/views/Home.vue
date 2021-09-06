<template>
  <Hero></Hero>
  <section class="future">
      <img id="futureBackground" src="@/assets/fundos/futuro.png" alt="">

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
          <svg id="arrows" height="70px" width="70px" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><g fill="#5153ff"><path d="m320 424a24 24 0 0 1 -16.971-40.971l127.03-127.029-127.03-127.029a24 24 0 0 1 33.942-33.942l144 144a24 24 0 0 1 0 33.942l-144 144a23.928 23.928 0 0 1 -16.971 7.029z"/><path d="m184 424a24 24 0 0 1 -16.971-40.971l127.03-127.029-127.03-127.029a24 24 0 0 1 33.942-33.942l144 144a24 24 0 0 1 0 33.942l-144 144a23.928 23.928 0 0 1 -16.971 7.029z"/><path d="m48 424a24 24 0 0 1 -16.971-40.971l127.03-127.029-127.03-127.029a24 24 0 0 1 33.942-33.942l144 144a24 24 0 0 1 0 33.942l-144 144a23.928 23.928 0 0 1 -16.971 7.029z"/></g></svg>
          <div id="text" class="text">
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
      
  </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Hero from '@/components/Hero.vue';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      
    }
  },
  components: {
    Hero,
  }
});
</script>

<style lang="scss" scoped>

$primaryColor: #5A68E0;
$darkerPrimaryColor: #7179F4;
$transitionEase: cubic-bezier(0.075, 0.82, 0.165, 1);

.future {
  position: relative;
  z-index: 0;
  padding-bottom: 200px;

  #futureBackground {
    position: absolute;
    z-index: -1;
    bottom: 0;
    width: 100%;
    overflow: hidden;
  }

   .datas {
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 6vw;
    margin-top: -14vh;
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
      padding-bottom: 0;
      padding-left: 125px;
    }

    div {
      display: flex;
      padding-left: 200px;
      padding-bottom: 0;
      margin-bottom: 50px;

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
        margin-top: 30px;
        margin-left: 20px;
        margin-right: 20px;
      }

      @media (max-width: 1700px) {
        #arrows {
          margin-top: 20px;
        }
      }

      .text {
        width: 50%;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        margin-top: -50px;
        padding-left: 0;
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

  .localizacao {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 2;
    margin-bottom: 80px;

    #evora {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: white;
      opacity: 0.8;
      margin-top: 10vh;
      margin-right: 13vw;
      transition: all 0.2s $transitionEase;
      z-index: 2;

      i {
        opacity: 0.6;
        font-size: 60px;
        margin-bottom: 20px;
        margin-right: 10px;
        transition: all 0.2s $transitionEase;
      }

      h1 {
        text-transform: uppercase;
        font-size: 60px;
        font-weight: 400;
        opacity: 1;
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
}

@media (max-width: 1700px) {

  #futureBackground {
    bottom: -35vh;
  }

  .future .datas {
     margin-top: -20vh;
     margin-bottom: -5vh;
     margin-left: 5vw;
  }

  #text {
    margin-top: -35px;
  }

  #arrows {
    margin-top: 20px;
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

@media (max-width: 1030px) {

  .hero {
    height: 50vh;

    img {
      width: 100%;
      height: auto;
    }
  }

  .future {

    #futureBackground {
      width: 100%;
      bottom: 0;
    }
    .datas {
      margin-top: 0;
      margin-left: 30px;
    }

    .mainText div .text p {
      font-size: 16px;
    }

    .localizacao #evora{
      margin-right: 80px;
    }
  }
}

@media (max-width: 500px) {

  .datas {
    justify-content: center;
    margin-top: -80px;
    margin-left: 0px;

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
      margin-bottom: 20px;
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
  }

  #futureBackground {
    bottom: 0vh;
  }

  .localizacao {
    margin-top: 50px;
    align-items: flex-end;
    margin-right: 20px;
    margin-bottom: 10px;

    #evora {
      margin: 0;

      i {
        font-size: 25px;
        margin-right: 2px;
        margin-bottom: 10px;
      }

      h1 {
        font-size: 18px;
      }
    }
  }
}

@media (max-width: 430px) {

  .hero {
    height: 100vh;

    img {
      height: 100vh;
    }
  }

  .future .datas {
    margin-top: -15vh;
    margin-left: 5px;
  }


  .future .localizacao {

    #evora {
      margin-bottom: 20px;
      margin-right: 20px;
    }
  }
}

@media (max-width: 375px) {

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
  

  .future .mainText div {
    margin-left: 50px
  }

  .future .localizacao {
    #evora {
      margin-bottom: 10px;
      margin-right: 20px;
    }
  }
}

@media (max-width: 325px) {
  .future {

    .datas {
      h1 hr {
        width: 40px;
      }
    }

    .mainText div h1 {
      font-size: 60px;
    }
  }

  .future .localizacao {
    margin-bottom: 0px;
    #evora {
      margin-bottom: -20px;
      margin-right: 15px;
    }
  }
}

</style>