import { useState } from 'react';
import InventoryRepositoryImpl from './repositories/InventoryRepositoryImpl';
import InventoryForm from './_InventoryForm';
import InventoryTable from './_InventoryTable';

const inventoryRepo: InventoryRepositoryImpl = InventoryRepositoryImpl.getInstance();

export default function InventoryPage(){
    const listMovements = inventoryRepo.FindAll()

    const [movements, setMovements] = useState(listMovements)

    return (
        <div>
            <h2>Add new inventory movement</h2>
            <InventoryForm listMovement={movements} setMovements={setMovements}></InventoryForm>
            <h2>Inventory Data</h2>
            <InventoryTable listMovement={movements}></InventoryTable>
        </div>
    )
}
