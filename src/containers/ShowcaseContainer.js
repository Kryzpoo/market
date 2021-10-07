import React, {Component, Fragment} from "react";
import {handleGetProducts} from '../redux/actions/ProductsActions';
import {connect} from "react-redux";
import CategoriesContainer from "./CategoriesContainer";
import ProductsContainer from "./ProductsContainer";
import {withRouter} from "react-router-dom";
import {getQueryParams} from "../utils/utils";

class ShowcaseContainer extends Component {
    state = {
        isLoading: true,
        products: [],
        message: '',
        params: {
            category: null,
            page: 1,
        }
    }

    componentDidMount() {
        const params = getQueryParams(this.props)
        if (Object.keys(params).length > 0) {
            this.setState({params: params})
        }
        this.props.handleGetProducts(params)
    }

    changeCategory = (category) => {
        const newParams = {category: category, page: 1}
        this.setState({params: newParams})
        this.props.handleGetProducts(newParams)
    }

    onPageClick = (page) => {
        const newParams = {category: this.state.params.category, page: page}
        this.setState({params: newParams})
        this.props.handleGetProducts(newParams)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const newParams = getQueryParams(nextProps)
        if (JSON.stringify(this.state.params) !== JSON.stringify(newParams)) {
            this.setState({params: newParams})
            this.props.handleGetProducts(newParams)
        }
        return true;
    }

    render() {
        return (
            <Fragment>
                <CategoriesContainer
                    changeCategory={this.changeCategory}
                />
                <ProductsContainer
                    onPageClick={this.onPageClick}
                    page={this.state.params.page}
                />
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleGetProducts: (params) => dispatch(handleGetProducts(params)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(withRouter(ShowcaseContainer))