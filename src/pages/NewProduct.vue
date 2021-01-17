<template>
  <q-page
    class="flex text-deep-purple full-width column wrap justify-start items-center content-center"
  >
    <h5>Anuncie seu produto ou serviço</h5>
    <q-input
      class="my-form-items"
      outlined
      bg-color="white"
      color="deep-purple"
      type="text"
      label="Nome da Loja"
    />
    <q-input
      class="my-form-items"
      outlined
      bg-color="white"
      color="deep-purple"
      type="text"
      label="Produto / Serviço"
    />
    <q-input
      class="my-form-items"
      outlined
      bg-color="white"
      color="deep-purple"
      type="text"
      label="Valor (R$)"
    />
    <q-input
      class="my-form-items"
      outlined
      bg-color="white"
      color="deep-purple"
      type="text"
      label="Endereço"
    />
    <q-btn
      align="around"
      class="btn-fixed-width my-form-items text-deep-purple"
      color="white"
      label="Incluir foto"
      icon="image"
    />
    <q-input
      class="my-form-items"
      outlined
      bg-color="white"
      color="deep-purple"
      type="textarea"
      label="Descrição"
    />
    <q-btn
      align="around"
      class="btn-fixed-width my-form-items"
      color="deep-purple"
      label="Anunciar"
      icon="shopping_cart"
    />
  </q-page>
</template>

<style lang="sass">
.my-form-items
  width: 100%
  max-width: 300px
  margin-top: 15px
</style>
