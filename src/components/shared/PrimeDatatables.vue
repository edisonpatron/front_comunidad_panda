<template>
    <DataTable
            ref="dt"
            v-model:filters="filters"
            :auto-layout="true"
            :context-menu="contextMenu"
            :edit-mode="editMode"
            :globalFilterFields="searchableColumns"
            :lazy="true"
            :loading="loading"
            :paginator="true"
            :resizable-columns="resizableColumns"
            :rows="10"
            :rowsPerPageOptions="[5,10,15,25,50]"
            :state-key="stateKey"
            :table-class="tableClass"
            :table-style="tableStyle"
            :total-records="totalRecords"
            :value="records"
            breakpoint="960px"
            class="p-datatable-sm p-datatable-striped"
            currentPageReportTemplate="Visualizando {first} a {last} de {totalRecords} registros"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            responsive-layout="stack"
            state-storage="session"
            @filter="onFilter"
            @page="onPage"
            @sort="onSort"
    >
        <template #header>
            <div class="flex flex-wrap gap-2 justify-content-between items-center">
                <div>
                    <div class="flex items-center gap-2">
                        <!--                                    <Button @click="loadLazyData" class="p-button-text p-button-plain" icon="pi pi-refresh"/>-->
                        <slot name="header">
                            <h5 class="font-semibold">{{ title }}</h5>
                        </slot>
                    </div>
                </div>
                <div v-if="filter" class="p-input-icon-left max-w-[360px]">
                    <i v-if="!filters['global'].value" class="pi pi-search"/>
                    <i v-else v-if="filters['global'].value" class="pi pi-times"
                       @click="filters['global'].value = null; onFilter()"></i>
                    <InputText v-model="filters['global'].value" class="p-inputtext-sm" placeholder="Buscar"
                               @input="debounce(onFilter,500)"/>
                </div>
            </div>
        </template>
        <template #empty>
            <p class="text-center">No se encontraron registros.</p>
        </template>
        <template #loading>
            Cargando datos, espere un momento por favor...
        </template>
        <slot></slot>
    </DataTable>
</template>

<script lang="ts">
import type {Ref} from 'vue';
import {defineComponent, onMounted, ref, toRef, watch} from "vue";
import {FilterMatchMode} from "primevue/api";
import {useDebounce} from "@/composables/debounce";
import axios from "@/composables/httpClient";

export default defineComponent({
    name: "PrimeDatatables",
    props: {
        apiUrl: String,
        title: String,
        refresh: String,
        filter: {
            type: Boolean,
            default: true
        },
        contextMenu: {
            type: Boolean,
            default: false
        },
        resizableColumns: {
            type: Boolean,
            default: false,
        },
        editMode: {
            type: String,
            default: ''
        },
        tableStyle: String,
        tableClass: Object,
        defaultSortField: String,
        defaultSortDesc: {
            type: Boolean,
            default: true,
        },
        searchableColumns: {
            type: Array,
            default: [],
        },
        columnFilters: {
            required: true,
            type: Object,
            default: {}
        },
        extraData: {
            type: Object,
            default: {}
        },
        stateKey: String,
    },
    setup(props) {
        onMounted(async () => {
            loading.value = true;
            lazyParams.value = JSON.parse(sessionStorage.getItem(stateKey.value as string) as string);
            if (!lazyParams.value) {
                lazyParams.value = {
                    first: 0,
                    filters: filters.value,
                    rows: 10,
                }
            }
            lazyParams.value.page = Math.fround(parseInt(lazyParams.value.first) / parseInt(lazyParams.value.rows || 10))
            await loadLazyData();
        })
        const refresh = toRef(props, "refresh");
        watch(refresh, (val) => {
            loadLazyData();
        });
        const dt = ref();
        const debounce = useDebounce();
        const loading = ref(false);
        const totalRecords = ref(0);
        const records = ref();
        const filtersProp = toRef(props, "columnFilters");
        const filters = ref({});

        filters.value = {
            ...filtersProp.value,
            global: {value: '', matchMode: FilterMatchMode.CONTAINS}
        }
        const searchableColumns = toRef(props, "searchableColumns") as Ref<Array<string>>
        const lazyParams: Ref<any> = ref({});
        const apiUrl = toRef(props, "apiUrl") as Ref<string>;
        const stateKey = toRef(props, 'stateKey');
        const loadLazyData = async () => {
            loading.value = true;
            lazyParams.value.filters = filters.value;
            if (!lazyParams.value.sortField) {
                lazyParams.value.sortField = toRef(props, "defaultSortField").value;
            }
            if (![-1, 1].includes(lazyParams.value.sortOrder)) {
                lazyParams.value.sortOrder = toRef(props, "defaultSortDesc").value ? -1 : 1;
            }
            try {
                const res = await axios.get(apiUrl.value, {
                    params: {
                        params: props.extraData,
                        dt_params: JSON.stringify(lazyParams.value),
                        searchable_columns: JSON.stringify(searchableColumns.value),
                    },
                });
                records.value = res.data.data ?? [];
                totalRecords.value = res.data.total;
                loading.value = false;
            } catch (e) {
                console.warn(e);
                alert('Error al cargar los registros en la tabla, intente nuevamente o contactese con el administrador');
                records.value = [];
                totalRecords.value = 0;
                loading.value = false;
            }
        };
        const onPage = (event: any) => {
            lazyParams.value = event;
            // lazyParams.value.filters = filters.value;
            loadLazyData();
        };
        const onSort = (event: any) => {
            lazyParams.value = event;
            loadLazyData();
        };
        const onFilter = () => {
            // lazyParams.value.filters = filters.value;
            //Reset pagination first
            // lazyParams.value.originalEvent = {first: 0, page: 0}
            // onPage(lazyParams.value);
            loadLazyData();
        }

        const reloadData = () => {
            loadLazyData();
        }
        return {
            dt,
            loading,
            totalRecords,
            records,
            filters,
            lazyParams,
            reloadData,
            onPage,
            onSort,
            onFilter,
            debounce
        }
    }
});

</script>

<style scoped>

</style>