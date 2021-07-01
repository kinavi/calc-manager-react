import { FORMS_INITIAL_STATE } from '../store/initial';
import { FormAction } from '../actions/enum';
import {
    FormType,
    IFormsState,
    IReducersObject,
    ReducerFormsType
} from "../types";
import {reducerCreator} from "../../utils/reducerCreator";



const setStatusForm: ReducerFormsType = (state, { payload: { formType, status } }) => ({
    ...state,
    [formType]: {
        ...state[formType as FormType],
        status,
    }
});

const updateFieldForm: ReducerFormsType = (state, { payload: { formType, fields } }) => {
    const { id } = fields;
    return ({
        ...state,
        [formType]: {
            ...state[formType as FormType],
            fields: state[formType as FormType].fields.map((item) => (
                item.id === id ? fields : item
            )),
        }
    });
}

const resetFieldForm: ReducerFormsType = (state, { payload: { formType } }) => ({
    ...state,
    [formType]: {
        ...state[formType as FormType],
        [formType  as FormType]: FORMS_INITIAL_STATE[formType as FormType],
    }
});

const reducers: IReducersObject<IFormsState> = {
    [FormAction.setStatusForm]: setStatusForm,
    [FormAction.updateFieldForm]: updateFieldForm,
    [FormAction.resetFieldForm]: resetFieldForm
};

export const FormsReducer = reducerCreator<IFormsState>(reducers, FORMS_INITIAL_STATE);
