import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../services/posts/deletePost";
import { getPosts } from "../../services/posts/getPosts";

//Estilos

import "./CardComponent.scss";

// const CardComponent = (props) => {
//   const { tag, articles } = props;
//   return (
//     <div className="card">
//       <header>
//         <h3>{tag}</h3>
//         {tag === "Listings" && (
//           <a href="/#">
//             <small>see all</small>
//           </a>
//         )}
//       </header>
//       <ul>
//         {articles.map((a) => {
//           return (
//             <li key={a.id}>
//               <a href="/#">{a.mainTitle}</a> <br />
//               <small>{a.subText}</small>
//               {a.newarticle && <span>new</span>}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

export default function CardComponent() {
  //Local state
  const [posts, setPosts] = useState([]);

  //RRD
  const navigate = useNavigate();

  useEffect(() => {
    const list = async () => {
      const data = await getPosts();
      console.log(data);
      const parsedPosts = Object.keys(data).map((key) => {
        return { id: key, ...data[key] };
      });
      setPosts(parsedPosts);
    };
    list();
  }, []);

  useEffect(() => {
    deletePost("-N2Cm4uQLno8Z0hA6Usf");
  });

  const createPostCards = (post, index) => (
    <div key={index} className="postCard">
      <div className="divPhoto">
        <img className="userPhoto" src={post.userImg} />
      </div>
      <div className="userInfo">
        <h5>
          {post.name} {post.lastname}
        </h5>
        <h5>{post.date}</h5>
        <h2 className="title" onClick={() => navigate(post.id)}>
          {post.title}
        </h2>
      </div>
      {/* <h5>
          {post.hastags.forEach((element) => {
            <p>{element}</p>;
          })}
        </h5> */}
      <div className="reactionsInfo">
        <span className="reactInfo" id="reactions">
          <svg
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
          {post.reactions}
        </span>
        <span className="reactInfo" id="comments">
          <svg
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chat"
            viewBox="0 0 16 16"
          >
            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
          </svg>
          {!post.comments ? "Add a comment" : post.comments}
        </span>
        <span className="reactInfo" id="read">
          {post.read}
        </span>
        <button className="saveButton"> Save</button>
      </div>
    </div>
  );

  return <div>{posts.map(createPostCards)}</div>;
}
