<template>
    <nav class="mobileNav">
        <img class="bgImage" src="@/assets/mobile/navbar.png" alt="">
        <transition-group
        v-if="isActive && after29" 
        appear
        tag="ul"
        @before-enter="beforeEnter"
        @enter="enter" 
        class="navLinks" 
        :class="isActive"
        >
            <li v-for="(navlink, index) in navLinks" :key="navlink.id" :data-index="index"><router-link :to="{ name: navlink.routeName }"> {{ navlink.routeText }}</router-link></li>
            <li class="dropdown" @click="openSobre = !openSobre">
                <svg id="sobre" width="25px" height="25px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m208 232a23.928 23.928 0 0 1 -16.971-7.029l-160-160a24 24 0 0 1 33.942-33.942l160 160a24 24 0 0 1 -16.971 40.971z" :fill="whiteSvg"/><path d="m48 200a24 24 0 0 1 -24-24v-128a24 24 0 0 1 24-24h128a24 24 0 0 1 0 48h-104v104a24 24 0 0 1 -24 24z" :fill="darkerWhiteSvg"/><path d="m304 232a24 24 0 0 1 -16.971-40.971l160-160a24 24 0 0 1 33.942 33.942l-160 160a23.928 23.928 0 0 1 -16.971 7.029z" :fill="whiteSvg"/><path d="m464 200a24 24 0 0 1 -24-24v-104h-104a24 24 0 0 1 0-48h128a24 24 0 0 1 24 24v128a24 24 0 0 1 -24 24z" :fill="darkerWhiteSvg"/><path d="m48 488a24 24 0 0 1 -16.971-40.971l160-160a24 24 0 0 1 33.942 33.942l-160 160a23.928 23.928 0 0 1 -16.971 7.029z" :fill="whiteSvg"/><path d="m176 488h-128a24 24 0 0 1 -24-24v-128a24 24 0 0 1 48 0v104h104a24 24 0 0 1 0 48z" :fill="darkerWhiteSvg"/><path d="m464 488a23.928 23.928 0 0 1 -16.971-7.029l-160-160a24 24 0 0 1 33.942-33.942l160 160a24 24 0 0 1 -16.971 40.971z" :fill="whiteSvg"/><path d="m464 488h-128a24 24 0 0 1 0-48h104v-104a24 24 0 0 1 48 0v128a24 24 0 0 1 -24 24z" :fill="darkerWhiteSvg"/></svg>
                <a class="navLink">Sobre <i class="fas fa-chevron-down" :class="{activated: openSobre}"></i></a>
                <div class="subMenu" v-if="openSobre">
                    <router-link to="/sobre/onde">Onde</router-link>
                    <router-link to="/sobre/porque">Porquê</router-link>
                </div>
            </li>
        </transition-group>

        <ul
        v-if="isActive" 
        class="navLinks" 
        :class="isActive"
        >
            <li class="navlink">
                <svg id="Flat" :height="iconSize" viewBox="0 0 512 512" :width="iconSize" xmlns="http://www.w3.org/2000/svg"><path d="m256 488a229.844 229.844 0 0 1 -141.467-48.108 233.557 233.557 0 0 1 -82.025-121.445 24 24 0 1 1 46.235-12.894 185.25 185.25 0 0 0 65.083 96.312 182.236 182.236 0 0 0 112.174 38.135c101.458 0 184-82.542 184-184s-82.542-184-184-184a182.241 182.241 0 0 0 -112.175 38.135 185.254 185.254 0 0 0 -65.082 96.312 24 24 0 1 1 -46.235-12.894 233.559 233.559 0 0 1 82.025-121.444 232.008 232.008 0 0 1 373.467 183.891 232 232 0 0 1 -232 232z" :fill="whiteSvg"/><path d="m56 224a24 24 0 0 1 -23.964-22.669l-8-144a24 24 0 1 1 47.924-2.662l6.32 113.761 106.941-31.454a24 24 0 1 1 13.543 46.048l-135.995 40a23.947 23.947 0 0 1 -6.769.976z" :fill="darkerWhiteSvg"/></svg>
                <router-link to="/">Início</router-link>
            </li>
            <li class="dropdown" @click="openSobre = !openSobre">
                <svg id="sobre" :width="iconSize" :height="iconSize" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m208 232a23.928 23.928 0 0 1 -16.971-7.029l-160-160a24 24 0 0 1 33.942-33.942l160 160a24 24 0 0 1 -16.971 40.971z" :fill="whiteSvg"/><path d="m48 200a24 24 0 0 1 -24-24v-128a24 24 0 0 1 24-24h128a24 24 0 0 1 0 48h-104v104a24 24 0 0 1 -24 24z" :fill="darkerWhiteSvg"/><path d="m304 232a24 24 0 0 1 -16.971-40.971l160-160a24 24 0 0 1 33.942 33.942l-160 160a23.928 23.928 0 0 1 -16.971 7.029z" :fill="whiteSvg"/><path d="m464 200a24 24 0 0 1 -24-24v-104h-104a24 24 0 0 1 0-48h128a24 24 0 0 1 24 24v128a24 24 0 0 1 -24 24z" :fill="darkerWhiteSvg"/><path d="m48 488a24 24 0 0 1 -16.971-40.971l160-160a24 24 0 0 1 33.942 33.942l-160 160a23.928 23.928 0 0 1 -16.971 7.029z" :fill="whiteSvg"/><path d="m176 488h-128a24 24 0 0 1 -24-24v-128a24 24 0 0 1 48 0v104h104a24 24 0 0 1 0 48z" :fill="darkerWhiteSvg"/><path d="m464 488a23.928 23.928 0 0 1 -16.971-7.029l-160-160a24 24 0 0 1 33.942-33.942l160 160a24 24 0 0 1 -16.971 40.971z" :fill="whiteSvg"/><path d="m464 488h-128a24 24 0 0 1 0-48h104v-104a24 24 0 0 1 48 0v128a24 24 0 0 1 -24 24z" :fill="darkerWhiteSvg"/></svg>
                <a class="navLink">Sobre <i class="fas fa-chevron-down" :class="{activated: openSobre}"></i></a>
                <div class="subMenu" v-if="openSobre">
                    <router-link to="/sobre/porque">Porquê?</router-link>
                    <router-link to="/sobre/onde">Onde?</router-link>
                </div>
            </li>
            <li class="navlink">
                <svg id="Flat" :height="iconSize" viewBox="0 0 512 512" :width="iconSize" xmlns="http://www.w3.org/2000/svg"><path d="m304 232a24 24 0 0 1 -16.971-40.971l160-160a24 24 0 0 1 33.942 33.942l-160 160a23.928 23.928 0 0 1 -16.971 7.029z" :fill="whiteSvg"/><path d="m432 232h-128a24 24 0 0 1 -24-24v-128a24 24 0 0 1 48 0v104h104a24 24 0 0 1 0 48z" :fill="darkerWhiteSvg"/><path d="m208 232a23.928 23.928 0 0 1 -16.971-7.029l-160-160a24 24 0 0 1 33.942-33.942l160 160a24 24 0 0 1 -16.971 40.971z" :fill="whiteSvg"/><path d="m208 232h-128a24 24 0 0 1 0-48h104v-104a24 24 0 0 1 48 0v128a24 24 0 0 1 -24 24z" :fill="darkerWhiteSvg"/><path d="m464 488a23.928 23.928 0 0 1 -16.971-7.029l-160-160a24 24 0 0 1 33.942-33.942l160 160a24 24 0 0 1 -16.971 40.971z" :fill="whiteSvg"/><path d="m304 456a24 24 0 0 1 -24-24v-128a24 24 0 0 1 24-24h128a24 24 0 0 1 0 48h-104v104a24 24 0 0 1 -24 24z" :fill="darkerWhiteSvg"/><path d="m48 488a24 24 0 0 1 -16.971-40.971l160-160a24 24 0 0 1 33.942 33.942l-160 160a23.928 23.928 0 0 1 -16.971 7.029z" :fill="whiteSvg"/><path d="m208 456a24 24 0 0 1 -24-24v-104h-104a24 24 0 0 1 0-48h128a24 24 0 0 1 24 24v128a24 24 0 0 1 -24 24z" :fill="darkerWhiteSvg"/></svg>
                <router-link to="/contactos">Contatos</router-link>
            </li>
        </ul>

        <div class="burger" @click="toggleClass() ">
            <div v-if="!isActive" class="burgerText">MENU</div>
            <div class="drawing" :class="newClass">
                <svg id="palco" height="40px" viewBox="0 0 512 512" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="m256 216a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z" :fill="whiteSvg"/><path d="m320 136a23.926 23.926 0 0 1 -16.971-7.029l-47.029-47.03-47.029 47.03a24 24 0 0 1 -33.942-33.942l64-64a24 24 0 0 1 33.942 0l64 64a24 24 0 0 1 -16.971 40.971z" :fill="darkerWhiteSvg"/><path d="m256 488a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z" :fill="whiteSvg"/><path d="m256 488a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 33.942-33.942l47.029 47.03 47.029-47.03a24 24 0 0 1 33.942 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" :fill="darkerWhiteSvg"/><path d="m464 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z" :fill="whiteSvg"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" :fill="whiteSvg"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" :fill="darkerWhiteSvg"/><path d="m192 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z" :fill="whiteSvg"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z" :fill="whiteSvg"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z" :fill="darkerWhiteSvg"/></svg>
            </div>
        </div>
       
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gsap from 'gsap';
export default defineComponent({          
    setup() {
        const navLinks = [
            {id: 0, routeName: "Home", routeText: "Home"},
            {id: 1, routeName: "Onde", routeText: "Sobre"},
            {id: 2, routeName: "Contactos", routeText: "Contactos"},
        ]
        const beforeEnter: any = (el: any) => {
            el.style.opacity = 0;
            el.style.transform = 'translateX(-100px)';
        }
        const enter: any = (el: any, done: any) => {
            gsap.to(el, {
                opacity: 1,
                x: 0,
                duration: 0.2,
                onComplete: done,
                delay: el.dataset.index * 0.05,
            });
        }
        return { navLinks, beforeEnter, enter }
    },
    name: "MobileNav",
    emits: ["activatedNavbar"],
    data() {
        return {
            toggle: false,
            newClass: "",
            isActive: "",
            openSobre: false,
            activatedNavbar: false,
            after29: false,
            whiteSvg: "#8690fa",
            darkerWhiteSvg: "#5153ff",
            iconSize: "50px",
        }
    },
    methods: {
        toggleClass() {
            this.activatedNavbar = !this.activatedNavbar;
            this.activatedNavbar ? this.whiteSvg = "#FFFFFF" : this.whiteSvg = "#8690FA";
            this.activatedNavbar ? this.darkerWhiteSvg = "#FFFFFF" : this.darkerWhiteSvg = "#5153ff";
            this.toggle = !this.toggle;
            this.toggle ? this.newClass = "toggle" : this.newClass = "";
            this.toggle ? this.isActive = "isActive" : this.isActive = "";
            this.$emit("activatedNavbar", this.activatedNavbar);
        },
    },
});
</script>

