<template>
    <footer>
		<div class="container">
            <ul class="socials">
                <p>@AAUE - ASSOCIAÇÃO ACADÉMICA DA UNIVERSIDADE DE ÉVORA <br> TODOS OS DIREITOS RESERVADOS <br> 2021</p>
                <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                <li><a href=""><i class="fab fa-instagram"></i></a></li>
                <li><a href=""><i class="fab fa-facebook-square"></i></a></li>
                <li><a href=""><i class="fab fa-youtube"></i></a></li>
            </ul>
		</div>
        <div class="aaue">
            <img src="@/assets/logo.png" alt="">
            <ul>
                <li><router-link to="/">Politica de Privacidade</router-link></li>
                <li><router-link to="/">Politica de Cookies</router-link></li>
                <li><router-link to="/">Termos e Condições</router-link></li>
                <li><router-link to="/">Contatos</router-link></li>
            </ul>
        </div>
		
	</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Footer',
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

            i {
                color: $textColor;
                margin: 0 17px 0 17px;
                font-size: 30px;
                transition: transform 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

                &:hover {
                    transform: translateY(-5px);
                }
            }
        }
    }
    .aaue {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 30%;
        margin-right: 40px;

        img {
            width: 125px;
        }

        ul li a{
            text-transform: uppercase;
            color: $textColor;
            font-size: 10px;
            font-weight: 800;
        }
    }    
}
</style>