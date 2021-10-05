import {Component} from "react"
import ShowcaseContainer from "../containers/ShowcaseContainer"
import {Route} from "react-router-dom";
import {Switch} from "react-router";

const contentType = {
    catalog: 1,
    product: 2,
    products: 3,
}

class MainContent extends Component {
    state = {
        curContentType: contentType.products
    }

    setContentPage = () => {
        let {productId} = this.props
    }

    render() {
        const {curContentType} = this.state
        let contentPage
        if (curContentType === contentType.products) {
            contentPage = (
                <Switch>
                    <Route
                        path={['/categories/:categoryId']}
                        component={ShowcaseContainer}
                    />
                    <Route
                        path='/'
                        component={ShowcaseContainer}
                    />
                </Switch>

            )
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
