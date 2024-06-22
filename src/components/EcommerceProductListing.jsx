import React, { useEffect, useState } from 'react';

const EcommerceProductListing = () => {
    const [products, setProducts] = useState([
        {name: 'Product 1', price: 100},
        {name: 'Product 2', price: 200},
        {name: 'Product 3', price: 300},
        {name: 'Product 4', price: 400},
        {name: 'Product 5', price: 500},
    ]);
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('price-asc');

    // useEffect(() => {
    //     const fetchProducts = async() => {
    //         const response = await fetch('https://fakestoreapi.com/products');
    //         const data = await response.json();
    //         setProducts(data);
    //     }
    //     fetchProducts();
    // },[]);

    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a,b) => {
        if(sort === 'price-asc') return a.price -b.price;
        if(sort === 'price-desc') return b.price - a.price;
        return 0;
    })

  return (
    <div>
        <h4>E-commerce Product Listing</h4>
        <div>
        <input style={{width: '250px'}} type='text' value={filter} onChange={e => setFilter(e.target.value)} placeholder='Search Products' />
        
        </div>
        <select value={sort} onChange={e => setSort(e.target.value)}>
            <option value='price-asc'>Price: Low To High</option>
            <option value='price-desc'>Price: High To Low</option>
        </select>
        
        <ul>
            {filteredProducts.map((product, index) => {
                return <li key={index}>{product.name} - {product.price} </li>
            })}
        </ul>
    </div>
  )
}

export default EcommerceProductListing;