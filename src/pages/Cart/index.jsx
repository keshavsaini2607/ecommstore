import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout";
import {
   increaseQuantity,
   decreaseQuantity,
   removeFromCart,
   clearCart,
} from "../../shared/cartSlice";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Cart = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [orderLoading, setOrderLoading] = useState(false);
   const [countdown, setCountdown] = useState(10);
   var dateNow = new Date();
   let dummyDeliveryDate = new Date(
      dateNow.setDate(dateNow.getDate() + 14)
   ).toDateString();
   const { cartItems } = useSelector((state) => state.cartSlice);
   console.log({ cartItems });

   const increase = (item) => dispatch(increaseQuantity(item));
   const decrease = (item) => dispatch(decreaseQuantity(item));
   const remove = (item) => dispatch(removeFromCart(item));
   const getTotal = () => {
      let total = 0;
      cartItems.map((item) => {
         total += item.price * item.quantity;
      });
      return total;
   };

   const completeOrder = () => {
      setOrderLoading(true);
      var handle = setInterval(() => {
         if (countdown > 0) setCountdown((p) => p - 1);
      }, 1000);

      setTimeout(() => {
         clearInterval(handle);
         dispatch(clearCart());
         navigate("/", { replace: true });
      }, 10000);
   };

   return (
      <Layout>
         <div className="flex h-[calc(100vh-10vh)] w-[100vw] overflow-hidden">
            <div className="w-[40%] h-[calc(100vh-10vh)] bg-gray-200 p-4 overflow-scroll">
               <span className="text-xl capitalize">You shopping cart</span>
               {cartItems.map((item) => (
                  <div className="flex flex-col gap-3 items-center mb-5 border-b-[1px] border-b-gray-500 p-2 mt-4">
                     <div className="flex gap-4">
                        <img
                           src={item.image}
                           alt="item_image"
                           className="w-[15%] h-[15%]"
                        />
                        <div className="flex flex-col">
                           <span className="flex items-center gap-4">
                              {item.title}{" "}
                              <AiFillDelete
                                 className="cursor-pointer"
                                 onClick={() => remove(item)}
                              />{" "}
                           </span>
                           <span className="text-xs">{item.description}</span>
                        </div>
                     </div>
                     <div className="border-[1px] border-pink-800">
                        <span
                           className="px-2 cursor-pointer "
                           onClick={() => decrease(item)}
                        >
                           -
                        </span>
                        <span className="px-2 border-l-[1px] border-l-pink-800 border-r-[1px] border-r-pink-800">
                           {item.quantity}
                        </span>
                        <span
                           className="px-2 cursor-pointer"
                           onClick={() => increase(item)}
                        >
                           +
                        </span>
                     </div>
                  </div>
               ))}
            </div>
            <div className="p-4">
               {!orderLoading ? (
                  <React.Fragment>
                     <span className="text-xl">
                        {cartItems.length > 0 ? "Shopping Summary" : "Your cart is empty add something to continue shopping"}
                     </span>
                     <div className="flex flex-col mt-5 border-b-[1px] border-b-gray-500">
                        {cartItems.map((item) => (
                           <span className="mb-3">
                              {item.title}{" "}
                              <span className="text-pink-800">
                                 x {item.quantity} ($
                                 {item.price * item.quantity})
                              </span>
                           </span>
                        ))}
                     </div>
                     {
                        cartItems.length > 0 && (
                           <div>Grand Total: ${getTotal()}</div>
                        )
                     }
                     {cartItems.length > 0 && (
                        <button
                           className="bg-pink-800 text-white px-4 py-2 rounded-md mt-10"
                           onClick={completeOrder}
                        >
                           Complete Payment
                        </button>
                     )}
                  </React.Fragment>
               ) : (
                  <div className="flex flex-col">
                     <span className="text-2xl text-pink-800 capitalize">
                        Thank you for purchasing with us.
                     </span>
                     <span>Your order will be delivered soon</span>
                     <span>
                        Your total order amount is ${getTotal()} and the same
                        will be delivered on or before {dummyDeliveryDate}
                     </span>
                     <span className="text-2xl text-pink-800 mt-5">
                        Redirecting to home in: {countdown}
                     </span>
                  </div>
               )}
            </div>
         </div>
      </Layout>
   );
};

export default Cart;
