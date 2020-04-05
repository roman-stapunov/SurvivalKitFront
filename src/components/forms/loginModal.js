import {Button, Form, Modal, Tab, TabContainer} from "react-bootstrap";
import api from '../../api/api.js';
import authService from "../../service/AuthService";
import RegisterForm from "./registerForm";
import Nav from "react-bootstrap/Nav";

const React = require('react');

class LoginModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            loggedIn: false,
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        this.setState({loggedIn: authService.isUserLoggedIn()});
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    }

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    login(e) {
        e.preventDefault();
        const {username, password} = this.state;


        authService.executeJwtAuthenticationService(username, password)
            .then(response => {
                if (response.status === 200) {
                    console.log("success");
                    this.setState({
                            loggedIn: true,
                            show: false
                        }
                    );
                    console.log("token: " + response.data.token);
                    authService.registerSuccessfulLoginForJwt(username, response.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    logout(e) {
        e.preventDefault();
        api.post();
        this.setState({loggedIn: false});
        authService.logout();
    }

    button = () => {
        if (!this.state.loggedIn) {
            return (
                <Button variant={"info"} onClick={this.handleShow}>Login</Button>
            )
        }
        return (
            <Button variant={"info"} onClick={this.logout}>Logout</Button>
        );
    };

    render() {
        return (
            <div className={"container-fluid"}>
                {this.button()}
                <TabContainer id={"register-login-tab-cont-id"} defaultActiveKey={"login"}>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header style={{display: "block"}}>
                            <Nav defaultActiveKey={"login"} variant="pills" className={"flex-row"} justify={true}>
                                <Nav.Item>
                                    <Nav.Link eventKey={"login"}> Login </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={"register"}> Registration </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Button type="button" variant={"link"} className="close" onClick={this.handleClose}>
                                        <span aria-hidden="true">×</span>
                                        <span className="sr-only">Close</span>
                                    </Button>
                                </Nav.Item>
                            </Nav>
                        </Modal.Header>
                        <Modal.Body>
                            <Tab.Content>
                                <Tab.Pane eventKey={"login"}>
                                    <Form>
                                        <Form.Group>
                                            <Form.Label>User name</Form.Label>
                                            <Form.Control name={"username"} type={"text"} value={this.state.username}
                                                          onChange={this.handleChange} id={"login-username"}/>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control name={"password"} type={"password"}
                                                          value={this.state.password}
                                                          onChange={this.handleChange} id={"login-password"}/>
                                            <Button type={"submit"} onClick={this.login}
                                                    style={{"marginTop": "1rem"}}>Submit</Button>
                                        </Form.Group>
                                    </Form>
                                </Tab.Pane>
                                <Tab.Pane title={"Register"} eventKey={"register"}>
                                    <RegisterForm close={this.handleClose}/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Modal.Body>
                    </Modal>
                </TabContainer>
            </div>
        );
    }
}

export default LoginModal;