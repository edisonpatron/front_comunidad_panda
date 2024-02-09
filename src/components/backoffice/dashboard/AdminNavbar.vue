<template>
  <div class="overflow-y-auto">
    <ul class="list-none p-3 m-0">
      <li>
        <span class="block p-3 text-gray-600">MENÚ</span>
      </li>
      <li>
        <router-link v-ripple :to="{name: 'home'}"
                     class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
          <i class="pi pi-home mr-2"></i>
          <span class="font-medium">Dashboard</span>
        </router-link>
      </li>
      <li>
        <router-link v-ripple
                     :to="{name: 'categorias'}"
                     class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
          <span class="font-medium">Categorias</span>
        </router-link>
      </li>
      <!--            <li>-->
      <!--                <a v-ripple-->
      <!--                   class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">-->
      <!--                    <i class="pi pi-list mr-2"></i>-->
      <!--                    <router-link :to="{name: 'test'}">-->
      <!--                        <span class="font-medium">Tareas</span>-->
      <!--                    </router-link>-->
      <!--                </a>-->
      <!--            </li>-->
      <!--            <li>-->
      <!--                <a v-ripple-->
      <!--                   class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">-->
      <!--                    <i class="pi pi-comments mr-2"></i>-->
      <!--                    <span class="font-medium">Messages</span>-->
      <!--                    <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"-->
      <!--                          style="min-width: 1.5rem; height: 1.5rem">3</span>-->
      <!--                </a>-->
      <!--            </li>-->
      <!--            <li>-->
      <!--                <a v-ripple-->
      <!--                   v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"-->
      <!--                   class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">-->
      <!--                    <i class="pi pi-chart-line mr-2"></i>-->
      <!--                    <span class="font-medium">Reportes</span>-->
      <!--                    <i class="pi pi-chevron-down ml-auto"></i>-->
      <!--                </a>-->
      <!--                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">-->
      <!--                    <li>-->
      <!--                        <a v-ripple-->
      <!--                           v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"-->
      <!--                           class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">-->
      <!--                            <i class="pi pi-chart-line mr-2"></i>-->
      <!--                            <span class="font-medium">Revenue</span>-->
      <!--                            <i class="pi pi-chevron-down ml-auto"></i>-->
      <!--                        </a>-->
      <!--                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">-->
      <!--                            <li>-->
      <!--                                <a v-ripple-->
      <!--                                   class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">-->
      <!--                                    <i class="pi pi-table mr-2"></i>-->
      <!--                                    <span class="font-medium">View</span>-->
      <!--                                </a>-->
      <!--                            </li>-->
      <!--                            <li>-->
      <!--                                <a v-ripple-->
      <!--                                   class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">-->
      <!--                                    <i class="pi pi-search mr-2"></i>-->
      <!--                                    <span class="font-medium">Search</span>-->
      <!--                                </a>-->
      <!--                            </li>-->
      <!--                        </ul>-->
      <!--                    </li>-->
      <!--                    <li>-->
      <!--                        <a v-ripple-->
      <!--                           class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">-->
      <!--                            <i class="pi pi-chart-line mr-2"></i>-->
      <!--                            <span class="font-medium">Expenses</span>-->
      <!--                        </a>-->
      <!--                    </li>-->
      <!--                </ul>-->
      <!--            </li>-->

    </ul>
  </div>
</template>

<script lang="ts" setup>
import {RouterLink} from "vue-router";
</script>

<style scoped>

</style>