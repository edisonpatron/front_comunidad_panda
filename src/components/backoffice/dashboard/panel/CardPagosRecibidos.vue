<template>
    <Card class="border-left-2 border-blue-700" style="width: 30em">
        <template #title>
            <h2 class="text-lg">
                    <span>
                    Pagos recibidos
                    </span>
            </h2>
        </template>
        <template #content>
            <DataView :value="totalPagos">
                <template #list="{data}">
                    <div class="col-12 my-2">
                        <div class="flex justify-content-between">
                            <h2 class="font-medium">{{ data.descripcion }}</h2>
                            <h2 class="font-bold">
                                ${{ data.monto.toFixed(2) }}
                            </h2>
                        </div>
                    </div>
                </template>
            </DataView>
            <Button class="p-button-sm" @click="generarPdf"><i class="pi pi-print mr-1"></i>Imprimir cierre</Button>

        </template>
    </Card>
</template>

<script lang="ts" setup>

import {onMounted, ref} from "vue";
import moment from "@/config/moment.config";
import {getTotalPagosPorDia} from "@/components/backoffice/pago/storePago";
import http from "@/composables/httpClient";

const totalPagos = ref();

onMounted(() => {
    loadData();
});

const loadData = async () => {
    const responsePagos = await getTotalPagosPorDia(moment().format('YYYY-MM-DD'));
    totalPagos.value = responsePagos.data;
}

const generarPdf = () => {
    const diaActual = moment();
    http.get('/backoffice/reportes/asesores/cierre-caja-diario/' + diaActual.format('YYYY-MM-DD'), {responseType: 'blob'})
        .then(response => {
            const blob = new Blob([response.data], {type: 'application/pdf'});
            const url = window.URL.createObjectURL(blob);
            window.open(url, '_blank');
            window.URL.revokeObjectURL(url);
        }).catch(error => {
        console.log(error);
    })
}

</script>

<style scoped>

</style>