<template>

  <header class="header" >
    <nav id="nav">
      <svg class="bgImage" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1919.977 459.812">
          <defs>
            <clipPath id="clip-path">
              <rect y="55" width="1919.977" height="459.812" fill="none"/>
            </clipPath>
            <clipPath id="clip-path-2">
              <rect x="75" width="1919.977" height="541.812" fill="none"/>
            </clipPath>
            <filter id="Path_95" x="-75" y="-55" width="2069.977" height="541.812" filterUnits="userSpaceOnUse">
              <feOffset dy="20" input="SourceAlpha"/>
              <feGaussianBlur stdDeviation="25" result="blur"/>
              <feFlood flood-color="#0c1da7"/>
              <feComposite operator="in" in2="blur"/>
              <feComposite in="SourceGraphic"/>
            </filter>
          </defs>
          <g id="Group_234" data-name="Group 234" transform="translate(11965.767 12043.898)">
            <g id="Group_225" data-name="Group 225">
              <g id="Scroll_Group_95" data-name="Scroll Group 95" transform="translate(-11965.767 -12098.898)" clip-path="url(#clip-path)" style="isolation: isolate">
                <g id="Group_224" data-name="Group 224" transform="translate(11965.767 12098.898)">
                  <g id="Scroll_Group_59" data-name="Scroll Group 59" transform="translate(-12040.767 -12098.898)" clip-path="url(#clip-path-2)" style="isolation: isolate">
                    <g transform="matrix(1, 0, 0, 1, 75, 55)" filter="url(#Path_95)">
                      <path id="Path_95-2" data-name="Path 95" d="M0,193.229S695.9,181.7,928.747,251.644,1352,392.2,1551.233,391.81s368.744-140.165,368.744-140.165V0H0Z" fill="#fff"/>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      <ul class="languages">
        <li><router-link to="/">EN</router-link></li>
        <li class="activeLanguage" ><router-link id="pt" to="/">PT</router-link></li>
      </ul>
      <ul class="navLinks">
        <li>
          <svg id="inicio" width="25px" height="25px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 488a229.844 229.844 0 0 1 -141.467-48.108 233.557 233.557 0 0 1 -82.025-121.445 24 24 0 1 1 46.235-12.894 185.25 185.25 0 0 0 65.083 96.312 182.236 182.236 0 0 0 112.174 38.135c101.458 0 184-82.542 184-184s-82.542-184-184-184a182.241 182.241 0 0 0 -112.175 38.135 185.254 185.254 0 0 0 -65.082 96.312 24 24 0 1 1 -46.235-12.894 233.559 233.559 0 0 1 82.025-121.444 232.008 232.008 0 0 1 373.467 183.891 232 232 0 0 1 -232 232z" fill="#8690fa"/><path d="m56 224a24 24 0 0 1 -23.964-22.669l-8-144a24 24 0 1 1 47.924-2.662l6.32 113.761 106.941-31.454a24 24 0 1 1 13.543 46.048l-135.995 40a23.947 23.947 0 0 1 -6.769.976z" fill="#5153ff"/></svg>
          <router-link class="navLink" to="/">Home</router-link>
        </li>
        <li class="dropdown" @mouseover="hoveredSobre = true" @mouseleave="hoveredSobre = false" >
          <svg id="sobre" width="25px" height="25px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m208 232a23.928 23.928 0 0 1 -16.971-7.029l-160-160a24 24 0 0 1 33.942-33.942l160 160a24 24 0 0 1 -16.971 40.971z" fill="#8690fa"/><path d="m48 200a24 24 0 0 1 -24-24v-128a24 24 0 0 1 24-24h128a24 24 0 0 1 0 48h-104v104a24 24 0 0 1 -24 24z" fill="#5153ff"/><path d="m304 232a24 24 0 0 1 -16.971-40.971l160-160a24 24 0 0 1 33.942 33.942l-160 160a23.928 23.928 0 0 1 -16.971 7.029z" fill="#8690fa"/><path d="m464 200a24 24 0 0 1 -24-24v-104h-104a24 24 0 0 1 0-48h128a24 24 0 0 1 24 24v128a24 24 0 0 1 -24 24z" fill="#5153ff"/><path d="m48 488a24 24 0 0 1 -16.971-40.971l160-160a24 24 0 0 1 33.942 33.942l-160 160a23.928 23.928 0 0 1 -16.971 7.029z" fill="#8690fa"/><path d="m176 488h-128a24 24 0 0 1 -24-24v-128a24 24 0 0 1 48 0v104h104a24 24 0 0 1 0 48z" fill="#5153ff"/><path d="m464 488a23.928 23.928 0 0 1 -16.971-7.029l-160-160a24 24 0 0 1 33.942-33.942l160 160a24 24 0 0 1 -16.971 40.971z" fill="#8690fa"/><path d="m464 488h-128a24 24 0 0 1 0-48h104v-104a24 24 0 0 1 48 0v128a24 24 0 0 1 -24 24z" fill="#5153ff"/></svg>
          <a class="navLink">Sobre</a>
          <div class="subMenu" v-if="hoveredSobre">
            <router-link to="/sobre/onde">Onde</router-link>
            <router-link to="/sobre/porque">Porquê</router-link>
          </div>
        </li>
        <!-- <li class="dropdown" @mouseover="hoveredExpo = true" @mouseleave="hoveredExpo = false">
          <svg id="expo" width="25px" height="25px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m464 168h-416a24 24 0 0 1 0-48h416a24 24 0 0 1 0 48z" fill="#8690fa"/><path d="m336.02 264a24 24 0 0 1 -14.42-43.2l102.4-76.8-102.4-76.8a24 24 0 0 1 28.8-38.4l128 96a24 24 0 0 1 0 38.4l-128 96a23.893 23.893 0 0 1 -14.38 4.8z" fill="#5153ff"/><path d="m464 392h-416a24 24 0 0 1 0-48h416a24 24 0 0 1 0 48z" fill="#8690fa"/><path d="m175.98 488a23.884 23.884 0 0 1 -14.381-4.8l-128-96a24 24 0 0 1 0-38.4l128-96a24 24 0 1 1 28.8 38.4l-102.399 76.8 102.4 76.8a24 24 0 0 1 -14.42 43.2z" fill="#5153ff"/></svg>
          <a class="navLink">Expo'21</a>
          <div class="subMenu" v-if="hoveredExpo">
            <router-link to="/sobre/onde">Onde</router-link>
            <router-link to="/sobre/porque">Porquê</router-link>
          </div>
        </li>
        <li>
          <svg id="inscricoes" width="25px" height="25px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m56.013 224.006a24.019 24.019 0 0 1 -23.131-30.453 233.817 233.817 0 0 1 81.818-121.425 231.5 231.5 0 0 1 282.608 0 233.815 233.815 0 0 1 81.814 121.425 24 24 0 0 1 -46.236 12.894 185.51 185.51 0 0 0 -64.919-96.331 183.5 183.5 0 0 0 -223.925 0 185.505 185.505 0 0 0 -64.92 96.331 24.011 24.011 0 0 1 -23.109 17.559z" fill="#8690fa"/><path d="m56 224a24 24 0 0 1 -23.964-22.669l-8-144a24 24 0 1 1 47.924-2.662l6.32 113.761 106.941-31.454a24 24 0 1 1 13.543 46.048l-135.995 40a23.947 23.947 0 0 1 -6.769.976z" fill="#5153ff"/><path d="m248 488a229.152 229.152 0 0 1 -141.3-48.128 233.817 233.817 0 0 1 -81.818-121.425 24 24 0 1 1 46.236-12.894 185.505 185.505 0 0 0 64.92 96.331 183.5 183.5 0 0 0 223.925 0 185.51 185.51 0 0 0 64.919-96.331 24 24 0 0 1 46.236 12.894 233.815 233.815 0 0 1 -81.818 121.425 229.152 229.152 0 0 1 -141.3 48.128z" fill="#8690fa"/><path d="m455.979 480a24 24 0 0 1 -23.941-22.67l-6.32-113.76-106.941 31.454a24 24 0 0 1 -13.544-46.049l136-40a24 24 0 0 1 30.735 21.693l8 144a24 24 0 0 1 -22.631 25.294q-.686.038-1.358.038z" fill="#5153ff"/></svg>
          <router-link class="navLink" :to="{ name: 'Inscricoes' }">Inscricoes</router-link>
        </li>
        <li>
          <svg id="oradores" width="25px" height="25px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m352 280h-304a24 24 0 0 1 0-48h304a24 24 0 0 1 0 48z" fill="#8690fa"/><path d="m224.019 376a24 24 0 0 1 -14.419-43.2l102.4-76.8-102.4-76.8a24 24 0 0 1 28.8-38.4l128 96a24 24 0 0 1 0 38.4l-128 96a23.893 23.893 0 0 1 -14.381 4.8z" fill="#5153ff"/><path d="m464 488h-352a24 24 0 0 1 -24-24v-96a24 24 0 0 1 48 0v72h304v-368h-304v72a24 24 0 0 1 -48 0v-96a24 24 0 0 1 24-24h352a24 24 0 0 1 24 24v416a24 24 0 0 1 -24 24z" fill="#8690fa"/></svg>
          <router-link class="navLink" :to="{ name: 'Oradores' }">Oradores</router-link>
        </li> -->
        <li>
          <svg id="contatos" width="25px" height="25px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m304 232a24 24 0 0 1 -16.971-40.971l160-160a24 24 0 0 1 33.942 33.942l-160 160a23.928 23.928 0 0 1 -16.971 7.029z" fill="#8690fa"/><path d="m432 232h-128a24 24 0 0 1 -24-24v-128a24 24 0 0 1 48 0v104h104a24 24 0 0 1 0 48z" fill="#5153ff"/><path d="m208 232a23.928 23.928 0 0 1 -16.971-7.029l-160-160a24 24 0 0 1 33.942-33.942l160 160a24 24 0 0 1 -16.971 40.971z" fill="#8690fa"/><path d="m208 232h-128a24 24 0 0 1 0-48h104v-104a24 24 0 0 1 48 0v128a24 24 0 0 1 -24 24z" fill="#5153ff"/><path d="m464 488a23.928 23.928 0 0 1 -16.971-7.029l-160-160a24 24 0 0 1 33.942-33.942l160 160a24 24 0 0 1 -16.971 40.971z" fill="#8690fa"/><path d="m304 456a24 24 0 0 1 -24-24v-128a24 24 0 0 1 24-24h128a24 24 0 0 1 0 48h-104v104a24 24 0 0 1 -24 24z" fill="#5153ff"/><path d="m48 488a24 24 0 0 1 -16.971-40.971l160-160a24 24 0 0 1 33.942 33.942l-160 160a23.928 23.928 0 0 1 -16.971 7.029z" fill="#8690fa"/><path d="m208 456a24 24 0 0 1 -24-24v-104h-104a24 24 0 0 1 0-48h128a24 24 0 0 1 24 24v128a24 24 0 0 1 -24 24z" fill="#5153ff"/></svg>
          <router-link class="navLink" :to="{ name: 'Contactos' }">Contactos</router-link>
        </li>
      </ul>
	  </nav>
  </header>
    
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Navbar',
  data() {
    return {
      hoveredSobre: false,
      hoveredExpo: false,
      backgroundImage: "",
    }
  },
  methods: {
    getImgURL(image: String) {
        return require('../assets/' + image);
    },
  },
  computed: {
      style () :String {
        this.backgroundImage = this.getImgURL("navbar.svg");
        return `background-image: url(${this.backgroundImage})`;
      }
  },
});
</script>

