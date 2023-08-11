<template>
    <div class="cookie" v-if="refCookie">
        <div class="dark-background">
            <div class="message">
                <img src="~/assets/Hero/RS-rocket.svg" width="259" height="77" alt="logo rocketsourcers only the rocket">
                <h3>Je cookie instellingen</h3>
                <p>Rocksourcers gebruikt functionele en analytische cookies voor website optimalisatie en statistieken</p>
                <button class="button" @click="Cookie">Snap ik</button>
                <NuxtLink to="/cookiebeleid" @click="Close">
                    <p>
                        Meer informatie
                    </p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>

/* function to set the cookie*/
const setCookie = (cName, cValue, expDays) => {
    let date = new Date()
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

/*get the cookie*/
const getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split(';');
    let value;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) value = val.substring(name.length)
    });

    return value;
}

/* add the ref to the cookiebanner*/
let refCookie = ref(null);

/*create the cookie*/
const Cookie = () => {
    refCookie.value = false
    setCookie("cookie", true, 30);
}

/* check for a cookie */
const cookieMessage = () => {
    if (!getCookie("cookie"))
        refCookie.value = true
}

onMounted(() => {
    cookieMessage()
})


</script>

<style scoped>
.dark-background {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.39);
    z-index: 999999999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.message {
    text-align: center;
    padding: 0 40px;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 2px 2px 14px 0px rgba(0, 0, 0, 0.10);
    width: 392px;
    height: 431px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 999999998;
}

.cookie h3 {
    font-size: 26px;
    font-style: normal;
    font-weight: 900;
    line-height: 100%;
}

.cookie p {
    padding: 14px 0;
    font-size: 14px;
}

.button {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    border: none;
    display: flex;
    justify-content: center;
    color: #FFF;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 500;
    background-color: var(--color-orange);
    width: 100%;
    height: 50px;
    align-items: center;
    padding: 10px 20px;
}

a{
    color: black;
}

a p{
    text-transform: uppercase;
    font-weight: 500;
}

img {
    width: 93px;
    margin-bottom: 10px;
}

@media screen and (max-width: 720px) {
    .message {
    text-align: center;
    padding: 0 40px;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 2px 2px 14px 0px rgba(0, 0, 0, 0.10);
    width: 85%;
    height: 431px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 999999998;
}
}
</style>