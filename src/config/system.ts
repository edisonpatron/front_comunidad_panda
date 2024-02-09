import {URL_SERVER} from "@/config/env";

export default function baseUrl(path: string) {
    import.meta.env.BASE_URL;
    return URL_SERVER + path;
}
export function backOfficeUrl(path: string): string {
    import.meta.env.BASE_URL;
    return URL_SERVER + '/backoffice' + path;
}