<script lang="ts" setup>
import {RouterView} from "vue-router";
</script>

<template>
  <div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar"
         class="bg-gray-900 h-full lg:h-auto hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
         style="width:270px">
    </div>
    <div class="flex flex-column flex-auto">
      <div class="p-6 pr-4">
        <RouterView/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
