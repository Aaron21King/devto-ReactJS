export const deletePost = async (id) => {
  fetch(`https://devto-72d84-default-rtdb.firebaseio.com/posts/${id}.json`, {
    method: "DELETE",
  });
};
