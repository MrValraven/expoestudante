<template>
  <ScrollToTopButton />
  <NavbarMobile v-if="mobileMode" />
  <Navbar v-if="!mobileMode"/>
  <router-view/>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';
import NavbarMobile from '@/components/NavbarMobile.vue';
import ScrollToTopButton from '@/components/ScrollToTopButton.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  data() {
    return {
      activatedNavbar: false,
      mobileMode: false,
      backgroundImage: '',
      smallMobileMode: false,
      tabletMode: false,
    }
  },
  components: {
    Navbar,
    NavbarMobile,
    ScrollToTopButton,
    Footer,
  },
  
});
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,300;1,700&display=swap');
@import url("https://use.fontawesome.com/releases/v5.15.2/css/all.css");

$Lilás-claro: #9CA2FD;
$Lilás: #7179F4;
$Azul-roxo: #596FF0;
$Azul-escuro: #0010FF;



#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100vw;
  cursor: default;
  overflow-x: hidden;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100vw;

   &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #FFFFFF;
  }
  &::-webkit-scrollbar-thumb {
    background-color: $Azul-roxo;
    border-radius: 5px;
  }
}

a {
  text-decoration: none;
}

ul,
li {
  list-style: none;
}



</style>
