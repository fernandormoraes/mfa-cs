import Table from 'react-bootstrap/Table';
import InventoryMovement from './domain/entities/InventoryMovement';
import { MovementType } from './domain/entities/MovementType';

export default function InventoryTable(props: {listMovement: InventoryMovement[]}){
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {props.listMovement.map(movement => (
            <tr key={movement.id}>
              <td key="id">{movement.id}</td>
              <td key="name">{movement.idProduct}</td>
              <td key="amount">{movement.amount}</td>
              <td key="date">{new Date(movement.createdDate).toISOString()}</td>
              <td key = "type">{movement.movementType == MovementType.in ? "in": "out"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
}
