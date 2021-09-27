import React, {Component} from "react";
import Product from "./Product";
import Pagination from "./Pagination";

const ELEMENTS_PER_PAGE = 20

class Products extends Component {
    render() {
        const {page, onPageClick, data} = this.props
        const {productsCount, products, isLoading, message} = data

        if (message) {
            console.error(message)
            return <p>При загрузке списка товаров произошла ошибка</p>
        }

        if (isLoading) {
            return <div className={'loader'}>Загрузка списка товаров...</div>
        }

        const [start, end] = Pagination.getElementIndexes(page, ELEMENTS_PER_PAGE)
        const productElements = products.slice(start, end).map(data => {
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