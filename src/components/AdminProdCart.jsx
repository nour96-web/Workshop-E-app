import React from 'react'
import { Button, Card } from 'react-bootstrap'
import AdminEditProd from './AdminEditProd'

const AdminProdCart = ({el, del, edit }) => {
  return (
    <div>
      <Card style={{ width: '18rem' , height: "35rem", margin : "25px" }}>
    <Card.Img variant="top" src={el.imgUrl} style={{width: "100%", height: "250px", objectFit:"cover"}} />
    <Card.Body>
      <Card.Title>{el.name}</Card.Title>
      <Card.Text style={{color:"red", textDecoration:"line-through"}}>Old price : {el.Price}</Card.Text>
      <Card.Text>Discount : {el.Discount}%</Card.Text>
      <Card.Text style={{color:"green"}}>{`Final price : ${el.Price-(el.Price*el.Discount)/100} $`} </Card.Text>
      <AdminEditProd el={el} edit={edit} />
      <Button variant="danger" onClick={()=>del(el.id)}>Delete</Button>
    </Card.Body>
  </Card>
  </div>
  )
}

export default AdminProdCart