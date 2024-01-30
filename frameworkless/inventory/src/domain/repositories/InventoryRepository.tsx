import InventoryMovement from "../entities/InventoryMovement";

export default interface InventoryRepository{
    FindAll(): InventoryMovement[]
    Save(inventoryMovement: InventoryMovement) : InventoryMovement | null;
}
