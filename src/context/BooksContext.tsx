// step 8 Make it a Clind Component 
"use client";

import { createContext, ReactNode, useState } from "react";

//step 1 :- Creat a Context  from react
export const BooksContext = createContext({});
// step 6:- inside props Resibe children and gib type 

const BooksProvider = ({children}:{children:ReactNode}) => {
  {
    /* step 3:- Make 2 stade  */
  }
  const [readBooks, setReadBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  {
    /* step 4 : make a object to sent all state as a Proms */
  }
  const SharedData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };
  {
    /* step 2 :- return context /       */
    // step 5:- send object as a value 
    // step 6:Call {children}
  }
  return <BooksContext.Provider value={SharedData}>{children}</BooksContext.Provider>;
};

export default BooksProvider;
