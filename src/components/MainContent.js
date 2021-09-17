import {Component} from "react";
import CategoriesContainer from "../containers/CategoriesContainer"
import CatalogContainer from "../containers/CatalogContainer";

const contentType = {
    catalog: 1,
    product: 2,
}

class MainContent extends Component {
    state = {
        curContentType: contentType.catalog
    }

    setContentPage = () => {
        let {productId} = this.props
        console.log(productId)
    }

    render() {
        const {curContentType} = this.state
        let contentPage
        if (curContentType === contentType.catalog) {
            contentPage = <CatalogContainer />
        } else if (curContentType === contentType.product) {
            //contentPage =
        }

        return (
            <div className={'main-content'}>
                <CategoriesContainer />
                {contentPage}
            </div>
        );
    }
}

export default MainContent
