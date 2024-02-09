<template>
  <div id="sliderNotificaciones" class="hidden surface-overlay absolute top-0 right-0 shadow-2 w-30rem h-full z-3">
    <div class="flex flex-column h-full">
      <div class="flex align-items-center bg-gray-800 justify-content-between p-3">
        <div>
          <div class="text-white text-xl font-medium mb-1">Menciones</div>
        </div>
        <div>
          <Button
              v-styleclass="{ selector: '#sliderNotificaciones', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutright' }"
              class="p-button-rounded p-button-text p-button-plain"
              icon="pi pi-times"></Button>
        </div>
      </div>
      <!--            <TabView>-->
      <!--                <TabPanel header="Nuevas">-->
      <!--                    <ul v-if="mencionesNuevas.length > 0" class="list-none p-2 m-0">-->
      <!--                        <li v-for="(mencion, index) in mencionesNuevas"-->
      <!--                            class="border-bottom-1 surface-border py-2">-->

      <!--                            <a-->
      <!--                                    class="p-ripple flex align-items-center p-2 cursor-pointer border-round">-->
      <!--                                <div>-->
      <!--                                    <span class="block text-900 mb-1 overflow-x-hidden text-overflow-ellipsis uppercase">-->
      <!--                                        {{ mencion.contacto }}-->
      <!--                                    </span>-->
      <!--                                    <span class="block text-900 text-sm font-bold mb-2 overflow-x-hidden text-overflow-ellipsis uppercase">-->
      <!--                                        [{{ mencion.servicio }}]-->
      <!--                                    </span>-->
      <!--                                    <p>-->
      <!--                                        <Tag rounded>{{ mencion.usuarioCreador }}</Tag>-->
      <!--                                        <span class="text-sm font-italic ml-1">el {{-->
      <!--                                            moment(mencion.fecha).format('DD \\d\\e MMM')-->
      <!--                                            }} te mencionó en:</span>-->
      <!--                                        <span class="block text-sm mt-2 text-blue-700">{{ mencion.tipoOportunidad }}: {{-->
      <!--                                            mencion.descripcion-->
      <!--                                            }}</span>-->
      <!--                                    </p>-->
      <!--                                </div>-->
      <!--                                <Button v-tooltip="'Archivar'" class="ml-auto" icon="pi pi-briefcase"-->
      <!--                                        severity="info" text-->
      <!--                                        @click="handleButtonArchivar(mencion)"></Button>-->
      <!--                            </a>-->
      <!--                        </li>-->
      <!--                    </ul>-->

      <!--                    <ul v-else class="list-none p-0 m-0">-->
      <!--                        <li class="border-bottom-1 surface-border py-2">-->
      <!--                            No posee menciones nuevas-->
      <!--                        </li>-->
      <!--                    </ul>-->
      <!--                </TabPanel>-->
      <!--                <TabPanel header="Archivadas">-->
      <!--                    <ul v-if="mencionesArchivadas.length > 0" class="list-none p-2 m-0">-->
      <!--                        <li v-for="(mencion, index) in mencionesArchivadas"-->
      <!--                            class="border-bottom-1 surface-border py-2">-->

      <!--                            <a-->
      <!--                                    class="p-ripple flex align-items-center p-2 cursor-pointer border-round">-->
      <!--                                <div>-->
      <!--                                    <span class="block text-900 mb-1 overflow-x-hidden text-overflow-ellipsis uppercase">-->
      <!--                                        {{ mencion.contacto }}-->
      <!--                                    </span>-->
      <!--                                    <span class="block text-900 text-sm font-bold mb-2 overflow-x-hidden text-overflow-ellipsis uppercase">-->
      <!--                                        [{{ mencion.servicio }}]-->
      <!--                                    </span>-->
      <!--                                    <p>-->
      <!--                                        <Tag rounded>{{ mencion.usuarioCreador }}</Tag>-->
      <!--                                        <span class="text-sm font-italic ml-1">el {{-->
      <!--                                            moment(mencion.fecha).format('DD \\d\\e MMM')-->
      <!--                                            }} te mencionó en:</span>-->
      <!--                                        <span class="block mt-3">-->
      <!--                                            <span class="text-sm text-blue-700">{{ mencion.tipoOportunidad }}: </span>-->
      <!--                                            <span class="text-sm ">{{ mencion.descripcion }}</span>-->
      <!--                                        </span>-->

      <!--                                    </p>-->
      <!--                                </div>-->
      <!--                            </a>-->
      <!--                        </li>-->
      <!--                    </ul>-->

      <!--                    <ul v-else class="list-none p-0 m-0">-->
      <!--                        <li class="border-bottom-1 surface-border py-2">-->
      <!--                            No posee menciones archivadas-->
      <!--                        </li>-->
      <!--                    </ul>-->
      <!--                </TabPanel>-->
      <!--            </TabView>-->

    </div>
  </div>
</template>

<script lang="ts" setup>
// import http from "@/composables/httpClient";
//
// import {getComentariosEtiquetadosPorUsuario} from "@/components/backoffice/etiquetaComentario/storeEtiquetaComentario";
// import {computed, onMounted, ref} from "vue";
// import {useAuthStore} from "@/stores/auth";
// import moment from "@/config/moment.config";
// import {BackofficeUrls, RESOURCESBACKOFFICE} from "@/views/backoffice/params";
//
// const authStore = useAuthStore();
// const menciones = ref([]);
//
// onMounted(() => {
//     loadData();
//
//     setInterval(() => {
//         loadData();
//     }, 240000)
// });
//
// const loadData = () => {
//     getComentariosEtiquetadosPorUsuario(authStore.dataUser.id).then(response => {
//         menciones.value = response.data;
//     });
// }
//
// const mencionesNuevas = computed(() => {
//     return menciones.value.filter(mencion => mencion.visualizado == 'n');
// });
//
// const mencionesArchivadas = computed(() => {
//     return menciones.value.filter(mencion => mencion.visualizado == 's');
// });
//
// const handleButtonArchivar = (mencion) => {
//     http.put(BackofficeUrls.put(RESOURCESBACKOFFICE.EtiquetaComentarios, mencion.id), {visualizado: 's'})
//     mencion.visualizado = 's';
//
// };
</script>

<style scoped>

</style>