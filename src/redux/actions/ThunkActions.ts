import {IState, ThunkActionBase} from "../types";
import {normalization} from "../../utils/normalization";
import {ApiController} from "../../utils/apiController";
import {ENDPOINTS} from "../api/endpoints";
import {setStatusFormAC} from "./ActionsCreator";

export const register = (): ThunkActionBase => async (
    dispatch,
    getState,
) => {
    dispatch(setStatusFormAC('singUp', 'load'))
    const { forms: { singUp: { fields } } } = getState() as IState;
    const normalizationField = normalization(fields);

    try {
        const request = await ApiController.post<{status: 'ok' | 'error', message?: string}>(ENDPOINTS.register, {
            mail: normalizationField.byId.mail.value,
            userName: normalizationField.byId.userName.value,
            password: normalizationField.byId.password.value,
        })

        switch (request.status) {
            case 'ok': dispatch(setStatusFormAC('singUp', 'open')); break;
            case 'error': throw request;
        }
    } catch (error) {
        dispatch(setStatusFormAC('singUp', 'open'))
    }
}

export const login = (): ThunkActionBase => async (
    dispatch,
    getState,
) => {
    dispatch(setStatusFormAC('singIn', 'load'))
    const { forms: { singIn: { fields } } } = getState() as IState;
    const normalizationField = normalization(fields);
    const mail = normalizationField.byId.mail.value;
    const password = normalizationField.byId.password.value

    try {
        const request = await ApiController.get(ENDPOINTS.login(mail, password))
        console.log(request)
        // window.location.assign('/')
    } catch (error) {
        console.log(error)
    } finally {
        dispatch(setStatusFormAC('singIn', 'open'))
    }


}
