import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Item(props){
    return(
        <Card className='cardProducto'>
        <Card.Body className="title">{props.title}</Card.Body>
        <Card.Img src={props.image} className='cardProductoImg'></Card.Img>
        <Card.Footer>
        <Link to={`/item/${props.id}`}>
        <Button className='cardProductoBtn'>Detalles</Button>
        </Link>
        </Card.Footer>
        </Card>
        )
}

export default Item