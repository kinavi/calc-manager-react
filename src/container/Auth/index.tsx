import React, {useState} from 'react'
import {connector} from "./connector";
import {AppPropsType} from "./types";
import {AuthForm} from "../../components/AuthForm";
import {AuthContainer} from "../../components/AuthContainer";
import {SingIn} from "../../components/forms/SingIn";
import {SingUp} from "../../components/forms/SingUp";
import {SwitchButton} from "../../components/SwitchButton";
import {Loader} from "../../components/Loader";

const Auth = ({
    register,
    login,
    updateFieldFormAC,
    forms
}: AppPropsType) => {
    const[isSingIn, setIsSingIn] = useState(true);
    const isLoading = forms.singUp.status === 'load' || forms.singIn.status === 'load'
    return (
        <AuthContainer>
            <AuthForm>
                { isSingIn
                    ? <SingIn
                        fields={forms.singIn.fields}
                        onUpdateField={updateFieldFormAC}
                        onSubmit={login}
                    />
                    : <SingUp
                        fields={forms.singUp.fields}
                        onUpdateField={updateFieldFormAC}
                        onSubmit={register}
                    />
                }
                {isLoading && <Loader />}
                <div>
                    <SwitchButton onClick={() => setIsSingIn(!isSingIn)}>
                        {isSingIn ? 'Создать' : 'Войти'}
                    </SwitchButton>
                </div>
            </AuthForm>
        </AuthContainer>
    )
}

export const AuthWithState = connector(Auth);
