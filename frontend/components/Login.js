import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';
// import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';
import Router from 'next/router';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
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
    background: rgb(64, 126, 147);
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    margin-top: 20px;
    display: inline-block;
  }
  p {
      display: inline-block;
      margin: 0 20px;
  }
  a {
    background: rgb(64, 126, 147);
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
`;

class Login extends Component {
  state = {
    password: '',
    email: '',
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        // After the mutation this calls the CURRENT_USER_QUERY
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
            e.preventDefault();
            await signin();
            this.setState({ name: '', email: '', password: '' });
            Router.push({
                    pathname: '/',
             });
        }}
         >
            {/* <fieldset disabled={loading} aria-busy={loading}> */}
              <h2>Bejelentkezés</h2>
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

              <button type="submit">Belépés</button>
              <p>Nincs még felhasználója?</p>
              <Link href="/signup">
                <a>Regisztráció</a>
            </Link>
            {/* </fieldset> */}
          </Form>
        )}
      </Mutation>
    );
  }
}

export default Login;
