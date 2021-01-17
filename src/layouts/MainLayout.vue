<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-deep-purple">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title> Seja bem vindo </q-toolbar-title>

        <div>Alto Universo</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-deep-purple"> Para Você </q-item-label>
        <menu-link v-for="link in personalLinks" :key="link.title" v-bind="link" />
      </q-list>
      <q-list>
        <q-item-label header class="text-deep-purple"> Para Empresas </q-item-label>
        <menu-link v-for="link in businessLinks" :key="link.title" v-bind="link" />
      </q-list>
      <q-list>
        <q-item-label header class="text-deep-purple"> Para Escolas </q-item-label>
        <menu-link v-for="link in schoolLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import MenuLink from "src/components/MenuLink.vue";

const personalLinks = [
  {
    title: "Lanche ou roupa nova?",
    caption: "Produtos e serviços na região",
    icon: "store",
    link: "/",
  },
  {
    title: "Aprenda algo novo",
    caption: "Voe alto com cursos gratuitos",
    icon: "school",
    link: "/courses",
  },
  {
    title: "Encontre um trampo",
    caption: "Seu próximo passo na carreira",
    icon: "work",
    link: "/jobs",
  },
];

const businessLinks = [
  {
    title: "Venda seu peixe",
    caption: "Divulgue um produto ou serviço",
    icon: "store",
    link: "/new-product",
  },
  {
    title: "Contrate um jovem",
    caption: "Anuncie uma vaga de emprego",
    icon: "work",
    link: "/new-job",
  },
];

const schoolLinks = [
  {
    title: "Ensine e empodere",
    caption: "Anuncie um curso gratuito",
    icon: "school",
    link: "/new-course",
  },
  {
    title: "Avalie e impulsione",
    caption: "Valide o aprendizado do aluno",
    icon: "verified",
    link: "/not-working",
  },
];

export default {
  name: "MainLayout",
  components: { MenuLink },
  data() {
    return {
      leftDrawerOpen: false,
      personalLinks: personalLinks,
      businessLinks: businessLinks,
      schoolLinks: schoolLinks,
    };
  },
};
</script>

<style lang="sass">
h4
  width: 100%
  padding: 0 20px
</style>
