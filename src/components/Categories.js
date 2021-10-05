import React, {Component} from "react";
import Category from "./Category"
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
                <Category
                    key={data.id}
                    id={data.id}
                    name={data.name}
                    changeCategory={changeCategory}
                />
            )
        })

        return (
            <div className={'categories'}>
                {categoryElements}
            </div>
        )
    }
}

export default Categories
