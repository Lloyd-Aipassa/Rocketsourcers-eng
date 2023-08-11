<template>
    <main id="main-workfields">
        <div class="title-expertises">
            <h2>THESE ARE OUR EXPERTISES WORKFIELDS<span>.</span></h2>
        </div>
        <section id="workfields">
            <div class="workfields">
                <NuxtLink class="it" to="/it"> IT <img src="~/assets/Cards/Arrow-button-orange.svg" alt="oranje pijl" />
                </NuxtLink>
                <NuxtLink to="/finance"> Finance <img src="~/assets/Cards/Arrow-button-orange.svg" alt="oranje pijl" />
                </NuxtLink>
                <NuxtLink class="legal" to="/legal"> Legal <img src="~/assets/Cards/Arrow-button-orange.svg"
                        alt="oranje pijl" /></NuxtLink>
            </div>
            <div class="workfields">
                <NuxtLink class="hr" to="/hr"> HR <img src="~/assets/Cards/Arrow-button-orange.svg" alt="oranje pijl" />
                </NuxtLink>
                <NuxtLink to="/risk"> Risk <img src="~/assets/Cards/Arrow-button-orange.svg" alt="oranje pijl" />
                </NuxtLink>
                <NuxtLink class="other" to="/overig"> Overig  <img src="~/assets/Cards/Arrow-button-orange.svg"
                        alt="oranje pijl" />
                </NuxtLink>
            </div>
        </section>
    </main>
</template>



<style scoped>
#main-workfields {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    z-index: 5;
}

.title-expertises h2 {
    margin-top: 40px;
}
.title-expertises h2 span {
   color: #f89a03;
}


#workfields {
    margin-top: 30px;
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
    margin-bottom: 40px;
    border-radius: 8px;
}

.workfields {
    display: flex;
}

.workfields a {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    background-color: white;
    border: 1px solid #f5f5f5;
    text-decoration: none;
    font-size: 14PX;
    font-weight: 500;
    color: #001d3d;
}

a.it {
    border-top-left-radius: 8px;
}

a.legal {
    border-top-right-radius: 8px;
}

a.other {
    border-bottom-right-radius: 8px;
}

a.hr {
    border-bottom-left-radius: 8px;
}

.workfields a:hover {
    color: #f89a03;
    transform: scale(1.02);
    transition: all 300ms;
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

@media screen and (max-width: 1439px) {
    #main-workfields {
        max-width: 1080px;
    }
}

@media screen and (max-width: 1239px) {
    #main-workfields {
        max-width: 785px;
    }
}

@media screen and (max-width: 720px) {
    .title-expertises h3 {
        font-size: 28px;
        line-height: 28px;
    }


    #main-workfields {
        width: 90%;
        margin: 30px auto 40px auto;
    }

    .workfields {
        flex-direction: column;
    }

    .workfields a:hover {
        color: #f89a03;
        transition: all 500ms;
        box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 0;
    }

    a.it {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

a.other {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
}
}</style>