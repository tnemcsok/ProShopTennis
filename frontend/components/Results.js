import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Result from './Result';


const ResultStyles = styled.div`
  h6 {
      font-size: 2rem;
      margin-bottom: 10px;
      margin-top: 10px;
  }

  ul {
    list-style-type: none;
  }
`;

const ALL_COMPETITIONS_QUERY = gql`
  query ALL_COMPETITIONS_QUERY {
    competitions(orderBy: createdAt_DESC, first: 3) {
      id
      date
      type
      result
      image
      review
      createdAt
    }
  }
`;

class Results extends Component {
  
  render() {
    return (
      <Query query={ALL_COMPETITIONS_QUERY}>
        {({ error, loading, data }) => {
          if (error) return <p>Error: {error.message}</p>;
          if (loading) return <p>Loading...</p>;
          if (!data.competitions) return <p>No Item Found </p>;
          return(
          <ResultStyles>{data.competitions.map(competition =>  <Result competition={competition} key={competition.id} />
          )}
          </ResultStyles>
          )
          
        }}
      </Query>
    );
  }
}

export default Results;
