import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';
// import Error from './ErrorMessage';
// import { CURRENT_USER_QUERY } from './User';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      id
      email
      name
    }
  }
`;

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: white;
  border: 5px solid white;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  margin: 50px auto;
  width: 70%;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: red;
    }
  }
  button {
    width: auto;
    background: rgb(64, 126, 147);
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    margin-top: 20px;
  }
`;

class Login extends Component {
  state = {
    name: '',
    password: '',
    email: '',
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={this.state}
        // After the mutation this calls the CURRENT_USER_QUERY
        // refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await signup();
              this.setState({ name: '', email: '', password: '' });
            }}
          >
            {/* <fieldset disabled={loading} aria-busy={loading}> */}
              <h2>Regisztráció</h2>
              {/* <Error error={error} /> */}
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>

              <label htmlFor="Name">
                Név
                <input
                  type="Name"
                  name="name"
                  placeholder="Név"
                  value={this.state.name}
                  onChange={this.saveToState}
                />
              </label>

              <label htmlFor="password">
                Jelszó
                <input
                  type="password"
                  name="password"
                  placeholder="jelszó"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>

              <button type="submit">Regisztráció</button>
              
            {/* </fieldset> */}
          </Form>
           )}
        </Mutation> 
    );
  }
}

export default Login;
