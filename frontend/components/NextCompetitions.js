import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Link from 'next/link';
import PrevCompStyles from './styles/PrevCompStyles';

const ALL_SCHEDULED_QUERY = gql`
  query ALL_SCHEDULED_QUERY {
    scheduledComps {
      id
      date
      type
      place
    }
  }
`;

class NextCompetitions extends Component {
    render() {
        return (
            <Query query={ALL_SCHEDULED_QUERY}>
                {({ error, loading, data }) => {
                if (error) return <Error error={error} />;
                if (loading) return <p>Loading...</p>;
                if (!data.scheduledComps) return <p>Nincs megjelenítendő verseny</p>
                const scheduledComps = data.scheduledComps; 
                console.log(scheduledComps);
                return (
                    <div>
                    <h2>Következő versenyek</h2>
                    <PrevCompStyles>
                    <thead>
                        <tr>
                            <th>Időpont</th>
                            <th>Versenyszám</th>
                            <th>Helyszín</th>
                            <th>Nevezés</th>
                        </tr>
                    </thead>
                    <tbody>
                    {scheduledComps.map(scheduledComp => {
                        
                        return (
                            
                            <tr>
                                <td>{scheduledComp.date}</td>
                                <td>{scheduledComp.type}</td>
                                <td>{scheduledComp.place}</td>
                                <td>
                                <Link href={`/scheduled?id=${scheduledComp.id}`}>
                                    <a>Nevezés</a>
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

export default NextCompetitions;