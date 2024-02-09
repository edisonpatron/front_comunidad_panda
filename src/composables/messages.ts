import {FIELD_TRADUCTION_NAME} from "@/composables/options";

export const ERRORMESSAGES: { [key: string]: any } = {
    required: (field?: Object) => {
        if (field) {
            return `Campo ${FIELD_TRADUCTION_NAME[field.path]} es obligatorio`;
        }
        return 'Campo obligatorio';

    },
    min: (min: number) => `El campo debe tener mínimo ${min} caracteres`,
    max: (max: number) => `El campo debe tener máximo ${max} caracteres`,
    email: () => 'Email no válido'
};