<style lang="scss">

$fontSize: 20px;
$textColor: #7179F4;
$underlineColor: #596FF0;

.header {
  position: relative;
	z-index: 1000;
	width: 100%;
	opacity: 1;
	color: #fff;
  
  #nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    z-index: 1000;

    .bgImage {
      position: absolute;
      top: -8vh;
      width: 100%;
      height: 50vh;
      z-index: -1000;
    }

    .activeLanguage {

      a {
        font-size: $fontSize;
        color: $textColor;
        opacity: 1;
      }

      #pt {
        padding: 0px 0px 0px 5px;
        border-left: 3px solid $textColor;
      }

    }

    .languages {
      display: flex;
      justify-content: center;
      align-items: center;

      li a{
        padding: 5px;
      }

    }

    .navLinks {
      display: flex;
      justify-content: space-around;

      li {
        padding: 20px;
        font-size: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .subMenu {
          background: none !important;

          a {
            background: transparent;
            color: $textColor;
            font-size: $fontSize;
            font-weight: bold;
            opacity: 0;
            transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);

            &.router-link-exact-active {
              border-bottom: 2px solid $underlineColor;
            }
          }
        }

        .navLink {
          color: $textColor;
          font-size: $fontSize;
          font-weight: bold;

          &.router-link-exact-active {
            border-bottom: 2px solid $underlineColor;
          }
        }  
      }

      .dropdown:hover {

        .subMenu {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-color: white;
          padding: 0px 20px 20px 20px;
          top: calc(100% - 20px);
          width: max-content;
          border-radius: 0px 0px 16px 16px;

          a {
            padding: 10px;
            color: $textColor;
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>