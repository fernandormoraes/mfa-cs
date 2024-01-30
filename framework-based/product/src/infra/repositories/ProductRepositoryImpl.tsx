import Product from "@/domain/entities/Product";
import ProductRepository from "@/domain/repositories/ProductRepository";

export default class ProductRepositoryImpl implements ProductRepository{
    private static instance: ProductRepositoryImpl;

    private constructor() { }

    public static getInstance(): ProductRepositoryImpl {
        if (!ProductRepositoryImpl.instance) {
            ProductRepositoryImpl.instance = new ProductRepositoryImpl();
        }

        return ProductRepositoryImpl.instance;
    }

    FindAll(): Product[] {
        let itens = window.localStorage.getItem("products");

        if(!itens) return [];

        return JSON.parse(itens);
    }

    Save(product: Product): Product {
        let productList = this.FindAll()

        const lastProduct = productList.at(-1)

        if(!lastProduct){
            const newProduct: Product = new Product(1, product.name, product.sku, product.price)

            window.localStorage.setItem("products", JSON.stringify([newProduct]));

            return newProduct;
        }

        const newProduct: Product = new Product(lastProduct!.id + 1, product.name, product.sku, product.price)

        productList.push(newProduct);

        window.localStorage.setItem("products", JSON.stringify(productList));

        return newProduct;
    }

}
