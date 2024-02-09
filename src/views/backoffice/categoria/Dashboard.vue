<template>
  <HeaderPage title="Categorias"></HeaderPage>
  <div class="tw-grid tw-grid-cols-1">
    <!--    <div class="tw-grid tw-grid-cols-2">-->
    <div class="p-5">
      <div class="tw-col-span-4">
        <div class="tw-text-right mb-4">
          <Button class="p-button p-button-primary" @click="visibleFormNew = true"><i
              class="pi pi-plus mr-2"></i>
            Crear nueva categoria
          </Button>
        </div>
        <DataTableCategoria ref="dataTable" class="border-1 border-round p-3"
                            @edit="editClickedRecord"></DataTableCategoria>
      </div>
    </div>
  </div>
  <Dialog v-model:visible="visibleFormNew" :style="{width: '30vw'}" class="modalCategoria" header="Nueva Categoria"
          modal
          position="top">
    <p>
      <CategoriaForm type-form="new" @cancel="visibleFormNew = false" @saved="savedRecord"></CategoriaForm>
    </p>
  </Dialog>

  <Dialog v-model:visible="visibleFormUpdate" :style="{width: '30vw'}" class="modalCategoria"
          header="Actualizar Categoria" modal
          position="top">
    <p>
      <CategoriaForm :form-data="selectedRecord" type-form="update" @cancel="visibleFormUpdate = false"
                     @saved="savedRecord"></CategoriaForm>
    </p>
  </Dialog>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import _ from 'lodash';
import HeaderPage from "@/components/shared/backend/HeaderPage.vue";
import CategoriaForm from "@/components/backoffice/categoria/CategoriaForm.vue";
import type Categoria from "@/types/Categoria/Categoria";

let selectedRecord = reactive<Categoria>({} as Categoria);
const visibleFormNew = ref(false);
const visibleFormUpdate = ref(false);
const dataTable = ref(null);


const savedRecord = (result: Object) => {
  visibleFormUpdate.value = false;
  visibleFormNew.value = false;
  dataTable.value.reloadData();
}

const editClickedRecord = (record: Categoria) => {
  selectedRecord = _.clone(record);
  visibleFormUpdate.value = true;
}
</script>

<style>
.modalCategoria .p-dialog-content {
  padding: 0 !important;
}
</style>