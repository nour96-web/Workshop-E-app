import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const AdminEditProd = ({el, edit}) => {
  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
 // ---------------------------------------

 const [name, setName] = useState(el.name);
 const [imgURL, setImgURL] = useState(el.imgUrl);
 const [price, setPrice] = useState(el.Price);
 const [discount, setDiscount] = useState(el.Discount);
//---------------------------------------------
const handleSubmit = (e) => {
  e.preventDefault();

  if (name && imgURL && price && discount) {
    const editeProd = {
      id : el.id,
      name : name,
      imgUrl : imgURL,
      price : price,
      discount : discount
    } ;
    edit(editeProd);
    handleClose();
setDiscount(0);
setImgURL("");
setName("");
setPrice("");
  } else alert("fill the blanks");
};

//---------------------------------------------
  return (
    <div> <Button variant="primary" onClick={handleShow}>
    Edit
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Name"
            autoFocus
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Image Link</Form.Label>
          <Form.Control
            type="text"
            placeholder="Link"
            autoFocus
            value={imgURL}
            onChange={(e)=> setImgURL(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="Number"
            placeholder="Price"
            autoFocus
            value={price}
            onChange={(e)=> setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Discount</Form.Label>
          <Form.Control
            type="Number"
            placeholder="% of discount"
            autoFocus
            value={discount}
            onChange={(e)=> setDiscount(e.target.value)}
          />
        </Form.Group>
        
      <Button variant="primary" type="Submit">
        Save Changes
      </Button>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal></div>
  )
}

export default AdminEditProd