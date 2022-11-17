import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../apis/products";
import { changeCategory } from '../../shared/categorySlice';

const Categories = () => {
   const [categories, setCategories] = useState([]);
   const { selectedCategory } = useSelector((state) => state.categorySlice);
   const dispatch = useDispatch();

   useEffect(() => {
      let attached = true;

      if (attached) {
         (async () => {
            const result = await getAllCategories();
            setCategories([...result, "all"]);
         })();
      }

      return () => {
         attached = false;
      };
   }, []);

   const change = (name) => {
      dispatch(changeCategory(name));
   }

   return (
      <div className="bg-gray-50 p-4 h-[100%]">
         <span className="text-lg capitalize text-gray-700">
            Select from a wide range of products
         </span>
         <ul className="mt-5">
            {categories.sort().map((category) => (
               <li className="category__item" key={category}>
                  <input type="radio" checked={selectedCategory === category} onChange={() => change(category)} />
                  <span>{category}</span>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Categories;
