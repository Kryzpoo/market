import React from 'react'
import { connect } from 'react-redux'
import Categories from '../components/Categories'
import { handleGetCategories } from '../redux/actions/CategoriesActions'

class CategoriesContainer extends React.Component {
    render() {
        const {data, changeCategory, handleGetCategories} = this.props
        return (
            <Categories
                data={data}
                handleGetCategories={handleGetCategories}
                changeCategory={changeCategory}
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
        handleGetCategories: () => dispatch(handleGetCategories()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesContainer)