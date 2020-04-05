import 'bootstrap'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import {Button} from "react-bootstrap";

const React = require('react');

class ProfileScreen extends React.Component {

    constructor(props) {
        super(props);

        this.myMenu = this.myMenu.bind(this);
        this.myProfileData = this.myProfileData.bind(this);
    }

    myMenu() {
        return (
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>to cart</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Cappucino</td>
                    <td>0,5</td>
                    <td>{this.cartButton()}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Americano</td>
                    <td>1</td>
                    <td>{this.cartButton()}</td>
                </tr>
                </tbody>
            </Table>
        );
    }

    myProfileData() {

    }

    addToCart() {

    }

    cartButton() {
        return (
            <Button onClick={this.addToCart}>
                add to cart
            </Button>
        );
    };

    render() {

        return (
            <div className={"container-fluid"}>
                <h2 style={{margin: "5rem", marginBottom: "2rem"}}>Profile</h2>
                <Tabs defaultActiveKey="services" id="uncontrolled-tab-example">
                    <Tab eventKey="services" title="My services">
                        {this.myMenu()}
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        {this.myProfileData()}
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default ProfileScreen;