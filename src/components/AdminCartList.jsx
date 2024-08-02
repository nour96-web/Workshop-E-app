import React from 'react'
import AdminProdCart from './AdminProdCart'

const AdminCartList = ({prod , search, del, edit }) => {
  return (
    <div style={{display:"flex", flexWrap: "wrap", justifyContent:"space-evenly"}}>
    {prod.filter((el) => 
        el.name.trim().toUpperCase().includes(search.trim().toUpperCase()))
        .map((el) => <AdminProdCart key={el.id} el={el} del={del} edit={edit} /> )}
</div>
  )
}

export default AdminCartList