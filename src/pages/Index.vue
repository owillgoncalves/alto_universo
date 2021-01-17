<template>
  <q-page
    v-if="isUserLogged"
    class="flex full-width row wrap justify-center items-start content-start"
  >
    <h4 class="text-deep-purple">Anúncios locais</h4>
    <q-card class="my-card" :key="product.id" v-for="product in products">
      <q-img
        class="my-image"
        :src="require('../assets/images/marketplace/' + product.id + '.png')"
      />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute bg-deep-purple"
          style="top: 0; right: 12px; transform: translateY(-50%)"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{ product.name }}
          </div>
          <div
            class="col-auto text-deep-purple text-caption q-pt-md row no-wrap items-center"
          >
            <q-icon name="place" class="text-deep-purple" />
            {{ product.distance }} km
          </div>
        </div>

        <q-rating v-model="product.rate" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">R$ {{ product.price }}・{{ product.store }}</div>
        <div class="text-caption text-grey">
          {{ product.description }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="shopping_cart" class="text-deep-purple" />
        <q-btn flat color="deep-purple"> Receba em casa </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
  <q-page
    v-else
    class="flex bg-deep-purple full-width column wrap justify-center items-center content-center"
  >
    <img src="~assets/logo.png" alt="Logo Alto Universo" class="my-logo" />
    <q-input
      class="my-form-items"
      outlined
      bg-color="white"
      color="deep-purple"
      type="text"
      label="E-mail"
    />
    <q-input
      class="my-form-items"
      outlined
      bg-color="white"
      color="deep-purple"
      type="password"
      label="Senha"
    />
    <q-btn
      @click="isUserLogged = true"
      align="around"
      class="btn-fixed-width text-deep-purple my-form-items"
      color="white"
      label="Entrar"
      icon="login"
    />
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      isUserLogged: false,
      products: [
        {
          id: "m01",
          name: "Matador",
          distance: "1,5",
          rate: "4",
          price: "25",
          store: "Casa do Burgão",
          description: "Hamburguer artesanal com molho caseiro. Acompanha refrigerante",
          image: "",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
  margin: 5px

.my-image
  max-height: 200px

.my-form-items
  width: 100%
  max-width: 300px
  margin-top: 15px

.my-logo
  width: 100%
  max-width: 360px
</style>
