import Header from "./Header"
import Quicklinks from "./Quicklinks"
import MainContent from "./MainContent"
import Footer from "./Footer"
import {Redirect, Switch, Link} from "react-router-dom";
import {Component} from "react";

class App extends Component {
    render() {

        return (
            <div>
                <Link to={'header'} component={Header}/>
                <Header />
                <Quicklinks />
                <MainContent />
                <Footer />


                <Switch>
                    <Redirect from='/' to='/products'/>
                </Switch>
            </div>
        );
    }
}

export default App
