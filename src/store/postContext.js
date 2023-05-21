import { createContext, useState } from "react";

export const postContext = createContext(null);

function Post({ children }) {
  const [postDetials, setPost] = useState(null);
  return (
    <postContext.Provider value={{ postDetials, setPost }}>
      {children}
    </postContext.Provider>
  );
}

export default Post;
