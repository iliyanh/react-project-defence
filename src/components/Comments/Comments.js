import { useForm } from "../../hooks/useForm"

export const Comments = ({
    onCommentSubmit,
}) => {
    const {values , changeHandler, onSubmit} = useForm({
        comment: "",
    }, onCommentSubmit)
    return (

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onSubmit}>
                    <textarea name="comment" value={values.comment} onChange={changeHandler}></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
    )
}
