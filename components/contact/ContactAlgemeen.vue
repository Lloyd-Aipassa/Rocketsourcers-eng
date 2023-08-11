<template>
    <section id="contact">
        <h2>Interesse?</h2>
        <h3>NEEM CONTACT OP</h3>
        <ContactBlock />
    </section>
</template>
 
 
<style scoped>
#contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 100%;
    background-color: var(--color-blue);
    border-radius: 8px;
    padding: 50px;
    align-self: flex-start;
    height: 430px;
}

h2 {
    z-index: 3;
    position: relative;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    color: #f89a03;
}

h3 {
    z-index: 3;
    position: relative;
    font-size: 32px;
    font-weight: 800;
    line-height: 32px;
    color: #fff;
    margin-bottom: 20px;
}


@media screen and (max-width: 720px) {
    #contact {
        width: 100%;
    padding: 24px 24px;
    margin-bottom: 40px;
    height: 385px;
}

h3 {
    font-size: 28px;
    font-weight: 800;
    line-height: 28px;
    color: #fff;
    margin-bottom: 20px;
}

}
</style>