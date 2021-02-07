import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Link from 'next/link';
import PrevCompStyles from './styles/PrevCompStyles';


const ALL_COMPETITIONS_QUERY = gql`
  query ALL_COMPETITIONS_QUERY {
    competitions {
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

class PreviousCompetitions extends Component {
    render() {
        return (
            <Query query={ALL_COMPETITIONS_QUERY}>
                {({ error, loading, data }) => {
                if (error) return <Error error={error} />;
                if (loading) return <p>Loading...</p>;
                if (!data.competitions) return <p>Nincs megjelenítendő verseny</p>
                const competitions = data.competitions; 
                console.log(competitions);
                return (
                    <div>
                    <h2>Lezajlott versenyek</h2>
                    <PrevCompStyles>
                    <thead>
                        <tr>
                            <th>Időpont</th>
                            <th>Versenyszám</th>
                            <th>Győztes</th>
                            <th>Részletek</th>
                        </tr>
                    </thead>
                    <tbody>
                    {competitions.map(competition => {
                        console.log(competition.date)
                        return (
                            
                            <tr>
                                <td>{competition.date}</td>
                                <td>{competition.type}</td>
                                <td>{competition.result[0]}</td>
                                <td>
                                <Link href={`/competition?id=${competition.id}`}>
                                    <a>Részletek</a>
                                </Link>
                                </td>
                            </tr>
                            
                        )
                    })}
                    </tbody>
                </PrevCompStyles>
                </div>
                )}}
            </Query>
        );
    }
}

export default PreviousCompetitions;
export { ALL_COMPETITIONS_QUERY };