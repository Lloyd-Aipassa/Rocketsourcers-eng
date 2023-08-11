<template>
  <section id="footer">
    <div class="dev">

    </div>
    <div class="container">
      <h2>Meer informatie nodig?</h2>
      <h3>VEEL GESTELDE VRAGEN</h3>
      <div v-for="(question, index) in questions" :key="question.title" class="test">
        <button @click="() => handleAccordion(index)">

          {{ question.title }}
  
            <img src="~/assets/footer/chevron-down.svg" alt="chevron">
      
          <!-- <div v-if="isExpanded = !isExpanded" class="chev">
            <img src="~/assets/footer/chevron-down.svg" alt="chevron">
          </div> -->
        </button>
        <Collapse :when="questions[index].isExpanded" class="collapse">
          <p v-html="question.answer"></p>
        </Collapse>
      </div>
    </div>
  </section>
</template>
  
<script setup>
import { reactive } from 'vue'
import { Collapse } from 'vue-collapsed'
import { ref } from 'vue';

// const show = ref(true);

const questions = reactive([
  {
    title: 'Ontfermt Rocketsourcers zich alleen over sourcing?',
    answer: 'Ja. Wij begrijpen dat het aannemen van medewerkers een cruciaal onderdeel uitmaakt van jouw groeiambities.  Het vinden van de juiste kandidaten is een tijdrovende en dure klus. We’ve got you covered. Met Rocketsourcers ben je ervan verzekerd dat je niet uren meer door kandidaatprofielen hoeft te struinen. Onze expertise ligt in het vinden van de juiste kandidaten en het opvullen van jouw pijplijn, waarna jouw HR- of recruitment team het overpakt. Zij kunnen zich hierdoor volledig focussen op het voeren van gesprekken en het aannemen van professionals.',
    isExpanded: false, // Initial value,
  },
  {
    title: 'Voor welke bedrijven en branches sourcen jullie?',
    answer: 'We bedienen een groot scala aan bedrijven: van overheidsinstellingen tot aan IT-startups en alles wat daar tussenin zit. De bedrijven waarmee we samenwerken, willen op grote hoogte opereren en geloven daarbij in de kracht van goede mensen.',
    isExpanded: false, // Initial value,
  },
  {
    title: 'Welk type vacatures kunnen jullie voor mij opvullen?',
    answer: `Wij zijn gespecialiseerd in het sourcen van kandidaten voor diverse office disciplines zoals IT, Finance, Legal, HR, Compliance en Risk afdelingen. Je kunt ons ook vragen om te ondersteunen bij vacatures op het gebied van Supply Chain, Inkoop en hoge volume posities, zoals Callcenter Agent. De eerste stap in het recruitment proces is het creëren van een kandidatenpersona. Dit helpt jou om te definiëren wat je precies zoekt in een kandidaat. Bovendien laat het je inzien welke vaardigheden en ervaringen je mogelijk over het hoofd ziet die nodig zijn om een rol goed uit te voeren. <br> <br>Stap 2: het marktrapport. Je overziet hierdoor beter hoeveel kandidaten in aanmerking komen voor de functie en hoeveel concurrenten je zult tegenkomen in je zoektocht. Tot slot stellen we een sourcingstrategie op: we zetten uiteen hoe je de kandidaten vindt die aan jouw criteria voldoen. Zie het als de ultieme samenwerking. Met elkaar zoeken we tot op de bodem uit waar jouw behoeftes liggen, zodat we deze effectief kunnen identificeren. Eenmaal daar, zetten we uiteen welk type kandidaat het beste bij de rol past. In een brainstorm ontdekken we hoe wij deze kandidaten het beste kunnen benaderen en engagen.`,
    isExpanded: false, // Initial value,
  },
  {
    title: 'Wat zijn de voordelen van sourcing?',
    answer: 'Ben je van plan meer mensen aan te nemen, maar kost het je moeite om goede kandidaten te vinden? Dan is sourcing de oplossing. Wij screenen van tevoren potentiële kandidaten en filteren tijdens onze zoektocht alleen het toptalent dat jij zoekt. Diversiteit en inclusiviteit zijn in onze sourcing van belangrijke waarde.',
    isExpanded: false, // Initial value,
  },
  {
    title: 'Wat verstaan jullie onder een datagedreven aanpak?',
    answer: 'Sourcing is niet zomaar een hengel uitgooien en hopen dat iemand bijt. Uiteraard, wanneer je zoveel mogelijk mensen benadert, is de kans groot dat je respons krijgt op jouw vacature. Onze Rocketsourcers gaan daarbij altijd strategisch te werk.  We tracken en analyseren al onze inspanningen, waarbij conversie – het moment dat we iemand daadwerkelijk aan jou kunnen voorstellen – onze belangrijkste KPI is. Transparantie vinden we belangrijk: je krijgt altijd inzicht in onze zoektocht dankzij accurate rapportages. Werk je met ons samen, dan blijf je sowieso in control.',
    isExpanded: false, // Initial value,

  }
])

function handleAccordion(selectedIndex) {
  questions.forEach((_, index) => {
    questions[index].isExpanded = index === selectedIndex ? !questions[index].isExpanded : false
  })
}

</script>
  
  
<style scoped>
#footer {
  background-color: var(--color-blue);
  padding: 100px 0 175px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.test {
  position: relative;
}

h2 {
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  color: var(--color-orange);
}

h3 {
  color: #fff;
  font-size: 32px;
  font-weight: 800;
  line-height: 32px;
  margin-bottom: 50px;
}

.collapse {
  transition: height 400ms cubic-bezier(0.3, 0, 0.6, 1);
}

/* .collapse::after {
  position: absolute;
  top: 0;
  right: 0;
  content: '';
  width: 30px;
  height: 30px;
  background-image: url('/public/footer/chevron-down.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate(180deg);
} */


p {
  padding: 20px;
  background-color: var(--color-blue);
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  line-height: 25px;
  text-align: left;
}

button {
  padding: 20px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  background-color: var(--color-blue);
  border: none;
  border-bottom: 1px solid var(--color-orange);
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: left;
}




@media screen and (max-width: 600px) {
  .container {
    padding: 0 24px;
  }
}
</style>