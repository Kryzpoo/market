import {Component} from "react";

class Product extends Component {
    state = {
        hovered: false
    }

    onBtnMouseEnter = () => {
        this.setState({hovered: true})
    }

    onBtnMouseLeave = () => {
        this.setState({hovered: false})
    }

    render() {
        const {name, price} = this.props
        return (
            <div
                className={"product" + (this.state.hovered ? " btn-hovered" : "")}
                onMouseEnter={this.onBtnMouseEnter}
                onMouseLeave={this.onBtnMouseLeave}
            >
                <img className="product-img"
                     src="http://localhost:3000/test-data/product1.jpg"
                     alt="Изображение"
                />
                <p className="product-name">{name}</p>
                <p className="product-price">{price}</p>
            </div>
        )
    }
}

export default Product