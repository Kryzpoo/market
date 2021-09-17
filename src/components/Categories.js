import {Component} from "react";
import Category from "./Category"

class Categories extends Component {
    componentDidMount() {
        this.props.handleGetCategories()
    }

    render() {
        const {isLoading, message, categories} = this.props
        if (isLoading)
            return <p>Загрузка...</p>

        if (message) {
            console.error(message)
            return <p>При загрузке категорий произошла ошибка</p>
        }

        let categoryElements = categories.map(data => {
            return (
                <Category
                    key={data.id}
                    name={data.name}
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
