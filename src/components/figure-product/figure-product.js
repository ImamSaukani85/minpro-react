import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const FigureProduct = (props) => {
  console.log(props)
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="col-md-6">
                <img src={props.dataProduct.image} alt={props.dataProduct.name} height="400px" width="400px"></img>
            </div>
          </Col>
          <Col>
           <div>
                <h4 className="text-uppercase text-black-50">{props.dataProduct.category}</h4>
                <h1 className="display-5">{props.dataProduct.name}</h1>
                <h5 className="my-4">Available Stock :{props.dataProduct.quantity}</h5>
                <h3 className="display-6 fw-bold my-4">Rp {props.dataProduct.price} </h3>
                <p className="lead">{props.dataProduct.description}</p>
      </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FigureProduct