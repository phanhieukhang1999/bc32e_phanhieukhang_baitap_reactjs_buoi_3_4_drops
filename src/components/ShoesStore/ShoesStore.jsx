import React, { Component } from 'react'
import data from './data.json'
import Modal from './Modal'
import ProductList from './ProductList'
export default class ShoesStore extends Component {
  state = {
    productsDetail: {
      "id": 1,
      "name": "Adidas Prophere",
      "alias": "adidas-prophere",
      "price": 350,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 995,
      "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    },
  }
  setStateModal = (products) => {
    this.setState({
      productsDetail: products
    })
  }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Shoes Shop</h1>
        <div className="row">
          <div className="col-2">
            <p>Home</p>
            <p>Shop</p>
          </div>
          <div className="col-10">
            <div className="row">
              {
                data.map((products) => {
                  return (
                    <div className='col-4 mt-4' key={products.id}>

                      <ProductList productsData={products}
                        setStateModal={this.setStateModal}>

                      </ProductList>
                      <Modal content={this.state.productsDetail} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
