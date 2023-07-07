import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { CustomInput } from '../custom-input/CustomInput'
import { useDispatch } from 'react-redux'
import { addProductAction } from '../../pages/products/productAction'
import slugify from 'slugify'

export const NewProductForm = () => {
  const dispatch = useDispatch()

  const [form, setForm]= useState({
    status: "inactive"
  })
  

  const handleOnSubmit=  (e)=> {
    e.preventDefault()

   
    console.log(form)
    const slug = slugify(form.title,{lower:true, trim:true})
    dispatch(addProductAction({...form, slug}))
    
  }
  const handleOnChange = (e) => {
    e.preventDefault()
    const {name , value} = e.target
    setForm({ ...form, [name]:value})
   
    console.log(form)
   

  }

  const input = [
    {
      label: "Product Name",
      name: "title",
      type: "text",
      placeholder: "mobile phone",
      required: true,
    },
    {
      label: "SKU",
      name: "sku",
      type: "text",
      placeholder: "MB_KD8",
      required: true,
    },

    {
      label: "Price",
      name: "price",
      type: "number",
      placeholder: "34",
      required: true,
    },
    {
      label: "Qty",
      name: "qty",
      type: "number",
      placeholder: "33",
      required: true,
    },
    {
      label: "Sales Price",
      name: "salesPrice",
      type: "number",
      placeholder: "22",
    },
    {
      label: "Sales Start From",
      name: "salesStartAt",
      type: "date",
    },
    {
      label: "Sales End From",
      name: "salesEndAt",
      type: "date",
    },
    {
      label: "Product Description",
      name: "description",
      type: "text",
      as: "textarea",
      placeholder: "Product details ....",
      required: true,
      rows: 10,
    },
    
  ]
  return (
    <div>
      <Form
        className=" border p-5 shadow-lg rounded mt-3"
        onSubmit={handleOnSubmit}
      >
        <Row>
          <Col md="2">
            <Form.Group className="mb-3">
              <Form.Check
                name="status"
                type="switch"
                label="Status"
                onChange={handleOnChange}
              />
            </Form.Group>
         
          
            
          </Col>
          {
              input.map((item,i)=> (
                <CustomInput key={i} {...item}onChange={handleOnChange} />
              ))
            }
          
          <Col md="5">
            <div className="d-grid">
              <Button variant="primary" type="submit">
                Add New Product
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
export default NewProductForm
