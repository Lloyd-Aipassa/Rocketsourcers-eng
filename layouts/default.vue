<template>
    <HeaderTop />
    <HeaderBot />
    <Cookie />
    <!-- Pagina content -->
    <div>
        <slot />
    </div>
    <Footer />
</template>

<style scoped>
.router-link-exact-active p{
    color: var(--color-orange);
}
</style>