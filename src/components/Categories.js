import React, {Component} from "react";
import Category from "./Category"

class Categories extends Component {
    componentDidMount() {
        this.props.handleGetCategories()
    }

    render() {
        const {data, changeCategory} = this.props
        const {categories, isLoading, message} = data

        if (message) {
            console.error(message)
            return <p>При загрузке списка категорий произошла ошибка</p>
        }

        if (isLoading) {
            return <div className={'loader'}>Загрузка категорий...</div>
        }

        let categoryElements = categories.map(data => {
            return (
                <Category
                    id={data.id}
                    key={data.id}
                    name={data.name}
                    changeCategory={changeCategory}
                />)
        })

        return (
            <div className={'categories'}>
                {categoryElements}
            </div>
        )
    }
}

export default Categories
