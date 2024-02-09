<template>
    <Card class="border-left-2 border-blue-700 w-full">
        <template #title>
            <h2 class="text-lg">
                    <span>
                    Seguimientos
                    </span>
            </h2>
        </template>
        <template #content>
            <DataTable :value="data" class="p-datatable-sm" striped-rows>
                <Column field="description"></Column>
                <Column v-for="(day, index) in daysOfWeek" :header="day">
                    <template #body="{data}">
                            <span v-for="item in data.days">
                                <span v-if="(index) == item.dayNumber">
                                    {{ item.cantidad }}
                                </span>
                            </span>
                    </template>
                </Column>
            </DataTable>
        </template>
    </Card>
</template>

<script setup lang="ts">

import {onBeforeMount, ref} from "vue";
import http from "@/composables/httpClient";
import {getEstadisticasComentariosFechActual} from "@/components/backoffice/comentario/storeComentario";

const daysOfWeek = [
    'Hoy','', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo', 'Mes'
];
const seguimientos = ref([]);
const data = ref([]);

onBeforeMount(() => {
    loadData();
});

const loadData = async () => {
    const responseComentarios = await getEstadisticasComentariosFechActual();
    seguimientos.value = responseComentarios.data;

    data.value = [
        {
            type: 'co', description: 'Comentarios', days: []
        },
        {type: 'le', description: 'Llamadas entrantes', days: []},
        {type: 'ls', description: 'Llamadas salientes', days: []}
    ];

    for (const index in data.value) {
        for (const seguimiento of seguimientos.value) {

            if (seguimiento.tipo == data.value[index].type)
                data.value[index].days.push(seguimiento);
        }
    }

};

</script>

<style scoped>

</style>