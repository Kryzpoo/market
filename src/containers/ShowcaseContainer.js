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
        page: 1
    }

    componentDidMount() {
        this.props.handleGetProducts(this.getCategory())
    }

    changeCategory = (category) => {
        this.setState({page: 1})
        this.props.handleGetProducts(category)
    }

    onPageClick = (num) => {
        this.setState({page: num})
    }

    getCategory = () => {
        return this.props.match.params.categoryId
    }

    render() {
        const {page} = this.state

        const urlParams = new URLSearchParams(this.props.location.search)

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