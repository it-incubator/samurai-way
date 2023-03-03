import { Post } from "./post/Post"

export const MyPosts = () => {
    return (
      <>
        <div className="newPost">
            <textarea></textarea>
            <button>New Post</button>
        </div>
        <div className="posts">
          <Post message = 'Hello' like = {15} />
          <Post message = 'How are you?' like = {3}/>
        </div>
      </>
    )
}