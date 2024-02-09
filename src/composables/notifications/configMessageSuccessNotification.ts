export function configMessageSuccessNotification(
    message?: string
) {
    message = message ?? `Registro guardado correctamente`;
    return {
        severity: 'success',
        group: 'primary',
        summary: 'Ok',
        life: 4000,
        detail: message
    };

}