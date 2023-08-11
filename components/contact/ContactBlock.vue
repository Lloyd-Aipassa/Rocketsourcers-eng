<template>
    <section id="contact-buttons">
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
        <!-- <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script> -->
        <a class="lotusknop" rel="nofollow" href=""
            onclick="Calendly.initPopupWidget({url: 'https://calendly.com/rocketsourcers-viec/gratis-quick-scan?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=001d3d&text_color=ffffff&primary_color=f89a03'});return false;">GRATIS
            QUICK SCAN <img src="~/assets/Cards/Arrow-button-orange.svg" alt="witte pijl" /></a>
        <NuxtLink class="meer-info" to="/contact"> KENNISMAKEN? <img src="~/assets/Cards/Arrow-button-orange.svg"
                alt="oranje pijl" />
        </NuxtLink>
    </section>
</template>


<script setup>
useHead({
     script: [
            {
              src: "https://assets.calendly.com/assets/external/widget.js",
              type: "text/javascript",
              defer: true
            },
          ],
})
</script>

<style scoped>
#contact-buttons {
    max-width: 300px;
}



a.meer-info {
    z-index: 3;
    position: relative;
    border: 1px solid #f89a03;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 18px 24px;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}

a.meer-info:hover {
    color: #f89a03;
}

a.lotusknop {
    display: flex;
    justify-content: space-between;
    z-index: 3;
    position: relative;
    color: #fff;
    background: #FFFFFF00;
    border: 1px solid #F89A03;
    width: 100%;
    padding: 18px 24px;
    text-decoration: none !important;
    font-size: 20px;
    font-family: 'inter', sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
}

a.lotusknop:hover {
    color: #f89a03;
}

@media screen and (max-width: 600px) {}
</style>