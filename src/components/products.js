import React, {useContext} from "react";
import { Container, Card, Button } from "react-bootstrap";
import { DataContext} from "./context/dataprovider"
const Products = () =>{

    const value = useContext(DataContext);

    const [productos] = value.productos;

    console.log(productos)
    debugger;
    return(
        <>

        <Container>
           {productos.map((p)=>(

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Text>
                    {p.descripcion}
                    </Card.Text>
                    <Button variant="primary">Add to Car</Button>
                </Card.Body>
            </Card>
           ))} 
        </Container>
        </>
        
        
    );
}

export default Products;