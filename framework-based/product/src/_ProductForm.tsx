import { Dispatch, SetStateAction, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Product from "./domain/entities/Product";
import { addNewProduct, updateProducts } from "./_ProductController";

export default function ProductForm(props: { listProducts: Product[]; setProducts: Dispatch<SetStateAction<Product[]>>; }){
    const [name, setName] = useState('')
    const [sku, setSku] = useState('')
    const [price, setPrice] = useState(0)

    return (
        <Form>
        <Form.Group className="mb-3" controlId="formProductName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="productName" placeholder="Product name" value={name} onChange={e => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductPrice">
          <Form.Label>Product Price ($)</Form.Label>
          <Form.Control type="productPrice" placeholder="Product Price" value={price} onChange={e => setPrice(+e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSku">
          <Form.Label>SKU</Form.Label>
          <Form.Control type="sku" placeholder="SKU" value={sku} onChange={e => setSku(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => {
            e.preventDefault();
            setName('')
            setSku('')
            setPrice(0)
            let product = addNewProduct(name, sku, price)
            updateProducts(props.listProducts, props.setProducts, product)
        }}>
          Submit
        </Button>
      </Form>
    )
}

