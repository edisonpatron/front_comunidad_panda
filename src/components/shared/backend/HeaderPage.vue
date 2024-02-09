<template>
    <div class="flex justify-content-between mb-6">
        <div>
            <h1 class="text-2xl font-medium">{{ props.title || 'Sin Titulo' }}</h1>
        </div>

        <div>
            <Breadcrumb :home="{icon: 'pi pi-home',url: '/', label: 'Inicio'}" :model="breadcrumbItems"
                        class="bg-transparent border-0 border-transparent">
                <template #item="{ label, item, props }">
                    <router-link v-if="item.route" v-slot="routerProps" :to="item.url" custom>
                        <a :href="routerProps.href" v-bind="props.action">
                            <span v-bind="props.label">{{ label }}</span>
                        </a>
                    </router-link>
                    <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                        <span v-if="item.icon" v-bind="props.icon" class="mr-1"/>
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </template>
            </Breadcrumb>
        </div>

    </div>
</template>

<script setup lang="ts">
import {useBreadcrumb} from "@/composables/breadcrumbGenerator";

const {breadcrumbItems} = useBreadcrumb();
const props = defineProps({title: String});


</script>

<style scoped>

</style>