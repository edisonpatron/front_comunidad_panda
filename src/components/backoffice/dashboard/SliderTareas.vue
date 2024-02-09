<template>
    <div id="sliderTareas" class="hidden surface-overlay absolute top-0 right-0 shadow-2 w-24rem h-full z-3">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center bg-gray-800 justify-content-between p-3">
                <div>
                    <div class="text-white text-xl font-medium mb-1">Tareas</div>
                </div>
                <div>
                    <Button v-styleclass="{ selector: '#sliderTareas', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutright' }"
                            class="p-button-rounded p-button-text p-button-plain"
                            icon="pi pi-times"></Button>
                </div>
            </div>
<!--            <TabView>-->
<!--                <TabPanel header="Pendientes">-->
<!--                    <ul v-if="tareasPendientes.length > 0" class="list-none p-0 m-0">-->
<!--                        <li v-for="(tarea, index) in tareasPendientes"-->
<!--                            class="border-bottom-1 surface-border py-2">-->

<!--                            <a v-ripple-->
<!--                               class="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150 p-ripple"-->
<!--                               @click="handleClickTask(tarea)">-->
<!--                                <div>-->
<!--                                    <span class="block text-900 mb-1 overflow-x-hidden text-overflow-ellipsis uppercase font-bold">-->
<!--                                        {{ tarea.descripcion }}-->
<!--                                    </span>-->
<!--                                    <p class="m-0 text-600 font-medium text-sm overflow-x-hidden text-overflow-ellipsis uppercase">-->
<!--                                        {{-->
<!--                                        tarea.oportunidad.contacto.apellidos + ' ' + tarea.oportunidad.contacto.nombres-->
<!--                                        }}-->
<!--                                    </p>-->
<!--                                    <p class="m-0 text-600 font-italic font-medium text-sm overflow-x-hidden text-overflow-ellipsis uppercase">-->
<!--                                        {{ tarea.fecha }}-->
<!--                                    </p>-->
<!--                                </div>-->
<!--                                <i class="ml-auto pi pi-chevron-right text-600 text-sm"></i>-->
<!--                            </a>-->
<!--                        </li>-->
<!--                    </ul>-->

<!--                    <ul v-else class="list-none p-0 m-0">-->
<!--                        <li class="border-bottom-1 surface-border py-2">-->
<!--                            No existen tareas pendientes-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </TabPanel>-->

<!--                <TabPanel header="Ejecutadas">-->
<!--                    <ul v-if="tareasEjecutadas.length > 0" class="list-none p-0 m-0">-->
<!--                        <li v-for="(tarea, index) in tareasEjecutadas" class="border-bottom-1 surface-border py-2">-->

<!--                            <a v-ripple-->
<!--                               class="p-ripple flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150 p-ripple">-->
<!--                                <div>-->
<!--                                    <span class="block text-900 mb-1 overflow-x-hidden text-overflow-ellipsis uppercase font-bold">-->
<!--                                        {{ tarea.descripcion }}-->
<!--                                    </span>-->
<!--                                    <p class="m-0 text-600 font-medium text-sm overflow-x-hidden text-overflow-ellipsis uppercase">-->
<!--                                        {{-->
<!--                                        tarea.oportunidad.contacto.apellidos + ' ' + tarea.oportunidad.contacto.nombres-->
<!--                                        }}-->
<!--                                    </p>-->
<!--                                    <p class="m-0 text-600 font-italic font-medium text-sm overflow-x-hidden text-overflow-ellipsis uppercase">-->
<!--                                        {{ tarea.fecha }}-->
<!--                                    </p>-->
<!--                                </div>-->
<!--                                <i class="ml-auto pi pi-chevron-right text-600 text-sm"></i>-->
<!--                            </a>-->
<!--                        </li>-->
<!--                    </ul>-->

<!--                    <ul v-else class="list-none p-0 m-0">-->
<!--                        <li class="border-bottom-1 surface-border py-2">-->
<!--                            No existen tareas ejecutadas-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </TabPanel>-->
<!--            </TabView>-->
        </div>
    </div>
</template>

<script lang="ts" setup>

// import {getTareas} from "@/components/backoffice/tarea/storeTarea";
// import {computed, onBeforeMount, ref} from "vue";
// import type Tarea from "@/types/Tarea/Tarea";
// import {useTotalTareasDiariaStore} from "@/stores/tareas/totalTareasDiaActual";
//
// const tareas = ref([]);
// const visibleInformationTaskModal = ref(false);
// const selectedTask = ref({});
// const totalTareasStore = useTotalTareasDiariaStore();
//
// onBeforeMount(async () => {
//     await loadTareas();
//
//     setInterval(() => {
//         loadTareas();
//     }, 240000)
// });
//
// const loadTareas = () => {
//     getTareas().then((response) => {
//         tareas.value = response.data;
//         totalTareasStore.setTotalTareas(tareas.value);
//     });
// }
//
// const savedRecord = () => {
//     visibleInformationTaskModal.value = false;
//     loadTareas();
// }
//
// const tareasPendientes = computed(() => {
//     return tareas.value.filter((tarea: Tarea) => {
//         return tarea.estado == 'p';
//     })
// });
//
// const tareasEjecutadas = computed(() => {
//     return tareas.value.filter((tarea: Tarea) => {
//         return tarea.estado == 'e';
//     })
// });
//
// const handleClickTask = (task: Tarea) => {
//     let dataTask = task;
//     dataTask._id = task.id;
//     dataTask.asunto = dataTask.asunto.descripcion;
//     dataTask.cliente = dataTask.oportunidad.contacto.apellidos + ' ' + dataTask.oportunidad.contacto.nombres;
//     dataTask.status = dataTask.estado;
//     dataTask.asignado = dataTask.asignado.responsable;
//     selectedTask.value = dataTask;
//     visibleInformationTaskModal.value = true;
//
// };

</script>

<style scoped>

</style>