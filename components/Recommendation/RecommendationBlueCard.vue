<template>
    <section id="recommendation">
        <div class="left">
            <img :src="Image" class="face-img" alt="Foto Lotte Konieczek-Sommerdijk">
            <div class="right">
                <h2>{{ Name }}</h2>
                <p class="title"> {{ Title }}</p>
                <p class="function"> {{ Function }}</p>
            </div>
        </div>
        <div class="q">
            <p><i class="short-quote" v-html="ShortQuote"></i></p>
        </div>

        <div class="root">
            <button class="test" @click="isOpen = true">
                <p>Lees meer</p> <img src="~/assets/workfieldpages/ArrowSmallOrange.svg" alt="Terug knop">
            </button>
            <Teleport to="body">
                <Transition>
                    <div class="modal" v-if="isOpen">
                        <div class="popup">
                            <img :src="Image" class="face-img" alt="Foto Lotte Konieczek-Sommerdijk">
                            <p>{{ Quote }}</p>
                            <button @click="isOpen = false">sluiten</button>
                        </div>
                    </div>
                </Transition>
            </Teleport>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    Image: String,
    Name: String,
    Title: String,
    Function: String,
    Quote: String,
    ShortQuote: String
})

const isOpen = ref(false)
</script>

<style scoped>
#recommendation {
    background: var(--color-blue);
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 64px auto;
    padding: 28px;
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.9);
    border-radius: 8px;
    z-index: 5;
    position: relative;
}

#recommendation img.face-img,
.popup img.face-img {
    border-radius: 50%;
    width: 64px;
    height: 64px;
}

.left {
    display: flex;
    gap: 12px;
    height: 100%;
    align-items: center;
    width: 2678x;
}

.right h2 {
    color: var(--color-orange);
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
}

.right p {
    font-size: 12px;
    color: #fff;
    line-height: 20px;
}

.right p.title {
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
}

i.short-quote {
    color: white;
}

.q {
    width: 400px;
}

button.test {
    height: 40px;
    background-color: #ffffff00;
    border: none;
}

button.test {
    display: flex;
    align-items: center;
    gap: 13px;
    cursor: pointer;
}

button.test p {
    font-size: 16px;
    line-height: 24px;
    text-decoration: none;
    color: #fff;
}

.function {
    max-width: 200px;
}

.root {
    position: relative;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;

}

.popup {
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 50px;
    /* align-items: center; */
    justify-content: center;
    max-width: 800px;
    min-height: 300px;
    background-color: var(--color-blue);
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.9);
    border-radius: 8px;
}

.popup button {
    background-color: #ffffff00;
    border: none;
    color: var(--color-orange);
    padding: 0;
    text-align: left;

}

.popup p {
    color: #fff;
    margin: 24px 0;
}

@media screen and (max-width: 1439px) {
    #recommendation {
        max-width: 1080px;
    }
}

@media screen and (max-width: 1239px) {
    #recommendation {
        max-width: 785px;
    }
}

@media screen and (max-width: 720px) {
    #recommendation {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        max-width: 90%;
        margin: 0 auto 64px;
        padding: 28px;
        gap: 32px;
    }

    .q {
        width: 100%;
    }

    #recommendation img.face-img {
        border-radius: 50%;
        width: 74px;
        height: 74px;
    }

    .modal {
        background-color: rgba(0, 0, 0, 0.7);
    }

    .popup {
        width: 90%;
        margin: 0 auto;
    }

}

.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    /* transform: translateX(-100%); */
    opacity: 0;
}
</style>