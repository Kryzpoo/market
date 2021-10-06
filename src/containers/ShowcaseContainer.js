import React, {Component, Fragment} from "react";
import {handleGetProducts} from '../redux/actions/ProductsActions';
import {connect} from "react-redux";
import CategoriesContainer from "./CategoriesContainer";
import ProductsContainer from "./ProductsContainer";
import {withRouter} from "react-router-dom";

class ShowcaseContainer extends Component {
    state = {
        isLoading: true,
        products: [],
        message: '',
        category: null,
        page: 1,
    }

    componentDidMount() {
        const category = this.getCategory()
        this.setState({category: category})
        this.props.handleGetProducts(category)
    }

    changeCategory = (category) => {
        this.setState({category: category, page: 1})
        this.props.handleGetProducts(category)
    }

    onPageClick = (num) => {
        this.setState({page: num})
    }

    getCategory = (props= null) => {
        props = props || this.props
        return new URLSearchParams(props.location.search).get('category')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const newCategory = this.getCategory(nextProps)
        if (this.getCategory() !== newCategory) {
            this.setState({category: newCategory})
            this.props.handleGetProducts(newCategory)
        }
        return this.props !== nextProps;
    }

    render() {
        const {page} = this.state

        return (
            <Fragment>
                <CategoriesContainer
                    changeCategory={this.changeCategory}
                />
                <ProductsContainer
                    onPageClick={this.onPageClick}
                    page={page}
                />
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleGetProducts: (category) => dispatch(handleGetProducts(category)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(withRouter(ShowcaseContainer))