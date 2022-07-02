export const getPosts = async () => {
  const response = await fetch(
    "https://devto-72d84-default-rtdb.firebaseio.com/posts.json"
  );
  const data = await response.json();
  return data;
};

//FB: https://console.firebase.google.com/project/reto-react-73a4b/database/reto-react-73a4b-default-rtdb/data/~2F

//mongoDB mongodb+srv://alanguerrerog:JNfX55zoQNsBW3BV@cluster0.aweaow5.mongodb.net/devto_reto?retryWrites=true&w=majority

//
