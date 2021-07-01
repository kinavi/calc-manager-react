import {TitleForm} from "../TitleForm";
import {FieldForm} from "../FieldForm";
import {LabelField} from "../LabelField";
import {InputField} from "../InputField";
import {SubmitButton} from "../SubmitButton";
import React, {useMemo} from "react";
import {IField, SingUpFieldType} from "../../redux/types";
import {normalization} from "../../utils/normalization";
import {updateFieldFormAC} from "../../redux/actions/ActionsCreator";

type SingUpPropType = {
    fields: IField<SingUpFieldType>[]
    onSubmit(): void;
    onUpdateField: typeof updateFieldFormAC;
}

export const SingUp = ({
    fields,
    onUpdateField,
    onSubmit,
}: SingUpPropType) => {

    const normalizedFields = useMemo(
        () => normalization<IField<SingUpFieldType>>(fields),
        [fields],
    );

    return (
        <>
            <TitleForm>
                Создать пользователя
            </TitleForm>
            <FieldForm>
                <LabelField>
                    Имя пользователя
                </LabelField>
                <InputField
                    value={normalizedFields.byId.userName.value}
                    onChange={({ target: {value} }) => onUpdateField('singUp', {
                        ...normalizedFields.byId.userName,
                        error: '',
                        value,
                    })}
                />
            </FieldForm>
            <FieldForm>
                <LabelField>
                    Почта
                </LabelField>
                <InputField
                    value={normalizedFields.byId.mail.value}
                    onChange={({ target: {value} }) => onUpdateField('singUp', {
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
                    onChange={({ target: {value} }) => onUpdateField('singUp', {
                        ...normalizedFields.byId.password,
                        error: '',
                        value,
                    })}
                />
            </FieldForm>
            <SubmitButton onClick={onSubmit}>
                Создать
            </SubmitButton>
        </>
    )
}
