import React, { Component } from 'react';
import UploadScheduledStyle from './styles/UploadScheduledStyle';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';



const UPLOAD_SCHEDULED_MUTATION = gql`
  mutation UPLOAD_SCHEDULED_MUTATIO(
    $date: String!
    $entrantNames: [String]
    $place: String!
    $type: String!
    $start: String!
  ) {
    createScheduledComp(
    date: $date
    entrantNames: $entrantNames
    type: $type
    place: $place
    start: $start
    ) {
      id
    }
  }
`;


class UploadScheduled extends Component {
    state = {
        date: '',
        entrantNames: [],
        type: '',
        place: '',
        start: '',
      };
      saveToState = e => {
        const { name, type, value } = e.target;
        var val = type === 'date' ? value.toString() : value;
        console.log(val);
        this.setState({ [name]: val });
      };

      putToResult = e => {
          const Entrants = this.state.entrantNames;
          const Place = parseInt(e.target.dataset.place);
          const entrant = e.target.value;
          Entrants[Place] = entrant;
          this.setState({ entrantNames: Entrants })
      };

     


    render() {
        return (
            <Mutation 
                mutation={UPLOAD_SCHEDULED_MUTATION} 
                variables={this.state}
                // refetchQueries={[ { query: ALL_PLAYERS_QUERY }, { query: ALL_COMPETITIONS_QUERY }  ]}
                >
                {(uploadScheduled, { loading, error }) => (
                    <UploadScheduledStyle>
                        <h2>Versenykiírás feltöltése</h2>
                        <form 
                            className="add_result"
                            onSubmit={async e => {
                                // Stop the form from submitting
                                e.preventDefault();
                                // call the mutation
                                const res = await uploadScheduled();
                                // change them to the single item page
                                console.log(res);
                                Router.push({
                                    pathname: '/scheduled',
                                    query: { id: res.data.createScheduledComp.id },
                                });
                                }}>

                            <label className="label_date" for="date">Dátum:</label>
                            <input 
                                className="date" 
                                name="date" 
                                type="date"
                                onChange={this.saveToState} /> 

                            <label className="type" for="type" >Versenyszám:</label>
                                <select 
                                    className="type" 
                                    type="text" 
                                    name="type"
                                    onChange={this.saveToState}
                                >
                                    <option value="" selected disabled hidden>Válasszon</option>
                                    <option value="Férfi egyéni A-verseny">Férfi egyéni A-verseny</option>
                                    <option value="Férfi egyéni b-verseny">Férfi egyéni B-verseny</option>
                                    <option value="Női egyéni">Női egyéni</option>
                                </select>

                            <br></br>

                            <label for="place">Helyszín:</label>
                                <input
                                    type="text"
                                    name="place"
                                    className="place"
                                    placeholder="Helyszín"
                                    onChange={this.saveToState}
                                />

                            <label className="label_start" for="start">Kezdés:</label>
                                <input
                                    type="text"
                                    name="start"
                                    className="start"
                                    placeholder="9:30"
                                    onChange={this.saveToState}
                                />

                            <div className="entrants">
                                <label className="label_entrants">Nevezők:  </label>
                                <br></br>
                                <input className="place" 
                                    name="entrant" 
                                    type="text" 
                                    placeholder="Név"
                                    data-place="0"
                                    onChange={this.putToResult} />

                                <input className="place" 
                                    name="entrant" 
                                    type="text" 
                                    placeholder="Név"
                                    data-place="1"
                                    onChange={this.putToResult} />

                                <input className="place" 
                                    name="entrant" 
                                    type="text" 
                                    placeholder="Név"
                                    data-place="2"
                                    onChange={this.putToResult} />

                                <input className="place" 
                                    name="entrant" 
                                    type="text" 
                                    placeholder="Név"
                                    data-place="3"
                                    onChange={this.putToResult} />

                                <input className="place" 
                                    name="entrant" 
                                    type="text" 
                                    placeholder="Név"
                                    data-place="4"
                                    onChange={this.putToResult} />

                                <input className="place" 
                                    name="entrant" 
                                    type="text" 
                                    placeholder="Név"
                                    data-place="5"
                                    onChange={this.putToResult} />

                                <input className="place" 
                                    name="entrant" 
                                    type="text" 
                                    placeholder="Név"
                                    data-place="6"
                                    onChange={this.putToResult} />

                                <input className="place" 
                                    name="entrant" 
                                    type="text" 
                                    placeholder="Név"
                                    data-place="7"
                                    onChange={this.putToResult} />

                            </div>
                            
                            <button className="submitButton" type="submit">Beküldés</button>
                        </form>
                    </UploadScheduledStyle>)}
                </Mutation>
        );
    }
}

export default UploadScheduled;