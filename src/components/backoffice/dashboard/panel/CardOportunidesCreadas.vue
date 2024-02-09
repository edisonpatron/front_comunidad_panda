<template>
    <Card class="border-left-2 border-blue-700" style="width: 30em">
        <template #title>
            <h2 class="text-lg">
                    <span>
                    Oportunidades creadas
                    </span>
            </h2>
        </template>
        <template #content>
            <DataView :value="cantidadOportunidadesCreadas">
                <template #list="{data}">
                    <div class="col-12 my-2">
                        <div class="flex justify-content-between">
                            <h2 class="font-medium">{{ data.descripcion }}</h2>
                            <h2 class="font-bold">
                                {{ getNumeroOportunidadesFormateada(data.numero_oportunidades) }}
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
import {getNumerosOportunidadesCreadasPorQuincena} from "@/components/backoffice/oportunidad/storeOportunidad";
import moment from "@/config/moment.config";

const cantidadOportunidadesCreadas = ref([]);

onBeforeMount(() => {
    getNumerosOportunidadesCreadasPorQuincena(moment()).then(response => {
        cantidadOportunidadesCreadas.value = response.data;
    });
});

const getNumeroOportunidadesFormateada = (numeroOportunidades: number): string => {
    let textoComplementario = ' oportunidades';

    if (numeroOportunidades == 1)
        textoComplementario = ' oportunidad';

    return numeroOportunidades + textoComplementario;
}

</script>

<style scoped>

</style>