<style lang="scss">

$primaryColor: #5A68E0;

.mobileNav {
    position: absolute;
	z-index: 300;
	width: 100%;
	opacity: 1;
	color: #000;
    max-width: 100vw;
    overflow-x: hidden;
    height: 200px;

    .dropdown {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        svg {
            margin-bottom: 10px;
        }

        .subMenu {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            width: 70vw;
            a {
                font-size: 14px;
                margin-left: 20px;

                &:last-child {
                    margin-left: 30px;
                }
            }
        }
    }


    .bgImage {
      position: absolute;
      width: 100%;
      z-index: -1000;
    }

    .navLinks {
        position: absolute;
        right: 0px;
        height: 100vh;
        top: 0vh;
        background-image: linear-gradient(to bottom, #5153fb, #4cb2f2);
        filter: opacity(0.9);
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        opacity: 0;
        width: 100%;
        transition: all 0.4s ease-in;
        li {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            opacity: 1;
            letter-spacing: 5px;
            font-size: 20px;
            text-transform: uppercase;

            svg {
                margin-bottom: 10px;
            }

            a {
                opacity: 1;
                color: white;

                i {
                    transition: transform 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
                }

                .activated {
                    transform: rotateZ(180deg);
                }
            }
        }
	}
    
    .isActive {
        position: fixed;
        transform: translateX(0%);
        height: 100vh;
        margin-top: 0;
        display: flex;
        opacity: 1;
    }
    .burger {
        display: flex;
        align-items: center;
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 20px;
        border-radius: 50%;
        .burgerText {
            color: $primaryColor;
            font-size: 20px;
            letter-spacing: 3px;
        }
    }
}
</style>