import {IField, IFormState, SingInFieldType, SingUpFieldType} from "../types";

export const INITIAL_STATE = {}

export const getFormInitialState = <T> (initialField: IField<T>[]): IFormState<T> => ({
    status: 'close',
    fields: initialField,
});

export const SING_IN_FIELDS: IField<SingInFieldType>[] = [
    {
        id: 'mail',
        value: '',
        error: null,
    },
    {
        id: 'password',
        value: '',
        error: null,
    },
];

export const SING_UP_FIELDS: IField<SingUpFieldType>[] = [
    {
        id: 'userName',
        value: '',
        error: null,
    },
    {
        id: 'mail',
        value: '',
        error: null,
    },
    {
        id: 'password',
        value: '',
        error: null,
    },
];

export const FORMS_INITIAL_STATE = {
    singIn: getFormInitialState(SING_IN_FIELDS),
    singUp: getFormInitialState(SING_UP_FIELDS),
};
