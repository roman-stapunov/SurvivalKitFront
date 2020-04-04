import api from "../../api/api";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const React = require('react');

class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            phoneNumber: '',
            password: '',
            role: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit(e) {
        e.preventDefault();
        const {name, username, email, phoneNumber, password, role} = this.state;

        let data = {
            name,
            username,
            email,
            phoneNumber,
            password,
            role
        };
        let json = JSON.stringify(data);

        api.post("/register", json)
            .then(response => {
                if (response.status === 200) {
                    this.props.close();
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    render() {
        return (
            <div className={"row"}>
                <div className={"col-sm-5"} style={{"marginLeft": "1rem"}}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Имя</Form.Label>
                            <Form.Control type={"text"} placeholder={"имя"} name={"name"}
                                          value={this.state.name} onChange={this.handleChange} required={true}
                                          disabled={this.state.disabled}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>email</Form.Label>
                            <Form.Control type={"email"} name={"email"} placeholder={"email"}
                                          value={this.state.email} disabled={this.state.disabled}
                                          onChange={this.handleChange} required={true}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>username</Form.Label>
                            <Form.Control type={"text"} name={"username"} placeholder={"username"}
                                          value={this.state.username} disabled={this.state.disabled}
                                          onChange={this.handleChange} required={true}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>phone number</Form.Label>
                            <Form.Control type={"text"} name={"phoneNumber"} placeholder={"phoneNumber"}
                                          value={this.state.phoneNumber} disabled={this.state.disabled}
                                          onChange={this.handleChange} required={true}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>password</Form.Label>
                            <Form.Control type={"password"} name={"password"} placeholder={"password"}
                                          value={this.state.password} disabled={this.state.disabled}
                                          onChange={this.handleChange} required={true}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Роль</Form.Label>
                            <Form.Control type={"text"} name={"role"} placeholder={"role"}
                                          value={this.state.role} disabled={this.state.disabled}
                                          onChange={this.handleChange} required={true}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button variant="primary" type={"submit"}>
                                Register
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        );
    }
}

export default RegisterForm;