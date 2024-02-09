export const Options: { [key: string]: string } = {
    'a': 'ACTIVO',
    'c': 'CREADA',
    'p': 'PUBLICADA',
    'f': 'FINALIZADA',
    'i': 'DESACTIVADO',
    'e': 'ELIMINADO'
};

export const STATUS_OPORTUNIDADES: { [key: string]: string } = {
    'o': 'OPEN',
    'c': 'CLOSED',
    'l': 'LOST',
    'w': 'WON',
};

export const COLOR_STATUS_OPORTUNIDADES: { [key: string]: string } = {
    'o': 'success',
    'c': 'warning',
    'l': 'danger',
    'w': 'primary',
};

export const SEVERITY_STATUS: { [key: string]: string } = {
    'c': 'info',
    'p': 'success',
    'f': 'danger',
    'a': 'success',
    'i': 'warning',
};

export const TIPO_COMENTARIO: { [key: string]: string } = {
    'co': 'Comentario',
    'le': 'Llamada entrante',
    'ls': 'Llamada saliente'
};

export const ESTADO_TAREA: { [key: string]: string } = {
    'p': 'Pendiente',
    'e': 'Ejecutada',
    'c': 'Cancelada'
};

export const COLOR_ESTADO_TAREA: { [key: string]: string } = {
    'p': 'warning',
    'e': 'success',
    'c': 'danger'
};

export const FIELD_TRADUCTION_NAME : { [key: string]: string } = {
    'numero_documento': 'Numero de factura'
};
