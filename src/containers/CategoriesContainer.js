import React from 'react'
import { connect } from 'react-redux'
import Categories from '../components/Categories'
import { handleGetCategories } from '../redux/actions/CategoriesActions'

class CategoriesContainer extends React.Component {
    render() {
        const { categories, getCategories, changeCategory } = this.props
        return (
            <Categories
                data={categories}
                handleGetCategories={getCategories}
                changeCategory={changeCategory}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        categories: store.categories,
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