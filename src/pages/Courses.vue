<template>
  <q-page class="flex full-width row wrap justify-center items-start content-start">
    <h4 class="text-deep-purple">Cursos disponíveis</h4>
    <q-card 
          class="my-card" 
          v-for="course in courses"
          :key="course.id">
      <q-card-section horizontal>
        <q-img
          class="col-5 my-image"
          :src="require('../assets/images/courses/'+ course.id + '.png')"
          
        />

        <q-card-section class="my-text">{{ course.description }}</q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="school" />
        <q-btn flat>
          {{ course.length }}
        </q-btn>
        <q-btn flat>
          {{ course.type }}
        </q-btn>
        <q-btn flat color="primary">
          Se inscrever
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      courses: [
        {
          id: 'c01',
          description: `TECNESCOLA

          Eletricidade Básica
          `,
          length: '20h',
          type: 'ONLINE',
        },
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
  margin: 5px

.my-image
  height: 150px

.my-text 
  white-space: pre-line
</style>