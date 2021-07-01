import {ActionsType, FormStatusType, FormType, IField, SingInFieldType, SingUpFieldType} from "../types";
import {FormAction} from "./enum";

export const updateFieldFormAC = <T>(formType: FormType, fields: IField<T>): ActionsType => ({
    type: FormAction.updateFieldForm,
    payload: { formType, fields },
});

export const setStatusFormAC = (formType: FormType, status: FormStatusType): ActionsType => ({
    type: FormAction.setStatusForm,
    payload: { formType, status },
});
