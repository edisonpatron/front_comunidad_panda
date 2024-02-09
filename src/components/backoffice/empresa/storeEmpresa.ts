import http from "@/composables/httpClient";
import {BackofficeUrls, RESOURCESBACKOFFICE} from "@/views/backoffice/params";

export async function getEmpresaByQuery(query: string) {
    const orderBy = 'apellidos';
    const order = 'asc';

    const filters = JSON.stringify(
        [
            {
                value: query,
                ope: 'contains',
                col: 'usa_mobile_uno',
                restriction: 'or',
            },
            {
                value: query,
                ope: 'contains',
                col: 'apellidos',
                restriction: 'or',
            },
            {
                value: query,
                ope: 'contains',
                col: 'nombres',
                restriction: 'or',
            }
        ]
    );

    const response = await http.get(BackofficeUrls.custom(RESOURCESBACKOFFICE.Empresas, `/search?filters=${filters}&orderBy=${orderBy}&order=${order}`));
    return {
        data: response.data.map((contacto: any) => {
            contacto['nombre_completo'] = `[${contacto.usa_mobile_uno}] ${contacto.apellidos} ${contacto.nombres}`;
            return contacto;
        })
    };
}

export async function getEmpresaById(id: number | string) {
    const response = await http.get(BackofficeUrls.custom(RESOURCESBACKOFFICE.Empresas, `/${id}`));
    return {data: response.data};
}