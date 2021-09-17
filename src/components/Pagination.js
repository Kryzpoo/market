import {Component} from "react";

class Pagination extends Component {
    state = {
        pagesCount: 0,
    }

    static getElementIndexes = (pageNum, elementsPerPage) => {
        const start = ((pageNum - 1) * elementsPerPage)
        const end = pageNum * elementsPerPage
        return [start, end]
    }

    componentDidMount() {
        const {elementsCount, elementsPerPage} = this.props
        const pagesCount = Math.ceil(elementsCount / elementsPerPage)
        this.setState({pagesCount: pagesCount})
    }

    render() {
        const pageElements = [];
        for (let i = 1; i <= this.state.pagesCount; i++) {
            pageElements.push(
                <PaginationButton
                    key={i}
                    value={i}
                    onPageClick={this.props.onPageClick}
                />)
        }
        return (
            <div className="pagination-block">
                {pageElements}
            </div>
        )
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