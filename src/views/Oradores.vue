<template>
    <div>

    </div>
</template>

<script lang="ts">
    export default {
        methods: {
        getImgURL(image: string) {
            return require('@/assets/' + image).default;
        },
        
        } 
    }
    
</script>

<style lang="scss" scoped>

</style>