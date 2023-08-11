<template>
  <section id="footer">
    <div class="container">
      <img src="~/assets/Hero/RS-logo.svg" width="245" height="71" alt="">
      <div class="container-content">
        <div class="menu">
          <h4>Menu</h4>
          <ul>
            <li>
              <NuxtLink to="/">
                <p>
                  Home
                </p>
              </NuxtLink>

            </li>
            <li>
              <NuxtLink to="/over-ons">
                <p>
                  Over ons
                </p>
              </NuxtLink>

            </li>
            <li>
              <NuxtLink to="/onze-diensten">
                <p>
                  Onze diensten
                </p>
              </NuxtLink>

            </li>
            <li>
              <NuxtLink to="/gratis-quickscan">
                <p>
                  Gratis quickscan
                </p>
              </NuxtLink>

            </li>
          </ul>
        </div>
        <div class="vragen">
          <h4>Vragen</h4>
          <ul>
            <li>
              <NuxtLink to="/vragen-over-talent-sourcing">
                <p>
                  Veel gestelde vragen
                </p>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact">
                <p>
                  Contact
                </p>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="volg-ons">
          <h4>Volg ons</h4>
          <ul>
            <li>
              <a href="https://www.linkedin.com/company/rocketsourcers/">
                <p>
                  Linkedin
                </p>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/rocketsourcers/">
              <p>
                Instagram
              </p>
            </a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </section>
  <section id="footer-bot">
    <ul>
      <li>
        <NuxtLink to="/algemene-voorwaarden">
          <p>
            Algemene Voorwaarden
          </p>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/Disclaimer">
          <p>
            Disclaimer
          </p>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/cookiebeleid">
          <p>
            Cookiebeleid
          </p>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/privacyverklaring">
          <p>
            Privacyverklaring 
          </p>
        </NuxtLink>
      </li>
      <li>
        <p>
          Copyright 2023 © Rocketsourcers
        </p>
      </li>
    </ul>
  </section>
</template>
<script setup>


</script>
  
  
<style scoped>
#footer {
  position: relative;
  width: 100%;
  min-height:250px;
  background: #FFF;
  box-shadow: 2px 2px 14px 0px rgba(0, 0, 0, 0.10);
  z-index: 5;
  margin:   0;
}

.container{
  max-width: 1200px;
  padding: 48px 0;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.container-content {
  display: flex;
  gap: 60px;

}

ul {
  list-style: none;
  width: 173px;
}

ul a {
  text-decoration: none;
}

#footer p:hover {
  color: var(--color-orange);
}

#footer-bot {
  max-width: 1200px;
  margin: 20px auto;
  height: 30px;
  display: flex;
  align-items: center;
}

#footer-bot ul {
  display: flex;
  width: 100%;
  gap: 20px;

}

#footer-bot p {
  color: #000;
  font-size: 12px;
  font-weight: 300;
  line-height: 180%;
}



p,
h4 {
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  line-height: 180%;
  font-weight: 300;
}

h4 {
  color: var(--color-orange);
  font-weight: 600;
}



@media screen and (max-width: 1439px) {

.container{
  max-width: 1080px;
}
  #footer-bot {
    max-width: 1080px;
  }
}

@media screen and (max-width: 1239px) {

  .container{
  max-width: 780px;
}

  #footer-bot {
    max-width: 785px;
  }

  #footer img {
    width: 170px;
  }

  .container-content {
    gap: 40px;
  }

  ul {
    list-style: none;
    width: 100%;
  }

  p,
  h4 {
    font-size: 14px;
  }

  h4 {
    font-weight: 600;
  }

}

@media screen and (max-width: 720px) {
  #footer {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  }

  .container{
    flex-direction: column-reverse;
    align-items: center;
  }

  #footer-bot ul {
    width: 90%;
    margin: 20px auto 0;
    gap: 10px;
    flex-wrap: wrap;
    padding-bottom: 10px;
  }

  #footer img {
    width: 170px;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .container-content {
    gap: 30px;
    flex-direction: column;
  }

  ul {
    list-style: none;
    width: 100%;
  }

  p,
  h4 {
    font-size: 14px;
    line-height: 34px;
  }

  h4 {
    font-weight: 600;
    font-size: 16px;
  }

  .router-link-exact-active p {
    color: var(--color-orange);
    font-weight: 600;
  }


}
</style>