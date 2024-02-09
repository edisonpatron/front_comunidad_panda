<template>
  <div>
    <ConfirmDialog></ConfirmDialog>
    <PrimeDatatables
        ref="dataTable"
        v-model:contextMenuSelection="selectedRow"
        v-model:selection="selectedContacto"
        :apiUrl="apiURL"
        :columnFilters="{}"
        :refresh="refreshTime"
        :rowHover="true"
        :searchableColumns="searchableCols"
        :stateKey="stateKey"
        scrollable
    >
      <Column field="apellidos" header="Apellidos y nombres" style="min-width: 300px">
        <template #body="{data}">
          <RouterLink :to="{name: 'contactoIndividual', params: {id: data.id}}"
                      class="text-blue-600 underline">
            {{ data.apellidos + ' ' + data.nombres }}
          </RouterLink>
        </template>
      </Column>

      <Column field="nacionalidad.abreviatura" header="Nac"></Column>
      <Column field="estado_residencia.pais.abreviatura" header="Resid"></Column>
      <Column field="estado_residencia.nombre" header="Estado" style="min-width: 200px"></Column>
      <Column field="origen.descripcion" header="Fuente" style="min-width: 100px"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="creador.name" header="Creador"></Column>
      <Column field="created_at" header="Creado" style="min-width: 150px">
        <template #body="{data}">
          {{ moment(data.created_at).format('DD-MM-YYYY') }}
        </template>
      </Column>

      <Column alignFrozen="right" field="estado" frozen header="Estado">
        <template #body="{data}">
          <InputSwitch v-model="data.estado" false-value="i" true-value="a" @change="updateRecord(data)"/>
        </template>
      </Column>

      <Column alignFrozen="right" bodyStyle="text-align: center; overflow: visible" frozen
              headerStyle="width: 4rem; text-align: center">
        <template #body="slotProps">
          <div class="flex align-items-center">
            <i v-if="slotProps.data.cargando"
               class="pi pi-spin pi-spinner py-2 text-orange-500 mr-2"></i>
            <Button class="p-button-text p-button-sm" icon="pi pi-ellipsis-v" type="button"
                    @click="toggle($event, slotProps.data)"></Button>
          </div>

          <Menu id="overlay_menu" ref="menu" :model="menuItems" :popup="true"/>
        </template>
      </Column>
    </PrimeDatatables>
  </div>

</template>

<script lang="ts" setup>
import http from "@/composables/httpClient";
import {onBeforeMount, reactive, ref} from "vue";
import {BackofficeUrls, RESOURCESBACKOFFICE} from "@/views/backoffice/params";
import {useConfirm} from "primevue/useconfirm";
import {useToast} from "primevue/usetoast";
import ConfirmDialog from "primevue/confirmdialog";
import {configMessageErrorNotification} from "@/composables/notifications/configMessageErrorNotification";
import {configMessageSuccessNotification} from "@/composables/notifications/configMessageSuccessNotification";
import moment from "moment";

const stateKey = 'contactos-dt';
const emit = defineEmits(['edit']);
const apiURL = BackofficeUrls.custom(RESOURCESBACKOFFICE.Contactos, '/pv');
const selectedRow = ref(null);
const refreshTime = ref(null);
const searchableCols = ref([
  'apellidos', 'nombres', 'email', 'estadoResidencia.nombre', 'estadoResidencia.pais.abreviatura'
]);
const dataTable = ref(null);
const toast = useToast();
const confirm = useConfirm();
const selectedContacto = ref();
const recordClicked = ref();
const menu = ref();
const menuItems = reactive([]);


onBeforeMount(() => {
  configContextItemMenu();
})

const configContextItemMenu = () => {

  menuItems.push({
    items: [{
      label: 'Edición rápida',
      icon: 'pi pi-pencil',
      command: () => {
        emit('edit', recordClicked.value)
      }
    },
      {
        label: 'Eliminar',
        icon: 'pi pi-trash',
        class: 'item-delete',
        command: (event) => {
          confirm.require({
            header: 'Confirmación',
            message: '¿Estas seguro que deseas eliminar este registro?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {

              http.delete(BackofficeUrls.delete(RESOURCESBACKOFFICE.Contactos, recordClicked.value.id), {}).then((response) => {
                toast.add(configMessageSuccessNotification('Registro eliminado con éxito'));
                reloadData();

              }).catch((e) => {

                toast.add(configMessageErrorNotification(e, 'No se pudo eliminar el registro'));

              });
            },
          });
        }
      }
    ]
  });

};

const toggle = (event, record) => {
  menu.value.toggle(event);
  recordClicked.value = record;
};

const reloadData = () => {
  dataTable.value.reloadData();
}
const updateRecord = (data) => {
  http.put(BackofficeUrls.put(RESOURCESBACKOFFICE.Categorias, data.id), {estado: data.estado}, {}).then((response) => {
    toast.add(configMessageSuccessNotification());
  }).catch((e) => {
    toast.add(configMessageErrorNotification(e));
  });
}

defineExpose({
  reloadData
})


</script>

<style>
.item-delete span {
  @apply tw-text-red-500 !important;
}
</style>