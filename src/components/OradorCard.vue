<template>
    <div class="oradorCard">
        <div class="images">
            <img src="@/assets/speakers/amy.jpg" alt="">
            <img class="empresaImg" src="@/assets/img.jpg" alt="">
        </div>
        <div class="oradorInfo">
            <h3>Nome</h3>
            <h4>Cargo</h4>
            <h4>Empresa</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum architecto perferendis dolorum fuga saepe illum quisquam, modi voluptate laboriosam quia obcaecati recusandae dolores, autem placeat cupiditate id porro doloremque nulla veritatis. Laboriosam neque quis eligendi, culpa magni reiciendis. Ducimus, ipsam?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quisquam quis totam aperiam. Ab ducimus, molestiae error asperiores reiciendis quo!</p>
        </div>
    </div>
    <p class="palco">Palco</p>
    <p class="data"><span>Data e hora:</span> 2021 cenas</p>
</template>

<script>
import { defineComponent } from 'vue';

 export default defineComponent({

        
})
</script>

<style lang="scss" scoped>
$headerBlue: #0010FF;
$textBlue: #596ff0;

.oradorCard {
    display: flex;
    align-items: center;
    z-index: 9999;

    .images {
        position: relative;

        img {
            height: 400px;
            width: 400px;
            border-radius: 50%;
            margin-right: 35px;
        }

        .empresaImg {
            position: absolute;
            opacity: 0;
            height: 100px;
            width: 100px;
            left: 250px;
            top: 350px;
            transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1), opacity 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

    }
    .images:hover .empresaImg {
        opacity: 1;
        transform: translateY(-100px);
    }

    .oradorInfo {
        h3 {
            font-size: 25px;
            font-weight: bold;
            font-style: italic;
            margin: 0;
            color: $headerBlue;
        }

        h4 {
            margin: 0;
            font-size: 20px;
            font-weight: 300;
            color: $textBlue;
        }

        p {
            font-size: 25px;
            font-weight: 300;
            font-style: italic;
            color: $textBlue;
        }
    }
}

.palco {
    margin: 40px 0 0 0;
    font-size: 25px;
    font-weight: 900;
    color: $headerBlue;
    text-transform: uppercase;
}

.data {
    margin: 0;
    font-weight: 300;
    font-style: italic;
    font-size: 20px;
    color: $headerBlue;
    text-transform: uppercase;

    span {
        font-weight: bold;
    }
}

@media screen and (max-width: 1250px) {
    .oradorCard {

        .oradorInfo {

            p {
                font-size: 20px;
            }
        }
    }
}

</style>