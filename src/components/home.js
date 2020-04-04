import 'bootstrap'
import {HomeJumbotron, JumbotronBk} from "./styles";

const React = require('react');

class Home extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <HomeJumbotron fluid>
                <JumbotronBk>
                    <img src={"bcgd2.jpg"} className={"blur"} alt={""} style={{"width": "100vw"}}/>
                </JumbotronBk>
                <div className={"container-fluid"} style={{"paddingTop": "5rem", "paddingLeft": "5rem"}}>
                    <h1>Welcome!</h1>
                </div>
            </HomeJumbotron>
        )
    }
}

export default Home;