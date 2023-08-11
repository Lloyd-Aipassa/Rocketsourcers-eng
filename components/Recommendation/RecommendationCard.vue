<template>
    <section id="recommendation">
        <div class="top-content">
            <img :src="Image" alt="Foto Lotte Konieczek-Sommerdijk">
            <div class="right-content">
                <h2>{{ Name }}</h2>
                <p class="function" v-html="Function"></p>
            </div>
        </div>
        <p><i class="Quote" v-html="Quote"></i></p>
    </section>
</template>

<script setup>
const props = defineProps({
    Image: String,
    Name: String,
    Function: String,
    Quote: String
})
</script>

<style scoped>
#recommendation {
    background-color: #FFF;
    padding: 50px;
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    height: 100%;
}

#recommendation img {
    max-width: 73px;
    height: 73px;
    border: 1px solid #f89a03;
    border-radius: 50%;
}

.top-content {
    display: flex;
    margin-bottom: 20px;
    gap: 20px;
    align-items: center;
}

i.Quote, p, h2 {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: black;
}

h2{
    color: #f89a03;
    font-weight: 600;
}

p {
    max-width: 425px;
}
@media screen and (max-width: 1439px) {}
@media screen and (max-width: 1239px) {
    
    .top-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
}
@media screen and (max-width: 720px) {
    .top-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>