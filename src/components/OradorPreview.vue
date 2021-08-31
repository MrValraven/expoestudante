<template>
    <div class="cardPreview" >
        <div class="imgContainer" :style="{background: backgroundImage}">
            <img :src="image" alt="">
        </div>
        <h2>Nome</h2>
        <p>Cargo</p>
        <p>Empresa</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            image: this.profileImage,
        }
    },
    props: {
        companyImage: String,
        profileImage: String,
    },
    computed: {
        backgroundImage() {
            return `url('${this.companyImage}') center no-repeat content-box`;
        }
    }   
});
</script>

<style lang="scss">
$headerBlue: #0010FF;

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.cardPreview {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
    margin-bottom: 30px;

    .imgContainer {
        border-radius: 50%;
        width: 250px;
        height: 250px;
    }
    

    img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        transition: opacity 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

        &:hover {
            cursor: pointer;
            opacity: 0;
        }
    }

    h2 {
        margin: 25px 0 0 0;
        font-size: 25px;
        font-weight: bold;
        font-stretch: normal;
        font-style: italic;
        color: $headerBlue;
    }

    p {
        margin: 0;
        font-size: 20px;
        font-weight: 300;
        color: $headerBlue;
    }
}

@media (max-width: 600px) {
    .cardPreview {
         width: 125px;
        .imgContainer {
            height: 75px;
            width: 75px;

            img {
                height: 75px;
                width: 75px;
            }
        }
    }
}

</style>