import React from "react";
import s from './MyPosts.module.css'
import {Posts} from "./Post/Posts";
import {MyPostPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validation/validator";

export const MyPosts = (props: MyPostPropsType) => {
    let postsElement = props.posts.map((p) => <Posts id={p.id} message={p.message} likeCount={p.likeCount}/>)

    const addPost = (value: FormDataType) => {
        props.addPost(value.newPost)
    }

    return (
        <div className={s.postBlock}>
            <h3> New post </h3>

            <NewPostReduxForm onSubmit={addPost}/>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>

    )
}
type FormDataType = {
    newPost: string
}

const maxLength = maxLengthCreator(10)

export  const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                validate={[required, maxLength]}
                component={"textarea"} name={"newPost"} placeholder={"Enter message"}/>
        </div>
        <div>
            <button>Add post</button>
            <button>Remove</button>
        </div>
    </form>
};
const NewPostReduxForm = reduxForm<FormDataType>(
    {
        form: 'newPost',
    }
)(AddPostForm)

const newMessage = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <NewPostReduxForm onSubmit={onSubmit}/>
        </div>
    )

}