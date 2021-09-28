import Header from "./Header"
import Quicklinks from "./Quicklinks"
import MainContent from "./MainContent"
import Footer from "./Footer"
import {Component} from "react";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Quicklinks />
                <MainContent />
                <Footer />
            </div>
        );
    }
}

export default App
