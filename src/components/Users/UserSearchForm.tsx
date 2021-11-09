import {Field, Form, Formik} from "formik";
import React from "react";
import {FilterType} from "../../Redux/users-reducer";

export type UsreSearchFormObjectType = {
    term: string
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}

export const UserSearchForm: React.FC<PropsType> = (props) => {
    const submit = (values: FilterType, {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}) => {
        props.onFilterChanged(values);
    }
    return <div>
        <Formik
            initialValues={{ term: '' }}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="text" name="term" />
                    <button type="submit" disabled={isSubmitting}>
                        Search
                    </button>
                </Form>
            )}
        </Formik>
    </div>
}
