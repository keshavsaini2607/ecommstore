import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout";
import { useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { addToCart } from "../../shared/cartSlice";
import { getAllProducts } from "../../apis/products";
import { BsChevronDown } from "react-icons/bs";

const Product = () => {
   const [allProducts, setAllProducts] = useState([]);
   const [productDetails, setProductDetails] = useState(null);
   const [searchParams] = useSearchParams();
   const [loading, setLoading] = useState(false);
   const [quantity, setQuantity] = useState(1);
   const [showDropDown, setShowDropDown] = useState(false);
   const dispatch = useDispatch();
   let itemIndex = searchParams.get("product_id");

   const addProduct = (product) => {
      let obj = {
         ...product,
         quantity: quantity,
      };
      dispatch(addToCart(obj));
   };

   useEffect(() => {
      let attached = true;

      if (attached) {
         setLoading(true);
         (async () => {
            const products = await getAllProducts();
            setAllProducts(products);
            let index = products.findIndex((item) => item.id == itemIndex);
            console.log(products[index]);
            setQuantity(products[index].quantity || 1);
            setProductDetails(products[index]);
         })();

         setLoading(false);
      }

      return () => {
         attached = false;
      };
   }, []);

   const increase = () => setQuantity((p) => p + 1);
   const decrease = () => setQuantity((p) => p - 1);

   if (loading) {
      return <Loading />;
   }

   return (
      <Layout>
         <div className="w-[100%] h-[calc(100vh-10vh)] flex">
            <div className="w-[40%] h-[100%] p-4 flex flex-col items-center">
               <img
                  src={productDetails?.image}
                  alt="image"
                  className="w-[50%] h-[50%]"
               />
               <span className="text-xl mt-5">{productDetails?.title}</span>
               <span className="text-xl mt-5">
                  Rating: {productDetails?.rating.rate} / 5
               </span>
               <span className="text-xl mt-5">
                  Total Ratings: {productDetails?.rating.count}
               </span>
            </div>
            <div className="w-[60%] p-10">
               <span className="capitalize bg-gray-300 px-4 py-2 rounded-full">
                  {productDetails?.category}
               </span>
               <p className="mt-5">{productDetails?.description}</p>
               <p className="mt-5">Select Quantity</p>
               <div className="border-[1px] relative border-pink-800 w-max mt-1 px-3 flex items-center gap-3 cursor-pointer text-pink-800" onClick={() => setShowDropDown(p => !p)}>
                  {quantity} <BsChevronDown />
                  {showDropDown && (
                     <div className="absolute bg-gray-100 w-[100%] left-0 -bottom-[6.2rem] border-[1px] border-pink-800">
                        <ul>
                           <li
                              className="hover:bg-gray-200 px-2"
                              onClick={() => setQuantity(1)}
                           >
                              1
                           </li>
                           <li
                              className="hover:bg-gray-200 px-2"
                              onClick={() => setQuantity(2)}
                           >
                              2
                           </li>
                           <li
                              className="hover:bg-gray-200 px-2"
                              onClick={() => setQuantity(3)}
                           >
                              3
                           </li>
                           <li
                              className="hover:bg-gray-200 px-2"
                              onClick={() => setQuantity(4)}
                           >
                              4
                           </li>
                        </ul>
                     </div>
                  )}
               </div>
               <button
                  className="bg-pink-800 text-white py-4 px-2 w-[50%] mt-10"
                  onClick={() => addProduct(productDetails)}
               >
                  Add To Cart
               </button>
            </div>
         </div>
      </Layout>
   );
};

export default Product;
