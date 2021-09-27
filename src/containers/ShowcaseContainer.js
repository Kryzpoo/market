import React, {Component, Fragment} from "react";
import { handleGetProducts } from '../redux/actions/ProductsActions';
import {connect} from "react-redux";
import CategoriesContainer from "./CategoriesContainer";
import ProductsContainer from "./ProductsContainer";

class ShowcaseContainer extends Component {
    state = {
        isLoading: true,
        currentCategory: null,
        products: [],
        message: '',
        page: 1
    }

    componentDidMount() {
        this.props.handleGetProducts(this.state.currentCategory)
    }

    changeCategory = (category) => {
        this.setState({currentCategory: category, page: 1})
        this.props.handleGetProducts(category)
    }

    onPageClick = (num) => {
        this.setState({page: num})
    }

    render() {
        const {page, currentCategory} = this.state
        return (
            <Fragment>
                <CategoriesContainer
                    changeCategory={this.changeCategory}
                />
                <ProductsContainer
                    onPageClick={this.onPageClick}
                    category={currentCategory}
                    page={page}
                />
            </Fragment>
        )
    }
}

const mapStateToProps = store => {
    return {
        productsData: store.products,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleGetProducts: (category) => dispatch(handleGetProducts(category)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowcaseContainer)