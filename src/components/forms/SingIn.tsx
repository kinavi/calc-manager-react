import {SubmitButton} from "../SubmitButton";
import React, {useMemo} from "react";
import {TitleForm} from "../TitleForm";
import {FieldForm} from "../FieldForm";
import {LabelField} from "../LabelField";
import {InputField} from "../InputField";
import {IField, SingInFieldType, SingUpFieldType} from "../../redux/types";
import {updateFieldFormAC} from "../../redux/actions/ActionsCreator";
import {normalization} from "../../utils/normalization";

type SingInPropType = {
    fields: IField<SingInFieldType>[]
    onSubmit(): void;
    onUpdateField: typeof updateFieldFormAC;
}

export const SingIn = ({
    onSubmit,
    fields,
    onUpdateField
}: SingInPropType) => {
    const normalizedFields = useMemo(
        () => normalization<IField<SingUpFieldType>>(fields),
        [fields],
    );

    return (
        <>
            <TitleForm>
                Войти
            </TitleForm>
            <FieldForm>
                <LabelField>
                    Почта
                </LabelField>
                <InputField
                    value={normalizedFields.byId.mail.value}
                    onChange={({ target: {value} }) => onUpdateField('singIn', {
                        ...normalizedFields.byId.mail,
                        error: '',
                        value,
                    })}
                />
            </FieldForm>
            <FieldForm>
                <LabelField>
                    password
                </LabelField>
                <InputField
                    value={normalizedFields.byId.password.value}
                    onChange={({ target: {value} }) => onUpdateField('singIn', {
                        ...normalizedFields.byId.password,
                        error: '',
                        value,
                    })}
                />
            </FieldForm>
            <SubmitButton onClick={onSubmit}>
                Войти
            </SubmitButton>
        </>
    )
}
