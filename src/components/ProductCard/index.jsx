import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../shared/cartSlice";

const ProductCard = ({ content }) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const addProduct = (product) => {
      let obj = {
         ...product,
         quantity: 1,
      };
      dispatch(addToCart(obj));
   };

   return (
      <div className="w-[22vw] min-h-[30vw] border-[1px] border-gray-300 flex flex-col p-2">
         <a
            href={`/product?product_id=${content.id}`}
            target="_blank"
            rel="noreferrer"
            className="h-[38vh]"
         >
            <img
               src={content.image}
               alt="pr"
               className="w-[80%] h-[70%] mx-auto cursor-pointer"
            />
         </a>
         <div className="w-[100%] flex items-center justify-between mt-2">
            <span className="w-[80%] truncate" title={content.title}>
               {content.title}
            </span>
            <span>{content.rating.rate} / 5</span>
         </div>
         <span className="text-lg font-semibold">${content.price}</span>
         <button
            className="bg-pink-800 text-white py-4 px-2 mt-2"
            onClick={() => addProduct(content)}
         >
            Add To Cart
         </button>
      </div>
   );
};

export default ProductCard;
