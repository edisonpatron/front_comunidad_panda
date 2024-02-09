<template>
    <Card class="border-left-2 border-red-700" style="width: 30em">
        <template #title>
            <h2 class="text-lg flex justify-content-between">
                <span>Clientes asignados por cobrar</span>
                <span class="font-bold">{{ totalCuentasPorCobrar }}</span>
            </h2>
        </template>
        <template #content>
            <DataView :value="balancesOportunidades">
                <template #empty>
                    <div class="text-center">No existe ninguna cuenta por cobrar</div>
                </template>
                <template #list="{data}">
                    <div class="col-12 my-2">
                        <div class="flex justify-content-between">
                            <h3 class="text-sm">
                                {{ data.servicio }}
                            </h3>
                            <RouterLink :to="{name: 'oportunidadIndividual', params: {id: data.id}}"
                                        class="text-blue-600 underline">
                                <h3 class="font-medium text-sm">{{ data.contacto }}</h3>

                            </RouterLink>
                            <h3 class="text-sm font-bold">${{ data.balance }}</h3>
                        </div>
                    </div>
                </template>
            </DataView>
        </template>
    </Card>
</template>

<script lang="ts" setup>

import {computed, onBeforeMount, ref} from "vue";
import {getBalancesOportunidades} from "@/components/backoffice/oportunidad/storeOportunidad";

const balancesOportunidades = ref([]);

onBeforeMount(() => {
    getBalancesOportunidades().then(response => {
        balancesOportunidades.value = response.data;
    });
});

const totalCuentasPorCobrar = computed(() => {
    let total: number = 0;

    balancesOportunidades.value.forEach(oportunidad => {
        total += parseFloat(oportunidad.balance);
    });

    return '$' + total.toFixed(2);
});
</script>

<style scoped>

</style>