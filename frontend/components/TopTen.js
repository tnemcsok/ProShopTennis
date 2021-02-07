import React, { Component } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';

const TopTenStyle = styled.div`
    position: -webkit-sticky;
	position: sticky;
	top: 16vh;
    margin: 50px auto;
    z-index: -1;
  
    
    

    .rank {
        border: 1px solid gray;
        background-color: hsla(207, 20%, 91%,1);
        border-radius: 0 0 1.072rem 1.072rem;
    }
    
    h2 {
        border-radius: 1.072rem 1.072rem 0 0;
        margin: 0px auto;
        text-align: center;
        background-color: rgb(64, 126, 147);
        color: white;
        font-size: 2rem;
        font-weight: normal;
    }
    table {
        text-align: center;
        margin: 20px auto;

    }
    button {
      display: block;
      margin-top: 0;
      margin-bottom: 20px;
      margin-left: auto;
      margin-right: auto;
      font-size: 1.5rem;
      color: white;
      background-color: ${props => props.theme.green};
      padding: 8px;
      border: 0px;
      font-family: "Great Vibes", cursive;
    }
`;

const ALL_PLAYERS_QUERY = gql`
  query ALL_PLAYERS_QUERY {
    players(orderBy: points_DESC) {
      id
      name
      points
      competitions
    }
  }
`;

class TopTen extends Component {
    render() {
        return (
            <Query query={ALL_PLAYERS_QUERY}>
                {({ data, error, loading }) => {
                    console.log(data);
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error: {error.message}</p>;
                    if (!data.players) return <p>Nincs megjelenítendő játékos</p>
                    
                    return (
                        <TopTenStyle>
                            <h2>Ranglista</h2>
                            <div className="rank">
                                <table>
                                    <tbody>
                                        {data.players.map((player, index) => {
                                            if(index<10){
                                            return(
                                                <tr>
                                                    <td>{index+1 +'. '}</td>
                                                    <td><Link href={`/player?id=${player.id}`}>
                                                    <a>{player.name}</a></Link> &nbsp;</td>
                                                    <td>{player.points}</td>
                                                </tr>
                                            )}
                                        })}
                                    </tbody>
                                </table>
                                <Link href="/rankings">
                                    <button>Teljes ranglista</button>
                                </Link>
                            </div>
                        </TopTenStyle>
                    )}}
            </Query>

        );
    }
}

export default TopTen;