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

    render() {
        return <div
            className={"category" + (this.state.hovered ? " btn-hovered" : "")}
            onMouseEnter={this.onBtnMouseEnter}
            onMouseLeave={this.onBtnMouseLeave}
        >
            {this.props.name}
        </div>
    }
}

export default Category