"use client"
import { TBook } from '@/app/type/books.type';
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({book} :{book:TBook}) => {
const { wishlist,setWishlist}=useContext(BooksContext);
const handelWishList=()=>{
    setWishlist([...wishlist,book])
    toast.success(`you have add "${book.bookName} to your wishlist"`);

}

    return (
          <button className="btn bg-cyan-500 text-white border-none px-8" onClick={()=>handelWishList()}>
              Wishlist
            </button>
    );
};

export default WishListButton;