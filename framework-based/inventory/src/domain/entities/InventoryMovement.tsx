import { MovementType } from "./MovementType";

export default class InventoryMovement{
    readonly id: number;
    readonly idProduct: number;
    readonly amount: number;
    readonly movementType: MovementType;
    readonly createdDate: Date

    constructor(id: number, idProduct: number, amount: number, movementType: MovementType){
        this.id = id;
        this.idProduct = idProduct;
        this.amount = amount;
        this.movementType = movementType;
        this.createdDate = new Date();
    }
}


