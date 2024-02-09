import {ref, watch, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import type {RouteLocationNormalizedLoaded, RouteRecordNormalized} from 'vue-router';

export function useBreadcrumb() {
    const route = useRoute();
    const breadcrumbItems = ref([]);

    // Función para obtener el breadcrumb basado en la ruta actual
    const updateBreadcrumb = (to: RouteLocationNormalizedLoaded) => {
        const matchedRoutes = to.matched;

        const items = matchedRoutes
            .filter((route: RouteRecordNormalized) => route.meta.title)
            .map((route: RouteRecordNormalized) => ({
                label: route.meta.title,
                url: route.path,
            }));
        breadcrumbItems.value = items;
    };

    // Escucha cambios en la ruta actual
    watch(
        () => {
            return route;
        },
        (to: RouteLocationNormalizedLoaded) => {
            updateBreadcrumb(to);
        }
    );

    // También actualiza el breadcrumb cuando se monta el componente
    onMounted(() => {
        updateBreadcrumb(route);
    });

    return {
        breadcrumbItems,
    };
}