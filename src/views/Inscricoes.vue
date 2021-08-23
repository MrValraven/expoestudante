<template>
    <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
    <NavbarMobile v-if="mobileMode" @activatedNavbar="activateNavbar()" />
    <Navbar v-if="!mobileMode" class="navbar" />
    <section class="hero">
      <video autoplay muted loop id="backgroundVideo">
        <source src="@/assets/fundoAnimado.mp4" type="video/mp4">
      </video>
      <img src="@/assets/backgrounds/contactos.png" alt=""> 
      <div class="inscricoes">
        <h1>Inscrições</h1>
        <svg  v-if="mobileMode" id="arrows" height="50px" width="50px" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><g fill="#5153ff"><path d="m320 424a24 24 0 0 1 -16.971-40.971l127.03-127.029-127.03-127.029a24 24 0 0 1 33.942-33.942l144 144a24 24 0 0 1 0 33.942l-144 144a23.928 23.928 0 0 1 -16.971 7.029z"/><path d="m184 424a24 24 0 0 1 -16.971-40.971l127.03-127.029-127.03-127.029a24 24 0 0 1 33.942-33.942l144 144a24 24 0 0 1 0 33.942l-144 144a23.928 23.928 0 0 1 -16.971 7.029z"/><path d="m48 424a24 24 0 0 1 -16.971-40.971l127.03-127.029-127.03-127.029a24 24 0 0 1 33.942-33.942l144 144a24 24 0 0 1 0 33.942l-144 144a23.928 23.928 0 0 1 -16.971 7.029z"/></g></svg>
      </div>
    </section>
    <section>
        <div class="card">
            <h1>Aluno</h1>
            <BlobButton mensagem="Selecionar" />
        </div>
    </section>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import NavbarMobile from '../components/NavbarMobile.vue';
import ScrollToTopButton from '../components/ScrollToTopButton.vue';
import BlobButton from '../components/BlobButton.vue';

export default {
    name: 'Inscricoes',
    components: {
        ScrollToTopButton,
        Navbar,
        NavbarMobile,
        BlobButton,
    }
        
}
</script>

<style lang="scss" scoped>
$textColor: #7179F4;

.hero {
  z-index: -15;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: flex-end;

  #backgroundVideo {
    position: absolute;
    z-index: -300;
    top: -15vh;
    max-width: 99.5vw;
    overflow: hidden;
  }

  img {
    position: absolute;
    bottom: -35vh;
    z-index: -200;
    max-width: 99.5vw
  }

  .inscricoes {
      margin-bottom: 10vh;
      margin-left: 10vw;

      h1 {
        font-size: 50px;
        color: $textColor;
        font-weight: 800;
        text-transform: uppercase;
        margin-bottom: 0;
      }
  }

}

</style>