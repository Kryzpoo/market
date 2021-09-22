import {Component} from "react";
import CatalogProduct from "./CatalogProduct"
import Pagination from "./Pagination";

const ELEMENTS_PER_PAGE = 20

class Catalog extends Component {
    state = {
        pageNum: 1
    }

    componentDidMount() {
        this.props.handleGetCatalog()
    }

    onPageClick = (pageNum) => {
        this.setState({pageNum: pageNum})
    }

    render() {
        const {isLoading, productsCount, message, products} = this.props

        if (message) {
            console.error(message)
            return <p>При загрузке каталога произошла ошибка</p>
        }

        if (isLoading) {
            return <p>Загрузка каталога...</p>
        }

        const [start, end] = Pagination.getElementIndexes(this.state.pageNum, ELEMENTS_PER_PAGE)
        const productElements = products.slice(start, end).map(data => {
                return (
                    <CatalogProduct
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
                    onPageClick={this.onPageClick}
                />
            </div>
        )
    }
}

export default Catalog
