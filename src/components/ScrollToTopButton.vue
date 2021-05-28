<template>
    <button id="btnScrollToTop" aria-label="Scroll to top">
		<i class="fa fa-arrow-up" aria-hidden="true" ></i>
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ScrollToTopButton',
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
	transition: 0.5s;
	z-index: 10;
    &:hover {
        transform: scale(1.1);
    }
}
    
</style>