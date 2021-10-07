import React, {Component} from "react";
import Product from "./Product";
import Pagination from "./Pagination";
import {tryRenderUnsuccessfully} from "../utils/utils";

const ELEMENTS_PER_PAGE = 20

class Products extends Component {
    render() {
        const {onPageClick, data} = this.props
        const {productsCount, products, isLoading, message} = data

        tryRenderUnsuccessfully(isLoading, message)

        const productElements = products.map(data => {
                return (
                    <Product
                        key={data.id}
                        name={data.name}
                        price={data.price}
                    />
                )
            })

        return (
            <div className="products-content">
                <div className="products-block">
                    {productElements}
                </div>
                <Pagination
                    elementsPerPage={ELEMENTS_PER_PAGE}
                    elementsCount={productsCount}
                    onPageClick={onPageClick}
                />
            </div>
        )
    }
}

export default Products