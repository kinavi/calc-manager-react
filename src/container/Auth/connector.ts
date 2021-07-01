import { connect } from 'react-redux';
import { IState } from '../../redux/types';
import {login, register} from '../../redux/actions/ThunkActions';
import {updateFieldFormAC} from "../../redux/actions/ActionsCreator";

const mapState = (state: IState) => ({
    forms: state.forms,
});

const mapDispatch = {
    register,
    login,
    updateFieldFormAC
    // initialMainPage,
    // setStatusForm,
};

export const connector = connect(mapState, mapDispatch);
