import Table from 'react-bootstrap/Table';
import Product from './domain/entities/Product';

export default function ProductTable(props: { listProducts: Product[]; }){
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>SKU</th>
          </tr>
        </thead>
        <tbody>
          {props.listProducts.map(product => (
            <tr key={product.id}>
              <td key="id">{product.id}</td>
              <td key="name">{product.name}</td>
              <td key="price">${product.price}</td>
              <td key="sku">{product.sku}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
}
