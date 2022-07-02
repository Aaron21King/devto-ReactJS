export const getPosts = async () => {
    const response = await fetch(
      "mongodb+srv://alanguerrerog:JNfX55zoQNsBW3BV@cluster0.aweaow5.mongodb.net/devto_reto?retryWrites=true&w=majority"
    );
    const data = await response.json();
    return data;
  };