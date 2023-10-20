import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Input, Button } from 'reactstrap';
import Error from 'components/Errors';
import Logo from 'assets/logo.png';
import Auth from 'Auth';
import axios from 'axios';
import withNavigation from 'hocs/withNavigation';


class Login extends React.Component{

    state = {username: '', password: '', error: ''};

    onChange = e => this.setState({
        [e.target.name]: e.target.value, error: null
    });

    onSubmit = e => {
        e.preventDefault();
        let data = {
            username: this.state.username, password: this.state.password
        };
        axios.post('/api/auth', data).then(res => {
            Auth.login(res.data);
            this.props.navigate('/');

        })
        .catch(err => {
            this.setState({error: err.response.data.message});
        });
    };

    render(){
        return (
            <Card className="auth col-lg-3 col-sm-6">
            <Form onSubmit={this.onSubmit}>
                <img src={Logo} alt="" width="200" />
                <h5 className="mb-4">Login</h5>
                <Error error={this.state.error}/>
                <Input value={this.state.username} name="username" onChange={this.onChange} placeholder="Username" required />
                <Input type="password" value={this.state.password} name="password" onChange={this.onChange} placeholder="Password" required />
                <Button color="primary" block className="mb-3">Login</Button>
                <small><Link to="/register">Create a new account</Link></small>
                <p className="m-3 text-muted">&copy; { new Date().getFullYear() }</p>
            </Form>
        </Card>
        );
    }

}

export default withNavigation(Login);
