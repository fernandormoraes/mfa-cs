export default class Product{
    readonly id: number;
    readonly name: string;
    readonly sku: string;
    readonly price: number;

    constructor(id: number, name: string, sku: string, price: number){
        this.id = id;
        this.name = name;
        this.sku = sku;
        this.price = price;
    }
}
