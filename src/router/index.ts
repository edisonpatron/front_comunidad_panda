import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {
                profiles: ['a', 'u'],
            },
            component: () => import('../views/backoffice/categoria/Index.vue'),
            // component: () => import('../views/backoffice/dashboard/IndexAdminView.vue')
        },
        {
            path: '/empresas',
            meta: {
                title: 'Empresas',
                profiles: ['u'],
            },
            children: [
                {
                    path: '',
                    name: 'empresas',
                    component: () => import('../views/backoffice/empresa/Index.vue'),
                },
            ]
        },
        {
            path: '/categorias',
            meta: {
                title: 'Categorias',
                profiles: ['u'],
            },
            children: [
                {
                    path: '',
                    name: 'categorias',
                    component: () => import('../views/backoffice/categoria/Index.vue'),
                },
            ]
        },
        //
        // {
        //     path: '/oportunidades',
        //     meta: {
        //         title: 'Oportunidades',
        //         profiles: ['a', 'u'],
        //     },
        //     children: [
        //         {
        //             path: '',
        //             name: 'oportunidades',
        //             component: () => import('../views/backoffice/oportunidad/Index.vue')
        //
        //         },
        //         {
        //             path: ':id',
        //             name: 'oportunidadIndividual',
        //             meta: {
        //                 title: 'Resumen',
        //                 profiles: ['a', 'u'],
        //             },
        //             component: () => import('../views/backoffice/oportunidad/Individual.vue')
        //         },
        //     ],
        // },
        // {
        //     path: '/contables',
        //     name: 'contables',
        //     meta: {
        //         title: 'Contable',
        //         profiles: ['a', 'u'],
        //
        //     },
        //     component: () => import('../views/backoffice/contable/Index.vue')
        // },
        // {
        //     path: '/asuntos',
        //     name: 'asuntos',
        //     meta: {
        //         title: 'Asuntos',
        //         profiles: ['a'],
        //     },
        //     component: () => import('../views/backoffice/asunto/Index.vue')
        // },
        // {
        //     path: '/departamentos',
        //     name: 'departamentos',
        //     meta: {
        //         title: 'Departamentos',
        //         profiles: ['a'],
        //     },
        //     component: () => import('../views/backoffice/departamento/Index.vue')
        // },
        // {
        //     path: '/cuentas-contables',
        //     name: 'cuentasContables',
        //     meta: {
        //         title: 'Cuentas Contables',
        //         profiles: ['a'],
        //     },
        //     component: () => import('../views/backoffice/cuentaContable/Index.vue')
        // },
        // {
        //     path: '/fuentes',
        //     name: 'fuentes',
        //     meta: {
        //         title: 'Fuentes',
        //         profiles: ['a'],
        //     },
        //     component: () => import('../views/backoffice/fuente/Index.vue')
        // },
        // {
        //     path: '/oficinas',
        //     name: 'oficinas',
        //     meta: {
        //         title: 'Oficinas',
        //         profiles: ['a'],
        //     },
        //     component: () => import('../views/backoffice/oficina/Index.vue')
        // },
        // {
        //     path: '/etapas',
        //     name: 'etapas',
        //     meta: {
        //         title: 'Etapas',
        //         profiles: ['a'],
        //     },
        //     component: () => import('../views/backoffice/etapa/Index.vue')
        // },
        // {
        //     path: '/origenes',
        //     name: 'origenes',
        //     meta: {
        //         title: 'Origenes',
        //         profiles: ['a'],
        //     },
        //     component: () => import('../views/backoffice/origen/Index.vue')
        // },
        // {
        //     path: '/servicios',
        //     name: 'servicios',
        //     meta: {
        //         title: 'Servicios',
        //         profiles: ['a'],
        //     },
        //     component: () => import('../views/backoffice/servicio/Index.vue')
        // },
        // {
        //     path: '/tarifario',
        //     name: 'tarifario',
        //     meta: {
        //         title: 'Tarifario',
        //         profiles: ['a', 'u'],
        //     },
        //     component: () => import('../views/backoffice/servicio/Tarifario.vue')
        // },
        // {
        //     path: '/usuarios',
        //     name: 'usuarios',
        //     meta: {
        //         title: 'Usuarios',
        //         profiles: ['a'],
        //     },
        //     component: () => import('../views/backoffice/usuario/Index.vue')
        // },
        // {
        //     path: '/tipos-oportunidades',
        //     name: 'tiposOportnidades',
        //     meta: {
        //         title: 'Tipos de oportunidades',
        //         profiles: ['a'],
        //     },
        //     component: () => import('../views/backoffice/tipoOportunidad/Index.vue')
        // },
        // {
        //     path: '/ubicaciones',
        //     name: 'ubicaciones',
        //     meta: {
        //         title: 'Pais - Estados - Ciudades',
        //         profiles: ['a'],
        //     },
        //     component: () => import('../views/backoffice/ubicacion/Index.vue')
        // },
        // {
        //     path: '/calendario',
        //     name: 'calendario',
        //     meta: {
        //         title: 'Calendario',
        //         profiles: ['a', 'u'],
        //     },
        //     component: () => import('../views/backoffice/calendario/Index.vue')
        // },
        {
            path: '/403',
            name: '403',
            meta: {
                title: 'Not found',
                profiles: ['a', 'u'],
            },
            component: () => import('../views/403View.vue')
        },
        // {
        //     path: '/test',
        //     name: 'test',
        //     meta: {
        //         title: 'Test parent'
        //     },
        //     children: [
        //         {
        //             path: 'detalle',
        //             name: 'testChildern',
        //             meta: {
        //                 title: 'Test Children'
        //             },
        //             children: [
        //                 {
        //                     path: 'individual',
        //                     name: 'testChildernIndividual',
        //                     component: () => import('../views/TestView.vue'),
        //                     meta: {
        //                         title: 'Test Children individual'
        //                     },
        //                 },
        //             ]
        //         }
        //     ]
        // }
    ]
});

router.beforeEach((to, from, next) => {

    const title = typeof to.meta.title === 'function' ? to.meta.title(to) : to.meta.title;

    if (title) {
        document.title = title;
    }

    next();
});

export default router
