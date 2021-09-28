import {Component} from "react";
import {withRouter} from "react-router-dom";

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
        console.log(this.props)
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

export default withRouter(Category)