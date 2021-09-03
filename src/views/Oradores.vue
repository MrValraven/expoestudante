<template>
    <section class="oradorPrincipal">
        <h1>Quem</h1>
        <h2>Faz a Expo'21</h2>
        <OradorCard />
         <img class="fundoOndinhas" src="@/assets/fundos/oradores.png" alt="">
    </section>
    <section class="outrosOradores">
        <h1>Oradores</h1>
        <div class="oradores">
            <OradorPreview v-for="index in 10" :key="index" 
            :companyImage="getImgURL('img.jpg')" 
            :profileImage="getImgURL('speakers/amy.jpg')"
            />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OradorCard from '@/components/OradorCard.vue'
import OradorPreview from '@/components/OradorPreview.vue'

export default defineComponent({
    data() {
        return {

        }
    },
    components: {
        OradorCard,
        OradorPreview
    },
    methods: {
        getImgURL(image: string) {
            return require('@/assets/' + image).default;
        },
    },
});
    
</script>

<style lang="scss" scoped>
$headerBlue: #0010FF;
$textBlue: #596ff0;

.oradorPrincipal {
    display: flex;
    flex-direction: column;
    padding-top: 160px;
    padding-left: 200px;
    padding-right: 200px;
    h1 {
        margin: 0;
        font-size: 60px;
        font-weight: 900;
        text-transform: uppercase;
        color: $headerBlue;
    }

    h2 {
        margin: 0;
        font-size: 100px;
        font-weight: 300;
        font-stretch: normal;
        font-style: italic;
        text-transform: uppercase;
        margin-left: 60px;
        margin-bottom: 40px;
        color: $textBlue;
    }

    
    .fundoOndinhas {
        margin-left: -200px;
        width: 100vw;
    }
}

.outrosOradores {
    padding: 100px 200px;

    h1 {
        font-size: 100px;
        font-weight: 900;
        text-transform: uppercase;
        color: $headerBlue;
    }
    .oradores {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
}

@media screen and (max-width: 1550px) {
    .oradorPrincipal {
        padding-left: 100px;
        padding-right: 100px;


        .fundoOndinhas {
            margin-left: -100px;
        }
    }

    .outrosOradores {
        padding-left: 100px;
        padding-right: 100px
    }

}

@media screen and (max-width: 1250px) {
    .oradorPrincipal {
        h1 {
            font-size: 50px;
        }

        h2 {
            font-size: 80px;
        }
    }
}

@media screen and (max-width: 1050px) {
    .oradorPrincipal {
        padding-left: 50px;
        padding-right: 50px;

        .fundoOndinhas {
            margin-left: -50px;
        }
    }

    .outrosOradores {
        padding-left: 50px;
        padding-right: 50px
    }
}

@media screen and (max-width: 739px) {
    .oradorPrincipal {

        h1 {
            font-size: 30px;
        }

        h2 {
            font-size: 45px;
        }
    }
}

@media (max-width: 600px) {
    .oradorPrincipal {
        padding-left: 25px;
        padding-right: 25px;

        h2 {
            margin-left: 20px;
        }

        .fundoOndinhas {
            margin-left: -25px;
            min-width: 100vw;
        }
    }

    .outrosOradores {
        padding-left: 25px;
        padding-right: 25px;

        h1 {
            font-size: 30px;
        }
    }

}

@media (max-width: 351px) {
    .oradorPrincipal {
        h1 {
            font-size: 25px;
        }
        h2 {
            font-size: 35px ;
        }
    }
}

</style>