<template>
    <Card class="border-left-2 border-red-700" style="width: 30em">
        <template #title>
            <h2 class="text-lg flex justify-content-between">
                <span>Tareas</span>
            </h2>
        </template>
        <template #content>
            <DataView :value="tareas">
                <template #list="{data}">
                    <div class="col-12 my-2">
                        <div class="flex justify-content-between">
                            <h2 class="font-medium">{{ data.descripcion }}</h2>
                            <h2 class="font-bold">
                                {{ data.cantidad }}
                            </h2>
                        </div>
                    </div>
                </template>
            </DataView>
        </template>
    </Card>
</template>

<script lang="ts" setup>
import {onBeforeMount, ref} from "vue";
import {getEstadoTareasHoy} from "@/components/backoffice/tarea/storeTarea";

const tareas = ref([]);

onBeforeMount(async () => {
    const response = await getEstadoTareasHoy();
    loadData(response.data);
});

const loadData = (data: { ejecutadas: number, pendientes: number }) => {
    tareas.value.push({
        descripcion: 'Pendientes',
        cantidad: data.pendientes
    });

    tareas.value.push({
        descripcion: 'Ejecutadas',
        cantidad: data.ejecutadas
    });
}
</script>

<style scoped>

</style>