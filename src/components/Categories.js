import React, {Component} from "react";
import Category from "./Category"
import {BrowserRouter, Link, Route} from "react-router-dom";
import {tryRenderUnsuccessfully} from "../utils/utils";

class Categories extends Component {
    componentDidMount() {
        this.props.handleGetCategories()
    }

    render() {
        const {data, changeCategory} = this.props
        const {categories, isLoading, message} = data

        tryRenderUnsuccessfully(isLoading, message)

        let categoryElements = categories.map(data => {
            return (
                <Link to={`/products?category=${data.id}`} key={data.id}>
                    <Category
                        id={data.id}
                        name={data.name}
                        changeCategory={changeCategory}
                    />
                </Link>)
        })

        return (
            <BrowserRouter>
                <div className={'categories'}>
                    {categoryElements}
                </div>
                <Route path={'/products?category=:categoryId'} component={Category}/>
            </BrowserRouter>
        )
    }
}

export default Categories
