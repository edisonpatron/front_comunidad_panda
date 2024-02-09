<template>
    <div>
        <AutoComplete
                v-model="inputValue"
                :suggestions="suggestions"
                input-class="pl-5"
                optionLabel="contacto"
                @complete="onComplete"
                @itemSelect="onItemSelect"
        >
            <template #option="{option}">
                {{ option.contacto }}
            </template>
            <template #empty>
                <div class="px-4 py-2">
                    No se encontraron resultados
                </div>
            </template>
        </AutoComplete>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import http from "@/composables/httpClient";
import {BackofficeUrls, RESOURCESBACKOFFICE} from "@/views/backoffice/params";
import router from "@/router";

const inputValue = ref("");
const suggestions = ref([]);

const onComplete = async (e) => {
    const response = await http.get(BackofficeUrls.custom(RESOURCESBACKOFFICE.Contactos, `/query/${inputValue.value}`))
    suggestions.value = response.data;
}

const onItemSelect = () => {
    const idContacto = inputValue.value.id;
    inputValue.value = "";
    router.push(`/contactos/${idContacto}/edit`);
}
</script>

<style scoped>

</style>