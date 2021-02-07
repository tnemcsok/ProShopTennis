import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import User from './User';
import Link from 'next/link';


const SingleCompetitionStyles = styled.div`
  h6 {
      font-size: 1.6rem;
      margin-bottom: 10px;
      margin-top: 10px;
  }

  ul {
    list-style-type: none;
  }

  form {
    background-color: hsla(207, 20%, 91%,1);
    padding: 25px;
    width: 400px;
    margin-left: 80px;
  }

  form.h2 {
    margin-top: 0px;

  }

  .login {
    background-color: hsla(207, 20%, 91%,1);
    padding: 25px;
    width: 400px;
    margin-left: 80px;
  }

  .login.h6 {
      font-size: 1.2rem;
  }

  .details {
    display: grid;
    grid-template-columns: 100px 200px;
    grid-row-gap: 20px;
    align-items: center;
    padding-left: 15px;
    line-height: 2.6;
  }

  a {
    background: rgb(64, 126, 147);
    color: white;
    border: 0;
    display: block;
    margin: 0 auto;
    text-align: center;
    width: 150px;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }

  input {
    margin-left: 20px;
    min-width: 200px;
  }

  .entrants {
    display: flex;
  }

  .registered {
    margin-left: 20px;
    background-color: hsla(207, 20%, 91%,1);
    padding: 25px;
  }

  button {
    max-width: 70px;
    font-size: 1.5rem;
    color: white;
    background-color: ${props => props.theme.green};
    padding: 5px;
    grid-column: 1 / 3;
    justify-self: center;
}



`;

const SINGLE_SCHEDULED_QUERY = gql`
  query SINGLE_SCHEDULED_QUERY($id: ID!) {
    scheduledComp(where: { id: $id }) {
      id
      type
      date
      place
      start
    }
  }
`;

const ADD_ENTRANT_MUTATION = gql`
  mutation ADD_ENTRANT_MUTATION(
    $id: ID!
    $entrant: String!
    $phonenumber: String!
    $email: String!
    ) {
    updateScheduledComp(
      id: $id
      entrant: $entrant 
      phonenumber: $phonenumber
      email: $email

      ) {
      id
    }
  }
`;

const GET_ENTRANTS_QUERY = gql`
  query GET_ENTRANTS_QUERY($id: ID!) {
    entrants(where: { scheduledComps_every: {id: $id} }) {
      phonenumber
      email
      name
    }
  }
`;


class ScheduledComp extends Component {

  state = {
    entrant: '',
    phonenumber: '',
    email: '',
    id: this.props.id
  };

  cancelCourse = () => { 
    document.getElementById("register_form").reset();
  }

  saveToState = e => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  };
  
  render() {
    return (
      <User>
      {({ data: { me } }) => (
        <Query
          query={SINGLE_SCHEDULED_QUERY}
          variables={{
            id: this.state.id,
          }}
        >
          {({ error, loading, data }) => {

              console.log(data);
            if (error) return <Error error={error} />;
            if (loading) return <p>Loading...</p>;
            if (!data.scheduledComp) return <p>No Item Found for {this.props.id}</p>;
            
            const scheduledComp = data.scheduledComp;

            return (
              <SingleCompetitionStyles>
                
                
                  <h2>{scheduledComp.date}: {scheduledComp.type}</h2>
                  <p>Helyszín: {scheduledComp.place}</p>
                  <p>Kezdés: {scheduledComp.start}</p>
                  <div className="entrants">
                  <div className="registered">
                    <h6>Eddigi nevezők:</h6>
                    <Query
                      query={GET_ENTRANTS_QUERY}
                      variables={{
                        id: this.state.id,
                      }}
                    >
                      {({ error, loading, data }) => {

                          
                        if (error) return <p>Error: {error.message}</p>;
                        if (loading) return <p>Loading...</p>;
                        if (!data.entrants) return <p>Még nincsenek nevezők</p>;

                        console.log(data.entrants);
                        
                        return(
                        <div>
                          {data.entrants.map((entrant, index) => {
                            console.log(entrant);
                            return(
                                <p>{index+1}. {entrant.name}</p>
                            )
                          })}
                        </div>  
                        )
                      }}
                    </Query>
                      
                    </div>
                    <Mutation 
                      mutation={ADD_ENTRANT_MUTATION} 
                      variables={this.state}
                      refetchQueries={ [ {query: GET_ENTRANTS_QUERY, variables: { id: this.state.id }}] }  
                    >
                    {(updateScheduledComp, { loading, error }) => (
                    <div>
                    {me && (
                    <form id="register_form" onSubmit={async e => {
                      
                                  // Stop the form from submitting
                                  e.preventDefault();
                                  // call the mutation
                                  const res = await updateScheduledComp();
                                  // change them to the single item page
                                  console.log(res);
                                  this.cancelCourse();
                                  }}>
                      
                      <h6>Nevezés</h6>
                      <div className="details">
                        <label for="name">Név:</label>
                                      <input
                                          type="text"
                                          name="entrant"
                                          placeholder="Név"
                                          onChange={this.saveToState}
                                      />

                        <label for="name">Telefonszám:</label>
                                      <input
                                          type="text"
                                          name="phonenumber"
                                          placeholder="+36-20-123-45-67"
                                          onChange={this.saveToState}
                                      />

                        <label for="email">Email:</label>
                                      <input
                                          type="email"
                                          name="email"
                                          placeholder="Email"
                                          onChange={this.saveToState}
                                      />
                        <button type="submit">Nevezés</button>           
                      </div>
                      
                    </form>
                      )}
                      {!me && (
                        <div className="login">
                          <h6>A nevezéshez kérjük jelentkezzen be!</h6>
                          <Link href="/login">
                            <a>Bejelentkezés</a>
                          </Link>

                        </div>
                      )}
                    </div>
                    )}
                </Mutation>
                  </div>
                  

                
              </SingleCompetitionStyles>
            );
          }}
        </Query>
      )}
      </User>
    );
  }
}

export default ScheduledComp;
