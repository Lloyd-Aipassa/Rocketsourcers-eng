<template>
    <section id="founder">
        <section class="content">
            <h2>ONZE OPRICHTER <br> & POWER SOURCER</h2>
            <h3>Viec Nguyen</h3>
            <i>
                <p>“Het streven naar gelijke kansen in talent sourcing is een investering in de toekomst van onze samenleving en onze organisaties. Door deuren te openen voor iedereen, nodigen we innovatie uit, stimuleren we creativiteit en verrijken we onze teams met een breed palet aan ervaringen en inzichten."</p>
            </i>
        </section>
            <div class="counter" ref="scrollRef">
                <div class="counter-one">
                    <h2>{{ counter }}+</h2>
                    <p>Kandidaten succesvol geplaatst</p>
                </div>
                <div class="counter-two">
                    <h2>{{ counter2 }}+</h2>
                    <p>Jaren ervaring met sourcing</p>
                </div>
            </div>
    
        <img class="img-founder" src="~/assets/team/ViecTwee.webp" width="367" height="541"
            alt="Viec Nguyen master sourcing">
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// See this file to see how the IntersectionObserver is implemented
import { onIntersect } from "~/composables/onInterSect";

const observer = ref({});
const scrollRef = ref({});
const counter = ref(0);
const counter2 = ref(0);

// This is the callback being called on intersection
const onEnter = () => {
    setInterval(() => {
        if (counter.value < 750) {
            counter.value++;
        }
    }, 1);

    setInterval(() => {
        if (counter2.value < 15) {
            counter2.value++;
        }
    }, 100);

    // console.log("entered");
};


// This is the (optional) callback being called when the element no longer intersects
const onExit = () => {
    // console.log("exited");
};
// When the component is mounted, start observing
onMounted(() => {
    observer.value = onIntersect(scrollRef.value, onEnter, onExit, false, {
        threshold: 0.4,
    });
});

// When the component is removed, disconnect the observer (clean-up step)
onUnmounted(() => {
    observer.value.disconnect();
});
</script>


<style scoped>
#founder {
    position: relative;
    z-index: 5;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 0 35px 35px 50px;
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 0 auto 40px auto;
}

#founder img.img-founder {
    margin-top: -100px;
    margin-bottom: -35px;
    align-self: flex-end;
    pointer-events: none;
}

.content h2 {
    font-size: 32px;
    font-weight: 800;
    line-height: 32px;
    max-width: 390px;
    margin-bottom: 20px;
}

.content h3 {
    color: #f89a03;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
    max-width: 400px;
    margin-bottom: 5px;
}

.content p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    max-width: 310px;
}

.counter {
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.counter-one,
.counter-two {
    border: 2px solid #f89a03;
    width: 176px;
    height: 176px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    text-align: center;
    gap: 10px;
}

.counter-one p,
.counter-two p {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    width: 126px;
    margin-top: -10px;
    color: black;
}
.counter-one h2,
.counter-two h2 {
    color: var(--color-orange);
    font-size: 32px;
    font-weight: 700;
}


@media screen and (max-width: 1439px) {
    #founder {
        max-width: 1080px;
    }
}

@media screen and (max-width: 1239px) {
    #founder {
        max-width: 785px;
    }
    .content h2 {
    font-size: 24px;
    font-weight: 800;
    line-height: 24px;
    max-width: 292px;
}

#founder img.img-founder {
    margin:  -35px ;
    align-self: flex-end;
    width: 42%;
    height: 20%;
}
}


@media screen and (max-width: 720px) {
    #founder {
        display: flex;
        padding: 50px 0 0 0;
        flex-direction: column;
        max-width: 90%;
        margin: 0 auto 40px auto;
        justify-content: center;
    }

    #founder img.img-founder {
        width: 80%;
        height: auto;
        align-self: center;
        margin-bottom: 0px;
        margin-top: 0px;
        padding: 0;
        text-align: center;
    }

    .counter {
        margin-top: 25px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 15px;
    }

    .counter-one,
    .counter-two {
        width: 150px;
        height: 150px;

    }

    .content h2 {
        font-size: 24px;
        font-weight: 800;
        line-height: 32px;
        max-width: 400px;
        margin-bottom: 15px;
        padding: 0 px;
    }

    .content h3 {
        color: #f89a03;
        font-size: 20px;
        font-weight: 600;
        line-height: 26px;
        width: 100%;
        margin-bottom: 5px;
        padding: 0;
    }

    i p {
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        max-width: 310px;
        margin: 0;
        padding: 0;
    }

}
</style>
