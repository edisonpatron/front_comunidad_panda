<script lang="ts" setup>

import CategoriaForm from "@/components/backoffice/categoria/CategoriaForm.vue";

const savedRecord = () => {

}

</script>

<template>

  <div class="tw-grid lg:tw-grid-cols-4">
    <Panel header="Registra la categoria de tu servicio o empresa">
      <CategoriaForm type-form="new" @saved="savedRecord"></CategoriaForm>
    </Panel>
  </div>
</template>

<style scoped>

</style>