import {Component} from "react"
import ShowcaseContainer from "../containers/ShowcaseContainer"

const contentType = {
    catalog: 1,
    product: 2,
    products: 1,
}

class MainContent extends Component {
    state = {
        curContentType: contentType.products
    }

    setContentPage = () => {
        let {productId} = this.props
        console.log(productId)
    }

    render() {
        const {curContentType} = this.state
        let contentPage
        if (curContentType === contentType.products) {
            contentPage = <ShowcaseContainer />
        } else if (curContentType === contentType.product) {
            //contentPage =
        }

        return (
            <div className={'main-content'}>
                {contentPage}
            </div>
        );
    }
}

export default MainContent
