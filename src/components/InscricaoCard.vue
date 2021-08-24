<template>
    <div class="card">
        <h1>Passe {{ nome }}</h1> <!-- 25universitario 40geral-->
        <h2>{{ preco }} EUR</h2>
        <BlobButton mensagem="Selecionar" class="button" />
    </div>
</template>

<script>
import BlobButton from '../components/BlobButton.vue';

    export default {
        props: {
            nome: String,
            preco: String,
        },
        components: {
            BlobButton,
        }
    }
</script>

<style lang="scss" scoped>
$textColor: #7179F4;
$primaryColor: #5A68E0;

.card {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 300px;
    height: 300px;
    padding: 20px;
    margin: 0 25px 0 25px;
    border-radius: 25px;

    h1 {
        color:  $primaryColor;
        text-align: center;
    }

    h2 {
        color: $textColor;
    }

    .button {
        position: absolute;
        bottom: -120px;
    }
}

</style>