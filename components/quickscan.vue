<template>
    <section id="qs">
        <h2>Profit now</h2>
        <h3>FREE QUICK SCAN</h3>
        <p>A two hour session where we will:</p>
        <div class="qs-bullits">
            <img src="~/assets/QuickScan/bullit-one.svg" alt="bullit-point één" />
            <p>get to know your talent needs</p>
        </div>
        <div class="qs-bullits">
            <img src="~/assets/QuickScan/bullit-two.svg" alt="bullit-point twee" />
            <p>analyse your recruitment challenges</p>
        </div>
        <div class="qs-bullits">
            <img src="~/assets/QuickScan/bullit-three.svg" alt="bullit-point drie" />
            <p>create the perfect plan to attract the best candidates</p>
        </div>
        <button>
            FREE QUICK SCAN
            <img src="~/assets/QuickScan/Arrow-White.svg" alt="" />
        </button>
        <img class="astronaut" width="440" src="~/assets/QuickScan/astronaut.webp" alt="vliegende astronaut" />
        <img class="ping-one" width="34" src="~/assets/QuickScan/ping-qs.webp" alt="sourcing van kanditaden" />
        <img class="ping-two" width="91" src="~/assets/QuickScan/ping-qs-two.webp" alt="sourcing van kandidaten" />
    </section>
</template>

<style scoped>
#qs {
    position: relative;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), radial-gradient(85.65% 83.38% at -35.75% 80.18%, #4F698F 38%, #4B71A9 45%, #33445C 81%, #241433 110%);
    padding: 50px;
    border-radius: 8px;
    margin: 40px auto 0 auto;
    max-width: 1200px;
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
}

#qs::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff15;
}

#qs h2 {
    z-index: 3;
    position: relative;
    color: #f89a03;
}

#qs h3 {
    position: relative;
    color: #fff;
    margin-bottom: 20px;
    z-index: 3;
}

#qs p {
    position: relative;
    color: #fff;
    font-size: 16px;
    font-weight: 300;
    line-height: 26px;
    z-index: 3;
}

.qs-bullits {
    position: relative;
    display: flex;
    gap: 10px;
    z-index: 3;
}

#qs img.astronaut {
    position: absolute;
    transform: translate(700px, -40px);
    animation-name: example;
    animation-duration: 7s;
    animation-iteration-count: infinite;
    z-index: 3;
}

#qs img.ping-one {
    position: absolute;
    bottom: 270px;
    right: 450px;
    z-index: 3;
}

#qs img.ping-two {
    position: absolute;
    bottom: 50px;
    right: 50px;
    z-index: 3;
}

.qs-bullits img {
    width: 24px;
}

#qs button {
    position: relative;
    z-index: 3;
    background-color: #f89a03;
    color: #fff;
    border: none;
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    padding: 18px 24px 18px 24px;
    margin-top: 30px;
}

@media screen and (max-width: 600px) {
    #qs img.astronaut {
        position: relative;
        transform: translate(0, 0);
        animation-name: example;
        animation-duration: 7s;
        animation-iteration-count: infinite;
        width: 100%;
    }

    #qs {
    padding: 50px 24px;
    width: 90%;
    margin: 40px auto 0 auto;
}

}


/* ANIMATIES */
@keyframes example {
    0% {

        left: 0px;
        top: 0px;
    }

    25% {

        left: 3px;
        top: 8px;
    }

    50% {

        left: 0px;
        top: 0px;
    }

    75% {

        left: 3px;
        top: 8px;
    }

    100% {

        left: 0px;
        top: 0px;
    }
}
</style>