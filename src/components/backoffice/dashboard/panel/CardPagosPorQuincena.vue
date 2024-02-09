<template>
    <div class="flex gap-2" style="width: 35rem">
        <Panel class="mb-2 border-left-2 border-red-700 flex-1" header="Ventas primera quincena">
            <h2 class="text-lg">
                <span class="font-bold">Total:</span> ${{ primerQuincena.total.toFixed(2) }}
            </h2>
            <h3 class="text-sm mt-1">
                <span class="font-bold ">Comisión:</span> {{ comisionPrimerQuincena }}
            </h3>
        </Panel>
        <Panel class="mb-2 border-left-2 border-red-700 flex-1" header="Ventas segunda quincena">
            <h2 class="text-lg">
                <span class="font-bold">Total:</span> ${{ segundaQuincena.total.toFixed(2) }}
            </h2>
            <h3 class="text-sm mt-1">
                <span class="font-bold">Comisión:</span> {{ comisionSegundaQuincena }}
            </h3>
        </Panel>
    </div>
</template>

<script lang="ts" setup>
import {computed, onBeforeMount, ref} from "vue";
import {getTotalPagosRecibidosMesActualPorQuincenaYAsesor} from "@/components/backoffice/pago/storePago";
import {userIdLogged} from "@/composables/authLoginData";

const primerQuincena = ref({total: 0});
const segundaQuincena = ref({total: 0});
const porcentajeComision = 0.35;

onBeforeMount(() => {
    getTotalPagosRecibidosMesActualPorQuincenaYAsesor(userIdLogged).then(response => {
        primerQuincena.value = <number>response.data[0];
        segundaQuincena.value = <number>response.data[1];
    })
});

const comisionPrimerQuincena = computed(() => {
    return '$' + (primerQuincena.value.total * porcentajeComision).toFixed(2);
});

const comisionSegundaQuincena = computed(() => {
    return '$' + (segundaQuincena.value.total * porcentajeComision).toFixed(2);
});

</script>

<style scoped>

</style>