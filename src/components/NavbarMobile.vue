<template>
    <nav class="mobileNav">
        <transition-group
        v-if="isActive" 
        appear
        tag="ul"
        @before-enter="beforeEnter"
        @enter="enter" 
        class="navLinks" 
        :class="isActive"
        >
            <li v-for="(navlink, index) in navLinks" :key="navlink.id" :data-index="index"><router-link :to="{ name: navlink.routeName }"> {{ navlink.routeText }}</router-link></li>
        </transition-group>

        <div class="burger" @click="toggleClass()">
            <div v-if="!isActive" class="burgerText">MENU</div>
            <div class="drawing" :class="newClass">
                <svg id="palco" height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m256 216a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z" fill="#8690fa"/><path d="m320 136a23.926 23.926 0 0 1 -16.971-7.029l-47.029-47.03-47.029 47.03a24 24 0 0 1 -33.942-33.942l64-64a24 24 0 0 1 33.942 0l64 64a24 24 0 0 1 -16.971 40.971z" fill="#5153ff"/><path d="m256 488a24 24 0 0 1 -24-24v-144a24 24 0 0 1 48 0v144a24 24 0 0 1 -24 24z" fill="#8690fa"/><path d="m256 488a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 33.942-33.942l47.029 47.03 47.029-47.03a24 24 0 0 1 33.942 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#5153ff"/><path d="m464 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z" fill="#8690fa"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#8690fa"/><path d="m400 344a24 24 0 0 1 -16.971-40.971l47.03-47.029-47.03-47.029a24 24 0 0 1 33.942-33.942l64 64a24 24 0 0 1 0 33.942l-64 64a23.926 23.926 0 0 1 -16.971 7.029z" fill="#5153ff"/><path d="m192 280h-144a24 24 0 0 1 0-48h144a24 24 0 0 1 0 48z" fill="#8690fa"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z" fill="#8690fa"/><path d="m112 344a23.926 23.926 0 0 1 -16.971-7.029l-64-64a24 24 0 0 1 0-33.942l64-64a24 24 0 0 1 33.942 33.942l-47.03 47.029 47.03 47.029a24 24 0 0 1 -16.971 40.971z" fill="#5153ff"/></svg>
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
    data() {
        return {
            toggle: false,
            newClass: "",
            isActive: "",
        }
    },
    methods: {
        toggleClass() {
            this.toggle = !this.toggle;
            this.toggle ? this.newClass = "toggle" : this.newClass = "";
            this.toggle ? this.isActive = "isActive" : this.isActive = "";
        },
    },
});
</script>

<style lang="scss">

$primaryColor: #5A68E0;

.mobileNav {
    position: absolute;
	z-index: 10;
	width: 100%;
	opacity: 1;
	color: #000;
    max-width: 100vw;
    overflow: hidden;
    height: 70px;

    .bgImage {
      position: absolute;
      top: -8vh;
      width: 100%;
      height: 50vh;
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
            opacity: 1;
            letter-spacing: 5px;
            font-size: 20px;
            text-transform: uppercase;
            a {
                opacity: 1;
                color: white;
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
        position: fixed;
        top: 10px;
        right: 20px;
        border-radius: 50%;
        .burgerText {
            color: white;
            font-size: 20px;
            letter-spacing: 3px;
        }
    }
}
</style>