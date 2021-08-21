<template>
    <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
    <NavbarMobile v-if="mobileMode" @activatedNavbar="activateNavbar()" />
    <Navbar v-if="!mobileMode" class="navbar" />
    <section>

    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>