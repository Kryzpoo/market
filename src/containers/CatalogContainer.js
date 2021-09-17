import React from 'react'
import { connect } from 'react-redux'
import Catalog from '../components/Catalog'
import { handleGetCatalog } from '../actions/CatalogActions'

class CatalogContainer extends React.Component {
    render() {
        const { catalog, getCatalog } = this.props
        return (
            <Catalog
                isLoading={catalog.isLoading}
                productsCount={catalog.productsCount}
                products={catalog.products}
                message={catalog.message}
                handleGetCatalog={getCatalog}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        catalog: store.catalog,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCatalog: () => dispatch(handleGetCatalog()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CatalogContainer)