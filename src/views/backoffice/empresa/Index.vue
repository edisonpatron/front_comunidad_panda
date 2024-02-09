<template>
  <HeaderPage title="Empresas"></HeaderPage>
  <div class="tw-grid tw-grid-cols-1">
    <!--    <div class="tw-grid tw-grid-cols-2">-->
    <div class="p-5">
      <div class="tw-col-span-4">
        <div class="tw-text-right mb-4">
          <Button class="p-button p-button-primary" @click="visibleFormNew = true"><i
              class="pi pi-plus mr-2"></i>
            Crear nueva empresa
          </Button>
        </div>
        <DataTableEmpresa ref="dataTable" class="border-1 border-round p-3"
                          @edit="editClickedRecord"></DataTableEmpresa>
      </div>
    </div>
  </div>
  <Dialog v-model:visible="visibleFormNew" :style="{width: '30vw'}" class="modalContacto" header="Nueva empresa"
          modal
          position="top">
    <p>
      <EmpresaForm type-form="new" @cancel="visibleFormNew = false" @saved="savedRecord"></EmpresaForm>
    </p>
  </Dialog>

  <Dialog v-model:visible="visibleFormUpdate" :style="{width: '30vw'}" class="modalEmpresa"
          header="Actualizar empresa" modal
          position="top">
    <p>
      <EmpresaForm :form-data="selectedRecord" type-form="update" @cancel="visibleFormUpdate = false"
                   @saved="savedRecord"></EmpresaForm>
    </p>
  </Dialog>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import _ from 'lodash';
import HeaderPage from "@/components/shared/backend/HeaderPage.vue";
import EmpresaForm from "@/components/backoffice/empresa/EmpresaForm.vue";
import type Empresa from "@/types/Empresa/Empresa";
import DataTableEmpresa from "@/components/backoffice/empresa/DataTableEmpresa.vue";

let selectedRecord = reactive<Empresa>({} as Empresa);
const visibleFormNew = ref(false);
const visibleFormUpdate = ref(false);
const dataTable = ref(null);


const savedRecord = (result: Object) => {
  visibleFormUpdate.value = false;
  visibleFormNew.value = false;
  dataTable.value.reloadData();
}

const editClickedRecord = (record: Empresa) => {
  selectedRecord = _.clone(record);
  visibleFormUpdate.value = true;
}
</script>

<style>
.modalEmpresa .p-dialog-content {
  padding: 0 !important;
}
</style>