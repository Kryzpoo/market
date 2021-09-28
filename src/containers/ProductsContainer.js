import React from 'react'
import {connect} from 'react-redux'
import Products from '../components/Products'
import {handleGetProducts} from '../redux/actions/ProductsActions'

class ProductsContainer extends React.Component {
    render() {
        const { products, handleGetProducts, onPageClick, page } = this.props

        return (
            <Products
                data={products}
                handleGetProducts={handleGetProducts}
                onPageClick={onPageClick}
                page={page}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        products: store.products,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleGetProducts: () => dispatch(handleGetProducts()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer)