import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';


const ALL_PLAYERS_QUERY = gql`
  query ALL_PLAYERS_QUERY {
    players(orderBy: points_DESC) {
      id
      name
      points
      competitions
      golds 
      silvers
    }
  }
`;


const RankingStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-auto-flow: column;
    grid-column-gap: 40px;
    text-align: center;

  
`;

const RankingList = styled.table`
  background-color: white;
  border: 1px solid black;
  margin: 10px auto;
  border-spacing: 0;
  color: hsla(328, 41%, 4%, 0.82);

  th {
      background-color: rgb(64, 126, 147);
      color: white;
  }

  th, td {
      padding: 10px;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      text-align: center;
      &:last-child {
      border-right: none}
  }
`;

class Rankings extends Component {
    render() {
        
        return (
            
            <Query query={ALL_PLAYERS_QUERY}>
                {({ data, error, loading }) => {
                    console.log(data);
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error: {error.message}</p>;
                    if (!data.players) return <p>Nincs megjelenítendő játékos</p>


                    const copy = [...data.players];

                    const ordered = copy.sort(function(a,b){
                        if(a.golds>b.golds){
                            return -1;
                        }
                        if(b.golds>a.golds){
                            return 1;
                        }
                        if(a.golds == b.golds){
                            if(a.silvers>b.silvers){
                                return -1;
                            }
                            if(a.silvers<b.silvers){
                                return 1;
                            }
                            return 0;
                        }
                    
                    });
                    
                    return (
                        <RankingStyle>
                            <h2>Ranglista</h2>
                            <RankingList>
                                    <thead>
                                        <tr>
                                            <th>Helyezés</th>
                                            <th>Név</th>
                                            <th>Pontszám</th>
                                            <th>Versenyek</th>
                                        </tr>
                                    </thead>
                                        <tbody>
                                        {data.players.map((player, index) => {
                                            return(
                                                <tr>
                                                    <td>{(index+1)+"."}</td>
                                                    <td><Link href={`/player?id=${player.id}`}>
                                                    <a>{player.name}</a></Link></td>
                                                    <td>{player.points}</td>
                                                    <td>{player.competitions}</td>
                                                </tr>
                                            )
                                        })}
                                        </tbody>
                            </RankingList>

                            <h2>Éremtáblázat</h2>
                            <RankingList>
                                    <thead>
                                        <tr>
                                            <th>Helyezés</th>
                                            <th>Név</th>
                                            <th>Arany</th>
                                            <th>Ezüst</th>
                                        </tr>
                                    </thead>
                                        <tbody>
                                        {ordered.map((player, index) => {
                                            return(
                                                <tr>
                                                    <td>{(index+1)+"."}</td>
                                                    <td><Link href={`/player?id=${player.id}`}>
                                                    <a>{player.name}</a></Link></td>
                                                    <td>{player.golds}</td>
                                                    <td>{player.silvers}</td>
                                                </tr>
                                            )
                                        })}
                                        </tbody>
                            </RankingList>
                        </RankingStyle>
                    )}}
                </Query>
        )}}
            

            
                    
                   
  

export default Rankings;
export { ALL_PLAYERS_QUERY };