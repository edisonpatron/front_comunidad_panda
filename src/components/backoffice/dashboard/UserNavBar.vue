<template>
    <div class="overflow-y-auto">
        <ul class="list-none p-3 m-0">
            <li>
                <span class="block p-3 text-gray-600">MENÚ</span>
            </li>
            <li>
                <router-link v-ripple
                             :to="{name: 'home'}"
                             class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                    <i class="pi pi-home mr-2"></i>
                    <span class="font-medium">Dashboard</span>
                </router-link>
            </li>
            <li>
                <router-link v-ripple
                             :to="{name: 'contactos'}"
                             class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                    <i class="pi pi-users mr-2"></i>
                    <span class="font-medium">Contactos</span>
                </router-link>
            </li>
            <li>
                <router-link v-ripple
                             :to="{name: 'oportunidades'}"
                             class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                    <i class="pi pi-th-large mr-2"></i>
                    <span class="font-medium">Oportunidades</span>
                </router-link>
            </li>
            <li>
                <router-link v-ripple
                             :to="{name: 'calendario'}"
                             class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                    <i class="pi pi-calendar mr-2"></i>
                    <span class="font-medium">Calendario</span>
                </router-link>
            </li>
            <li>
                <router-link v-ripple
                             :to="{name: 'contables'}"
                             class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                    <i class="pi pi-book mr-2"></i>
                    <span class="font-medium">Contable</span>
                </router-link>
            </li>
            <li>
                <router-link v-ripple
                             :to="{name: 'tarifario'}"
                             class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                    <span class="font-medium">Tarifario</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import {RouterLink} from "vue-router";
</script>

<style scoped>

</style>