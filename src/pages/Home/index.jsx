import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getCategoryProducts } from "../../apis/products";
import Categories from "../../components/Categories";
import Layout from "../../components/layout";
import ProductCard from "../../components/ProductCard";
import { changeLoading, setAllProducts } from "../../shared/mainSlice";
import Loading from "../../components/Loading";

const Home = () => {
   const [products, setProducts] = useState([]);
   const { loading } = useSelector((state) => state.mainSlice);
   const { selectedCategory } = useSelector((state) => state.categorySlice);
   const dispatch = useDispatch();

   useEffect(() => {
      let attached = true;

      if (attached) {
         (async () => {
            dispatch(changeLoading(true));
            if (selectedCategory !== "all") {
               const result = await getCategoryProducts(selectedCategory);
               setProducts(result);
            } else {
               const result = await getAllProducts();
               setProducts(result);
               dispatch(setAllProducts(result));
            }
            dispatch(changeLoading(false));
         })();
      }

      return () => {
         attached = false;
      };
   }, [dispatch, selectedCategory]);

   if (loading) {
      return <Loading />;
   }

   return (
      <Layout>
         <section className="w-[100%] h-[calc(100vh-10vh)] flex overflow-hidden">
            <div id="sidebar" className="w-[25%] h-[100%]">
               <Categories />
            </div>
            <div className="w-[75%] p-4 grid grid-cols-3 gap-4 overflow-scroll">
               {products.map((product) => (
                  <ProductCard content={product} key={product.id} />
               ))}
            </div>
         </section>
      </Layout>
   );
};

export default Home;
