<template>
    <footer>
		<div class="container">
            <ul class="socials">
                <p>@AAUE - ASSOCIAÇÃO ACADÉMICA DA UNIVERSIDADE DE ÉVORA <br> TODOS OS DIREITOS RESERVADOS <br> 2021</p>
                <li>
                    <a href="https://www.instagram.com/expoestudante/" target="_blank" rel="noreferrer noopenner">
                        <Instagram :color="iconColor" />
                    </a>
                </li>
                <li id="facebook">
                    <a href="https://www.facebook.com/ExpoEstudante" target="_blank" rel="noreferrer noopenner">
                        <Facebook :color="iconColor" />
                    </a>
                </li>
                <li id="linkedin">
                    <a href="https://www.linkedin.com/events/expoestudante6831256218653220864/" target="_blank" rel="noreferrer noopenner">
                        <Linkedin :color="iconColor" />
                    </a>
                </li>
            </ul>
		</div>
	</footer>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Facebook from '@/components/socials/Facebook.vue'
import Instagram from '@/components/socials/Instagram.vue'
import Linkedin from '@/components/socials/Linkedin.vue'

export default defineComponent({
  name: 'Footer',
  data() {
      return {
          iconColor: "#596FF0",
      }
  },
  components: {
      Facebook,
      Instagram,
      Linkedin
  }
});
</script>

<style lang="scss">
$textColor: #596FF0;
$backgroundColor: #FFFFFF;

footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;
	color: $textColor;
	background-color: $backgroundColor;
    z-index: 200;

    .container {
        width: 70%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        margin-bottom: 25px;

        .socials {
            display: flex;
            justify-content: center;
            align-items: center;

             p {
                font-size: 10px;
                font-weight: 800;
                margin-right: 150px;
            }

            svg {
                color: $textColor;
                margin: 0 17px 0 17px;
                transition: transform 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

                &:hover {
                    transform: translateY(-5px);
                }
            }
        }
    }
}

@media (max-width: 500px ) {

    footer .container .socials {
    padding-left: 10px;
    
        p {
            margin-right: 0;
        }
    }
}
</style>