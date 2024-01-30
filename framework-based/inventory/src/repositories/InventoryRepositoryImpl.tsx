import InventoryMovement from "@/domain/entities/InventoryMovement";
import InventoryRepository from "@/domain/repositories/InventoryRepository";


export default class InventoryRepositoryImpl implements InventoryRepository{
    private static instance: InventoryRepositoryImpl;

    private constructor() { }

    public static getInstance(): InventoryRepositoryImpl {
        if (!InventoryRepositoryImpl.instance) {
            InventoryRepositoryImpl.instance = new InventoryRepositoryImpl();
        }

        return InventoryRepositoryImpl.instance;
    }

    FindAll(): InventoryMovement[] {
        let itens = window.localStorage.getItem("inventory");

        if(!itens) return [];

        return JSON.parse(itens);
    }

    Save(inventoryMovement: InventoryMovement): InventoryMovement | null {
        if(!this.ProductExists(inventoryMovement.idProduct)){
            return null;
        }

        let inventoryList = this.FindAll()

        const lastInventory = inventoryList.at(-1)

        if(!lastInventory){
            const newMovement: InventoryMovement = new InventoryMovement(
                1,
                inventoryMovement.idProduct,
                inventoryMovement.amount,
                inventoryMovement.movementType
            )

            window.localStorage.setItem("inventory", JSON.stringify([newMovement]));

            return newMovement;
        }

        const newMovement: InventoryMovement = new InventoryMovement(
            lastInventory.id + 1,
            inventoryMovement.idProduct,
            inventoryMovement.amount,
            inventoryMovement.movementType
        )

        inventoryList.push(newMovement);

        window.localStorage.setItem("inventory", JSON.stringify(inventoryList));

        return newMovement;
    }

    ProductExists(idProduct: number): boolean{
        let itens = window.localStorage.getItem("products");

        console.log(itens)

        if(!itens) return false;

        return JSON.parse(itens).filter((e: { id: number; }) => e.id === idProduct).length > 0;
    }

}
