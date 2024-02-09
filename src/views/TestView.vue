<template>
    <HeaderPage title="Asuntos"></HeaderPage>
    <div class="tw-grid tw-grid-cols-2">
        <div class="surface-card border-round shadow-2 p-4">
            <div class="text-900 font-medium mb-3 text-xl">Title Placeholder</div>
            <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in
                hac
                habitasse platea dictumst.</p>
            <Button label="Save Changes"></Button>
        </div>
    </div>

    <h3 class="tw-font-medium" style="font-size: 16px">Inputs & Textareas</h3>

</template>

<script setup lang="ts">
import {RouterLink} from "vue-router";
import HeaderPage from "@/components/shared/backend/HeaderPage.vue";

</script>

<style scoped>

</style>