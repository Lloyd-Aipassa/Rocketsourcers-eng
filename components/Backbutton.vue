<template>
    <button class="test" @click="back"><img src="~/assets/workfieldpages/Arrow-left.svg" alt="Terug knop"> Terug</button>
</template>

<script setup>
const back = () => {
    history.back(-1)
}
</script>

<style scoped>

.test{
    border: none;
    display: flex;
    gap: 15px;
    font-size: 18px;
    font-weight: 500;
    background-color: #fff;
    width: 200px;
    padding: 15px 0px;
    align-items: center;
}

p{
    margin-bottom: -5px;
}

img{
    width: 30px;
}

.test:hover {
    color: var(--color-orange);
}

@media (width < 600px){
    img{
    width: 40px;
}
}

</style>