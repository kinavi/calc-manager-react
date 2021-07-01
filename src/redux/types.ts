import {Action, AnyAction} from "redux";
import {ThunkAction} from "redux-thunk";

export type Reducer<S = any, A extends Action = AnyAction> = (
    state: S,
    action: A,
) => S;

export type ReducerFormsType = Reducer<IFormsState>;

export interface IReducersObject<T> {
    [key: string]: Reducer<T>;
}

export type StatusType = 'initial' | 'ready' | 'loading' | 'error'
export type FormStatusType = 'open' | 'send' | 'close' | 'load'
export type FormType = 'singIn' | 'singUp'

export interface IUser {

}

export interface IFormState<T> {
    status: FormStatusType;
    fields: IField<T>[];
}

export interface IField<T> {
    id: T;
    value: string;
    error: string | null;
}

export type SingUpFieldType = 'userName' | 'mail' | 'password'
export type SingInFieldType = 'mail' | 'password'

export interface IApp {
    status: StatusType
}

export interface IFormsState {
    singUp: IFormState<SingUpFieldType>;
    singIn: IFormState<SingInFieldType>;
}

export interface IState {
    app: IApp;
    user: IUser;
    forms: IFormsState
}

export type ActionsType = {
    payload?: any
} & AnyAction

export type ThunkActionBase = ThunkAction<any, IState, void, ActionsType>;

