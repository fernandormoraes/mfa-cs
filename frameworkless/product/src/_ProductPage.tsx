import { useState } from 'react';
import ProductForm from './_ProductForm';
import ProductTable from './_ProductTable';
import ProductRepositoryImpl from './infra/repositories/ProductRepositoryImpl';

const productRepo: ProductRepositoryImpl = ProductRepositoryImpl.getInstance();

export default function ProductPage(){
    const listProducts = productRepo.FindAll()

    const [products, setProducts] = useState(listProducts)

    return (
        <div>
            <h2>Add new product</h2>
            <ProductForm listProducts={products} setProducts={setProducts}></ProductForm>
            <h2>Product Data</h2>
            <ProductTable listProducts={products}></ProductTable>
        </div>
    )
}
