<template>
  <q-page class="flex full-width row wrap justify-center items-start content-start">
    <h4 class="text-deep-purple">Vagas na região</h4>
    <q-card class="my-card" flat bordered v-for="job in jobs" :key="job.id">
      <q-card-section horizontal class="my-card-content">
        <q-card-section class="q-pt-xs">
          <div class="text-overline">{{ job.school }}</div>
          <div class="text-h5 q-mt-sm q-mb-xs text-deep-purple">{{ job.title }}</div>
          <div class="text-caption text-grey">
            {{ job.description }}
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            :src="require('../assets/images/courses/' + job.id + '.png')"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="work" class="text-deep-purple" />
        <q-btn flat>
          {{ job.type }}
        </q-btn>
        <q-btn flat color="deep-purple"> Candidate-se </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "Jobs",
  data() {
    return {
      jobs: [
        {
          id: "c02",
          school: "Salão da Rute",
          title: "Maquiadora",
          description: `08 as 18h. Salário compatível com mercado e benefícios`,
          type: "CLT",
        },
        {
          id: "c06",
          school: "Cantinho da Tia",
          title: "Cozinheiro Assistente",
          description: `08 as 18h. Salário compatível com mercado e benefícios`,
          type: "CLT",
        },
        {
          id: "c03",
          school: "Jr Hair Studio",
          title: "Cabeleireiro",
          description: `08 as 18h. Salário compatível com mercado e benefícios`,
          type: "CLT",
        },
        {
          id: "c04",
          school: "Galeria Shopping",
          title: "Analista de E-commerce",
          description: `08 as 18h. Salário compatível com mercado e benefícios`,
          type: "CLT",
        },
        {
          id: "c01",
          school: "Eletro Service",
          title: "Eletricista de Manutenção",
          description: `08 as 18h. Salário compatível com mercado e benefícios`,
          type: "CLT",
        },
        {
          id: "c05",
          school: "JatoNet Banda Larga",
          title: "Vendedor",
          description: `08 as 18h. Salário compatível com mercado e benefícios`,
          type: "CLT",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
  margin: 5px

.my-card-content
  height: 250px

.my-image
  height: 150px

.my-text
  white-space: pre-line
</style>
