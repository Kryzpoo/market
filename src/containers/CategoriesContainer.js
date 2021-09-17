import React from 'react'
import { connect } from 'react-redux'
import Categories from '../components/Categories'
import { handleGetCategories } from '../actions/CategoriesActions'

class CategoriesContainer extends React.Component {
    render() {
        const { data, getCategories } = this.props
        return (
            <Categories
                isLoading={data.isLoading}
                categories={data.categories}
                message={data.message}
                handleGetCategories={getCategories}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        data: store.categories,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => dispatch(handleGetCategories()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesContainer)