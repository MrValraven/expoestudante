<template>
  <ScrollToTopButton />
  <NavbarMobile />
  <Navbar />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import NavbarMobile from "@/components/NavbarMobile.vue";
import ScrollToTopButton from "@/components/ScrollToTopButton.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: {
    Navbar,
    NavbarMobile,
    ScrollToTopButton,
    Footer,
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,300;1,700&display=swap");
@import url("https://use.fontawesome.com/releases/v5.15.2/css/all.css");

$Lilas-claro: #9ca2fd;
$Lilas: #7179f4;
$Azul-roxo: #596ff0;
$Azul-escuro: #0010ff;

#app {
  font-family: "Roboto", sans-serif;
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
  max-width: 100%;
  background-color: white;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #ffffff;
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
