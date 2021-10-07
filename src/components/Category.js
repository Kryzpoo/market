import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";

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
        const {id, name} = this.props

        return (
            <Link to={`/catalog?category=${id}&page=1`}>
                <div
                    className={"category" + (this.state.hovered ? " btn-hovered" : "")}
                    onClick={this.onClick}
                    onMouseEnter={this.onBtnMouseEnter}
                    onMouseLeave={this.onBtnMouseLeave}
                >
                {name}
                </div>
            </Link>
        )
    }
}

export default withRouter(Category)