import {Component} from "react";

class Pagination extends Component {
    static getElementIndexes = (pageNum, elementsPerPage) => {
        const start = ((pageNum - 1) * elementsPerPage)
        const end = pageNum * elementsPerPage
        return [start, end]
    }

    getPagesCount = () => {
        const {elementsCount, elementsPerPage} = this.props
        return Math.ceil(elementsCount / elementsPerPage)
    }

    render() {
        const pagesCount = this.getPagesCount()
        const pageElements = [];

        for (let i = 1; i <= pagesCount; i++) {
            pageElements.push(
                <PaginationButton
                    key={i}
                    value={i}
                    onPageClick={this.props.onPageClick}
                />)
        }

        return pagesCount > 1 ?
            <div className="pagination-block">{pageElements}</div>
            : null
    }
}

class PaginationButton extends Component {
    state = {
        hovered: false
    }

    onPaginationPageClick = (e) => {
        const pageNum = parseInt(e.currentTarget.innerText)
        this.props.onPageClick(pageNum)
    }

    onBtnMouseEnter = () => {
        this.setState({hovered: true})
    }

    onBtnMouseLeave = () => {
        this.setState({hovered: false})
    }

    render() {
        return (
            <span
                onClick={this.onPaginationPageClick}
                onMouseEnter={this.onBtnMouseEnter}
                onMouseLeave={this.onBtnMouseLeave}
                className={"pagination-btn" + (this.state.hovered ? " btn-hovered" : "")}
            >
                {this.props.value}
            </span>
        )
    }
}

export default Pagination