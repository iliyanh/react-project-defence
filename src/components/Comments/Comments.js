export const Comments = () => {
    return (

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={""}>
                    <textarea name="comment" placeholder="Comment......" value={""} onChange={""}></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
    )
}
