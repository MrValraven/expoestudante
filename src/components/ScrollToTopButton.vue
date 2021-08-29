<template>
	<transition name="popIn">
		<button 
		id="btnScrollToTop"
		aria-label="Scroll to top"
		@click="scrollToElement('body')"
		v-if="!isAtTop"
		>
			<i class="fa fa-arrow-up" aria-hidden="true" ></i>
		</button>
	</transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ScrollToTopButton',
	data() {
		return {
			isAtTop: true,
		}
	},
	methods: {
		scrollToElement(destination: string) {
			const element = document.querySelector(destination);
			if (element) {
        		element.scrollIntoView({behavior: 'smooth'});
      		}
    	},
		showScrollButton() {
      		window.pageYOffset >= 250 ? this.isAtTop = false : this.isAtTop = true;
    	},
	},
	created() {
		window.addEventListener('scroll', this.showScrollButton);
	},
	unmounted() {
    	window.removeEventListener('scroll', this.showScrollButton);
	},


});
</script>

<style lang="scss">
#btnScrollToTop {
    position: fixed;
	right: 10px;
	bottom: 10px;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	color: white;
	background: darken($color: #7179F4, $amount: 55%);;
	box-shadow: 0 0 10px darken($color: #7179F4, $amount: 10%);
	outline: none;
	border: 1px solid darken($color: #7179F4, $amount: 20%);;
	opacity: 1;
	cursor: pointer;
	transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	z-index: 10;
    &:hover {
        transform: scale(1.1);
    }
}

.popIn-enter-active, .popIn-leave-active {
  	transition: transform .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.popIn-enter, .popIn-leave-to {
  	transform: scale(0);
}
    
</style>