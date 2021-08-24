<template>
    <div class="dropzone" 
    @dragenter.prevent="toggleActive" 
    @dragleave="toggleActive" 
    @dragover.prevent 
    @drop="toggleActive"
    :class="{'activeDropzone': active}"
    >
        <span>Arraste um ficheiro</span>
        <span>OU</span>
        <label for="dropzoneFile">Selecionar ficheiro</label>
        <input type="file" id="dropzoneFile" class="dropzoneFile">
    </div>
</template>

<script>
import { ref } from 'vue'
    export default {
        name: 'Dropzone',
        setup() {
            const active = ref(false)

            const toggleActive = () => {
                active.value = !active.value;
            }

            return { active, toggleActive };
        }
    }
</script>

<style lang="scss" scoped>
$primaryColor: #5A68E0;

.dropzone {
    width: 400px;
    height: 200px;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 16px;
    border: 2px dashed $primaryColor;
    background-color: #ffffff;
    transition: all 0.3s ease;

    label {
        padding: 8px 12px;
        color: #ffffff;
        background-color: $primaryColor;
        transition: all 0.3s ease;
        cursor: pointer;
    }

    input {
        display: none;
    }
}

.activeDropzone {
    color: #ffffff;
    border-color: #ffffff;
    background-color: $primaryColor;

    label {
        background-color: #ffffff;
        color: $primaryColor;
    }
}

</style>