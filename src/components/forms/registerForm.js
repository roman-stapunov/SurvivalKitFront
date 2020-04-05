import api from "../../api/api";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const React = require('react');

class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            userName: '',
            email: '',
            phoneNumber: '',
            password: '',
            roleid: ''
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
        const {name, userName, email, phoneNumber, password, roleid} = this.state;

        let data = {
            name,
            userName,
            email,
            phoneNumber,
            password,
            roleid
        };
        let json = JSON.stringify(data);

        api.put("/User", json)
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
                            <Form.Label>Name</Form.Label>
                            <Form.Control type={"text"} placeholder={"name"} name={"name"}
                                          value={this.state.name} onChange={this.handleChange} required={true}
                                          disabled={this.state.disabled}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type={"email"} name={"email"} placeholder={"email"}
                                          value={this.state.email} disabled={this.state.disabled}
                                          onChange={this.handleChange} required={true}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type={"text"} name={"userName"} placeholder={"userName"}
                                          value={this.state.userName} disabled={this.state.disabled}
                                          onChange={this.handleChange} required={true}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type={"text"} name={"phoneNumber"} placeholder={"phoneNumber"}
                                          value={this.state.phoneNumber} disabled={this.state.disabled}
                                          onChange={this.handleChange} required={true}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={"password"} name={"password"} placeholder={"password"}
                                          value={this.state.password} disabled={this.state.disabled}
                                          onChange={this.handleChange} required={true}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>I am</Form.Label>
                            <Form.Control as={"select"} name={"roleid"} placeholder={"role"}
                                          value={this.state.roleid} disabled={this.state.disabled}
                                          onChange={this.handleChange} required={true}
                            >
                                <option value={1}>Service Provider</option>
                                <option value={2}>Client</option>
                                <option value={3}>Volunteer</option>
                            </Form.Control>
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