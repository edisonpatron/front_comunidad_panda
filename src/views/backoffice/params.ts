import {backOfficeUrl} from "@/config/system";

export enum RESOURCESBACKOFFICE {
    Empresas = 'empresas',
    Categorias = 'categorias',

};
export const BackofficeUrls = {
    get: (resource: RESOURCESBACKOFFICE) => backOfficeUrl(`/${resource}`),
    post: (resource: RESOURCESBACKOFFICE) => backOfficeUrl(`/${resource}`),
    delete: function (resource: RESOURCESBACKOFFICE, params: any) {
        return backOfficeUrl(`/${resource}/${params}`);
    },
    put: function (resource: RESOURCESBACKOFFICE, params: any) {
        return backOfficeUrl(`/${resource}/${params}`);
    },
    custom: (resource: RESOURCESBACKOFFICE, uri: any) => {
        return backOfficeUrl(`/${resource}${uri}`);
    },
};
