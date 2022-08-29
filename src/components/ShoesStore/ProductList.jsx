import React, { Component } from 'react'

export default class ProductList extends Component {
  render() {
    const { productsData, setStateModal } = this.props
    return (
      <div className="card">
        <img src={productsData.image} alt="..." />
        <div className="card-body">
          <p>{productsData.name}</p>
          <p>{productsData.price} $</p>

          <div className='d-flex justify-content-between'>

            <button type="button" className='btn btn-dark mr-2' data-toggle="" data-target="#myModal">
              add to cart
              <i className='fa fa-cart-plus ml-2' ></i>
            </button>
            <button type="button" className='btn btn-success' data-toggle="modal" data-target="#myModal"
              onClick={() => setStateModal(productsData)}
            >
              Xem chi tiết
            </button>
          </div>


        </div>
      </div>
    )
  }
}
