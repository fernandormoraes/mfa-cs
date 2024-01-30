import Product from "../entities/Product";

export default interface ProductRepository{
    FindAll(): Product[]
    Save(product: Product) : Product;
}
