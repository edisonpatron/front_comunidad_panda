import moment from "moment";

export function isNotEmpty(data: any): boolean {
    return data !== undefined && data !== null;
}

export function isEmpty(data: any): boolean {
    return data == undefined || data == null;
}

export function formValidationErrors(errors: any): any {
    let formsErrors: any = {};
    for (const key in errors) {
        formsErrors[key] = errors[key][0]
    }
    return formsErrors;
}

export function transformDateToSimple(date: object): string{
    return moment(date).format('YYYY-MM-DD');
}