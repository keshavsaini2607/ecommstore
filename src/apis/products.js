import axios from 'axios';

export const getAllCategories = async() => {
    try {
        const categories = await axios.get('https://fakestoreapi.com/products/categories');
        return categories.data;
    } catch (error) {
        console.log(error);
    }
}

export const getAllProducts = async() => {
    try {
        const products = await axios.get('https://fakestoreapi.com/products');
        return products.data;
    } catch (error) {
        console.log(error);
    }
}

export const getCategoryProducts = async(category) => {
    try {
        console.log({category})
        const products = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        return products.data;
    } catch (error) {
        console.log(error);
    }
}