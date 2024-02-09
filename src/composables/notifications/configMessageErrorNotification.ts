import type {AxiosError} from "axios";

export function configMessageErrorNotification(
    e?: AxiosError | Error,
    message?: string
) {
    message = message ?? `No se pudo almacenar el registro, intente nuevamente [${e.response?.data?.message || e?.message}]`;
    return {
        severity: 'error',
        group: 'primary',
        summary: 'Error',
        life: 4000,
        detail: message
    };

}