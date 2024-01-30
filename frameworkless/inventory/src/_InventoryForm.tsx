import { Dispatch, SetStateAction, useState } from "react";
import { Button, Form } from "react-bootstrap";
import InventoryMovement from "./domain/entities/InventoryMovement";
import { addNewMovement, updateMovements } from "./_InventoryController";

export default function InventoryForm(props: { listMovement: InventoryMovement[]; setMovements: Dispatch<SetStateAction<InventoryMovement[]>>; }) {
  const [idProduct, setIdProduct] = useState<number>(0)
  const [amount, setAmount] = useState<number>(0.0)

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formProductId">
        <Form.Label>Product ID</Form.Label>
        <Form.Control type="productId" placeholder="Product ID" value={idProduct} onChange={e => setIdProduct(+e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formProductAmount">
        <Form.Label>Product Amount</Form.Label>
        <Form.Control type="productAmount" placeholder="Product Amount" value={amount} onChange={e => setAmount(+e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={(e) => {
        e.preventDefault();
        setIdProduct(0)
        setAmount(0.0)

        let movement = addNewMovement(idProduct, amount)

        if (movement) {
          updateMovements(props.listMovement, props.setMovements, movement)
        } else {
          alert(`Product ${idProduct} not found`)
        }
      }}>
        Submit
      </Button>
    </Form>
  )
}

