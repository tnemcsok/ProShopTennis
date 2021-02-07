import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Head from 'next/head';
import PrevCompStyles from './styles/PrevCompStyles';
import Link from 'next/link';


const PlayerStyles = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  box-shadow: 12px 12px 24px 12px rgba(0, 0, 0, 0.09);
  min-height: 500px;
  .player {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  img {
    width: 70%;
    height: 70%;
    object-fit: contain;
    margin: 50px auto 0px auto;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
  h2 {
    margin-top: 0px;
  }
  p {
    font-size: 1.5rem;
  }
  .competitions {
    padding: 0px 50px 30px 50px;
  }
  table {
    margin: 0px auto;
  }
`;

const SINGLE_PLAYER_QUERY = gql`
  query SINGLE_PLAYER_QUERY($id: ID!) {
    player(where: { id: $id }) {
        id
        name
        points
        competitions
        golds
        silvers
        image
        competition{
          id
          type 
          result
          date
          firstPoint
           
        }
    }
  }
`;
class Player extends Component {
  render() {
    return (
      <Query
        query={SINGLE_PLAYER_QUERY}
        variables={{
          id: this.props.id,
        }}
      >
        {({ error, loading, data }) => {
            
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;

          const player = data.player;

          var getPlace = (comp) => {
            const place = comp.result.indexOf(`${player.name}`) + 1;
            if(place == 1){
              return "Győztes"
            };
            if(place == 2){
              return "Döntős"
            };
            if(place == 3 || place == 4){
              return "Elődöntős"
            };
            if(place == 5 || place == 6){
              return "5-6. Helyezés"
            };
            if(place == 5 || place == 6){
              return "7-8. Helyezés"
            } else{
              return "9-16. helyzés"
            };


          }
          return (
            
            <PlayerStyles>
              <Head>
                <title>{player.name}</title>
              </Head>
              <div className="player">
                <img src={player.image} alt={player.name} />
                <div className="details">
                  <h2> {player.name}</h2>
                  <p>Részvételek száma: {player.competitions}</p>
                  <p>Pontok: {player.points}</p>
                  <p>Ranglista helyezés:</p>
                  <p>Aranyérmek: {player.golds}</p>
                  <p>Ezüstérmek: {player.silvers}</p>
                </div>
              </div>
              
              <div className="competitions">
                <h2>Verseny eredmények</h2>
                
                <PrevCompStyles>
                <thead>
                        <tr>
                            <th>Időpont</th>
                            <th>Versenyszám</th>
                            <th>Pontszám</th>
                            <th>Győztes</th>
                            <th>Helyezés</th>
                            <th>Részletek</th>
                        </tr>
                    </thead>
                    <tbody>
                {player.competition.map(comp => {
                  console.log(player);
                  return(
                    
                    <tr>
                                <td>{comp.date}</td>
                                <td>{comp.type}</td>
                                <td>{comp.firstPoint}</td>
                                <td>{comp.result[0]}</td>
                                <td>{getPlace(comp)}</td>
                                <td>
                                <Link href={`/competition?id=${comp.id}`}>
                                    <a>Részletek</a>
                                </Link>
                                </td>
                            </tr>
                  )
                })}
                </tbody>
                </PrevCompStyles>
                </div>
              </PlayerStyles>
            
          );
        }}
      </Query>
    );
  }
}

export default Player;
