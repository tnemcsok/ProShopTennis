import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';


const SingleCompetitionStyles = styled.div`
  h6 {
      font-size: 2rem;
      margin-bottom: 10px;
      margin-top: 10px;
  }

  ul {
    list-style-type: none;
  }
`;

const SINGLE_COMPETITION_QUERY = gql`
  query SINGLE_COMPETITION_QUERY($id: ID!) {
    competition(where: { id: $id }) {
      id
      type
      date
      result
      image
      review
    }
  }
`;
class SingleItem extends Component {
  
  render() {
    return (
      <Query
        query={SINGLE_COMPETITION_QUERY}
        variables={{
          id: this.props.id,
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.competition) return <p>No Item Found for {this.props.id}</p>;
          const competition = data.competition;
          console.log(competition);
          let dix = (comp) => {
            var a = comp.length;
            var names ='';
            console.log(comp);
            if(a>8){
            var i;
            for(i=8; i<a; i++){
              names += competition.result[i];  
              if(i<(a-1)) {
                names += ', ';
              }         
          } return(
            <li>IX-XVI. {names}</li>
          )}
          };
          return (
            <SingleCompetitionStyles>
              {/* <Head>
                <title>Sick Fits | {item.title}</title>
              </Head> */}
              
              <div className="details">
                <h6>{competition.date} - {competition.type}</h6>
                <img src={competition.image} alt={competition.date} />
                <h6>Végeredmény</h6>
                <ul>
                    <li>I. {competition.result[0]}</li>
                    <li>II. {competition.result[1]}</li>
                    <li>III-IV. {competition.result[2]}, {competition.result[3]}</li>
                    <li>V-VIII. {competition.result[4]}, {competition.result[5]}, {competition.result[6]}, {competition.result[7]}</li>
                    {dix(competition.result)}

                </ul>
                <h6>Versenybeszámoló</h6>
                <p>{competition.review}</p>
              </div>
            </SingleCompetitionStyles>
          );
        }}
      </Query>
    );
  }
}

export default SingleItem;
