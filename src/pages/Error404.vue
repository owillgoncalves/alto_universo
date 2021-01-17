<template>
  <div class="fullscreen bg-deep-purple text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 7vh">Opa! Essa página não existe</div>

      <div class="text-h5" style="opacity: 0.4">
        Algo de errado aconteceu e você veio parar aqui. Pedimos desculpas pela
        incoveniência. Para retornar, use o botão abaixo.
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="deep-purple"
        unelevated
        to="/"
        label="Voltar"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Error404",
};
</script>
