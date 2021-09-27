import {Component} from "react";

class Category extends Component {
    state = {
        hovered: false
    }

    onBtnMouseEnter = () => {
        this.setState({hovered: true})
    }

    onBtnMouseLeave = () => {
        this.setState({hovered: false})
    }

    onClick = () => {
        this.props.changeCategory(this.props.id)
    }

    render() {
        return <div
            className={"category" + (this.state.hovered ? " btn-hovered" : "")}
            onClick={this.onClick}
            onMouseEnter={this.onBtnMouseEnter}
            onMouseLeave={this.onBtnMouseLeave}
        >
            {this.props.name}
        </div>
    }
}

export default Category