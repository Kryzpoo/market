import React from 'react'
import {connect} from 'react-redux'
import Products from '../components/Products'

class ProductsContainer extends React.Component {
    render() {
        const {data, onPageClick} = this.props

        return (
            <Products
                data={data}
                onPageClick={onPageClick}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        data: store.products,
    }
}

export default connect(
    mapStateToProps
)(ProductsContainer)