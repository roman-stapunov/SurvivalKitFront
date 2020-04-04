import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from 'react-router-bootstrap'
import authService from "../service/AuthService";
import LoginModal from "./forms/loginModal";
import Navbar from "react-bootstrap/Navbar";

const React = require('react');

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.modal = React.createRef()

        this.state = {
            role: '',
            showModal: false
        };

        this.handleModal = this.handleModal.bind(this);
        this.buildNavBarItems = this.buildNavBarItems.bind(this);
        this.myCatsLink = this.myCatsLink.bind(this);
    }

    componentDidMount() {
        this.setState({
            loggedIn: authService.isUserLoggedIn(),
            role: authService.getUserRole()
        });
    }

    handleModal() {
        this.modal.current.handleShow();
    }

    myCatsLink() {
        if (this.state.role === 'OWNER') {
            return (
                <LinkContainer to={"/my-orders"}>
                    <Nav.Link>My orders</Nav.Link>
                </LinkContainer>
            );
        } else {
            return '';
        }
    }

    buildNavBarItems() {
        return (
            <Nav className="mr-auto">
                <LinkContainer to={"/home"}>
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/profile"}>
                    <Nav.Link>Profile</Nav.Link>
                </LinkContainer>
                {this.myCatsLink()};
                <LinkContainer to={"/organizations"}>
                    <Nav.Link>Organizations</Nav.Link>
                </LinkContainer>
            </Nav>
        );
    }

    render() {
        return (
            <div>
                <Navbar variant={"dark"} bg="dark">
                    <Navbar.Brand>SurvivalKit</Navbar.Brand>
                    <Navbar.Toggle aria-controls="dark"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        {this.buildNavBarItems()}
                        <Nav>
                            <LoginModal/>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}

export default Header;