import Product from "./domain/entities/Product"
import ProductRepositoryImpl from "./infra/repositories/ProductRepositoryImpl";

const productRepo: ProductRepositoryImpl = ProductRepositoryImpl.getInstance();

export function addNewProduct(name: string, sku: string, price: number) : Product{
    return productRepo.Save(new Product(0, name, sku, price))
}

export function updateProducts(listProducts: Product[], setProducts: React.Dispatch<React.SetStateAction<Product[]>>, newProduct: Product){
  const newListProducts = [...listProducts]
  newListProducts.push(newProduct)
  setProducts(newListProducts)
}
