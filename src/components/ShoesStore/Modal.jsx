import React, { Component } from 'react'
export default class Modal extends Component {
    render() {
        const { content } = this.props
        return (
            <div>
                {/* <div className='d-flex justify-content-between'>

                    <button type="button" className='btn btn-dark mr-2' data-toggle="" data-target="#myModal">
                        add to cart
                        <i className='fa fa-cart-plus ml-2' ></i>
                    </button>
                    <button type="button" className='btn btn-success' data-toggle="modal" data-target="#myModal"
                        onClick={() => setStateModal((content))}
                    >
                        Xem chi tiết
                    </button>
                </div> */}
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">

                            {/* <!-- Modal Header --> */}
                            <div className="modal-header">
                                <h4 className="modal-title">Thông tin chi tiết sản phẩm</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            {/* <!-- Modal body --> */}
                            <div className="modal-body">

                                <div className="row">
                                    <div className="col-4 ">
                                        <img className='img-fluid' style={{ width: '400px' }} src={content.image} alt="..." />
                                    </div>
                                    <div className="col-8">
                                        <h3>{content.name}</h3>
                                        <p>{content.description}</p>
                                        <p style={{ background: '#ff0000', color: '#fff', padding: '5px', width: '10%' }}>{content.price} $</p>
                                        <button className='btn btn-warning'>-</button>
                                        <span className='mx-3'>{content.quantity}</span>
                                        <button className='btn btn-warning'>+</button>

                                    </div>
                                </div>
                            </div>

                            {/* <!-- Modal footer --> */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
