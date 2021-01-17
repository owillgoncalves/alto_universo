<template>
  <q-page class="flex full-width row wrap justify-center items-start content-start">
    <h4 class="text-deep-purple">Cursos disponíveis</h4>
    <q-card class="my-card" flat bordered v-for="course in courses" :key="course.id">
      <q-card-section horizontal class="my-card-content">
        <q-card-section class="q-pt-xs">
          <div class="text-overline">{{ course.school }}</div>
          <div class="text-h5 q-mt-sm q-mb-xs text-deep-purple">{{ course.title }}</div>
          <div class="text-caption text-grey">
            {{ course.description }}
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            :src="require('../assets/images/courses/' + course.id + '.png')"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="school" class="text-deep-purple" />
        <q-btn flat>
          {{ course.type }}
        </q-btn>
        <q-btn flat color="deep-purple"> Inscreva-se </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "Courses",
  data() {
    return {
      courses: [
        {
          id: "c01",
          school: "Tecnescola",
          title: "Eletricidade Básica",
          description: `Aprenda os fundamentos da eletricidade com profissionais que têm vasta experiência no mercado`,
          type: "Online",
        },
        {
          id: "c02",
          school: "Belezarte",
          title: "Maquiagem e Penteados",
          description: `O objetivo deste curso é apresentar aos profissionais da área, técnicas básicas de penteados e maquiagens`,
          type: "Presencial",
        },
        {
          id: "c03",
          school: "Belezarte",
          title: "Cabeleireiro Básico",
          description: `Curso voltado para os procedimentos de embelezamento e cuidados nos cabelos`,
          type: "Presencial",
        },
        {
          id: "c04",
          school: "Escola de TI",
          title: "Gestão de E-commerce",
          description: `Este curso tem como objetivo apresentar elementos atualizados sobre como se processa a venda feita via meios eletrônicos`,
          type: "Online",
        },
        {
          id: "c05",
          school: "Venda Mais",
          title: "Representante Comercial",
          description: `O Representante Comercial é responsável por realizar prospecção de clientes, negociação e vendas externas`,
          type: "Online",
        },
        {
          id: "c06",
          school: "Casa Brasil",
          title: "Cozinha Brasileira",
          description: `O objetivo deste curso é apresentar técnicas para o preparo de diversos tipos de pratos da culinária brasileira`,
          type: "Presencial",
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
