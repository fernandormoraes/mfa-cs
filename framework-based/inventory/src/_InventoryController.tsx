
import InventoryMovement from "./domain/entities/InventoryMovement";
import { MovementType } from "./domain/entities/MovementType";
import InventoryRepositoryImpl from "./repositories/InventoryRepositoryImpl";

const inventoryRepo: InventoryRepositoryImpl = InventoryRepositoryImpl.getInstance();

export function addNewMovement(idProduct: number, amount: number) : InventoryMovement | null{
    let movementType: MovementType = MovementType.in;

    if(amount < 0 ){
        movementType = MovementType.out;
    }

    return inventoryRepo.Save(new InventoryMovement(0, idProduct, amount, movementType))
}

export function updateMovements(listMovement: InventoryMovement[], setMovements: React.Dispatch<React.SetStateAction<InventoryMovement[]>>, newMovement: InventoryMovement){
  const newListMovements = [...listMovement]
  newListMovements.push(newMovement)
  setMovements(newListMovements)
}
