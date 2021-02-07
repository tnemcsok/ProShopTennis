import React, { Component } from 'react';
import UploadResultStyle from './styles/UploadResultStyle';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { ALL_PLAYERS_QUERY } from './Rankings'
import { ALL_COMPETITIONS_QUERY } from './PreviousCompetitions';


const UPLOAD_COMPETITION_MUTATION = gql`
  mutation UPLOAD_COMPETITION_MUTATION(
    $date: String!
    $result: [String]!
    $image: String
    $review: String!
    $type: String!
    $firstPoint: Int!
  ) {
    createCompetition(
    date: $date
    result: $result
    image: $image
    review: $review
    type: $type
    firstPoint: $firstPoint
    ) {
      id
    }
  }
`;





class UploadResult extends Component {
    state = {
        date: '',
        result: [],
        image: '',
        review: '',
        type: '',
        firstPoint: 1000,
        show: false
      };
      saveToState = e => {
        const { name, type, value } = e.target;
        var val = type === 'date' ? value.toString() : value;
        var val = type === 'number' ? parseFloat(value) : value;
        console.log(val);
        this.setState({ [name]: val });
      };

      putToResult = e => {
          const Result = this.state.result;
          const Place = parseInt(e.target.dataset.place);
          Result[Place] = e.target.value;
          this.setState({ result: Result })
      };
      showRest = e => {
          if (e.target.value=="16"){
            this.setState({ show: true});
          } else {
            this.setState({ show: false});
          }

      }

      uploadFile = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'ProShop');
    
        const res = await fetch('https://api.cloudinary.com/v1_1/ulquirola/image/upload', {
          method: 'POST',
          body: data,
        });
        const file = await res.json();
        console.log(file);
        this.setState({
          image: file.secure_url,
        });
      };

    render() {
        return (
            <Mutation 
                mutation={UPLOAD_COMPETITION_MUTATION} 
                variables={this.state}
                refetchQueries={[ { query: ALL_PLAYERS_QUERY }, { query: ALL_COMPETITIONS_QUERY }  ]}>
                {(uploadCompetition, { loading, error }) => (
                    <UploadResultStyle>
                        <h2>Versenyeredmény feltöltése</h2>
                        <form 
                            className="add_result"
                            onSubmit={async e => {
                                // Stop the form from submitting
                                e.preventDefault();
                                // call the mutation
                                const res = await uploadCompetition();
                                // change them to the single item page
                                console.log(res);
                                Router.push({
                                    pathname: '/competition',
                                    query: { id: res.data.createCompetition.id },
                                });
                                }}>
                            <label for="point">Pontszám:</label>
                                <input
                                    type="number"
                                    name="firstPoint"
                                    className="point"
                                    placeholder="Pontszám"
                                    onChange={this.saveToState}
                                />
                                    
                            
                            

                            <label className="label_date" for="date">Dátum:</label>
                            <input 
                                className="date" 
                                name="date" 
                                type="date"
                                onChange={this.saveToState} /> <br></br>

                            <label for="type" >Versenyszám:</label>
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
                            

                                <p>Létszám:</p>
                                <select 
                                    className="number" 
                                    type="text" 
                                    name="number"
                                    onChange={this.showRest}
                                >
                                    <option value="" selected disabled hidden>Válasszon</option>
                                    <option value="8">8 fő</option>
                                    <option value="16">16 fő</option>
                                </select>
                            
                            <br></br>

                            <label htmlFor="file">
                                Fénykép feltöltése:   
                                <input
                                type="file"
                                className="image"
                                id="file"
                                name="file"
                                placeholder="Fénykép feltöltése"
                                required
                                onChange={this.uploadFile}
                                />
                            </label>

                            <label className="label_review" for="review">Versenybeszámoló</label>
                            <textarea 
                                name="review" 
                                placeholder="Beszámoló a versenyről"
                                rows="10"
                                value={this.state.review}
                                onChange={this.saveToState}
                                >
                                

                            </textarea>
                            
                            <div className="places">
                                <label className="label_place" for="first">I. Helyezett:  </label>
                                <input className="place" 
                                    name="first" 
                                    type="text" 
                                    placeholder="Név"
                                    data-place="0"
                                    onChange={this.putToResult} />

                                <label className="label_place" for="second">II. Helyezett:</label>
                                <input className="place" 
                                    name="second" 
                                    type="text" 
                                    placeholder="Név" 
                                    onChange={this.putToResult}
                                    data-place="1" />

                                <label className="label_place" for="third-forth">III-IV. Helyezett</label>
                                <input className="place" 
                                    name="third-forthd" 
                                    type="text" 
                                    placeholder="Név" 
                                    onChange={this.putToResult}
                                    data-place="2" />
                                <input className="place" 
                                    name="third-forth" 
                                    type="text" 
                                    placeholder="Név" 
                                    onChange={this.putToResult}
                                    data-place="3" />

                                <label className="label_place" for="fifth-sixth">V-VI. Helyezett</label>
                                <input className="place" 
                                    name="ffifth-sixth"  
                                    type="text" 
                                    placeholder="Név" 
                                    onChange={this.putToResult}
                                    data-place="4" />
                                <input className="place" 
                                    name="fifth-sixth"  
                                    type="text" 
                                    placeholder="Név" 
                                    onChange={this.putToResult}
                                    data-place="5" />
                                <label className="label_place" for="seventh-eights">VII-VIII. Helyezett</label>
                                <input className="place" 
                                    name="seventh-eights" 
                                    type="text" 
                                    placeholder="Név" 
                                    onChange={this.putToResult}
                                    data-place="6" />
                                <input className="place" 
                                    name="seventh-eights" 
                                    type="text" 
                                    placeholder="Név" 
                                    onChange={this.putToResult}
                                    data-place="7" />
                            </div>
                            {this.state.show && (
                                <>
                                    <label className="label_place" for="9-16">IX-XVI. Helyezett:  </label>
                                <div className="morePlaces">
                                    <input className="place" 
                                        name="9-16" 
                                        type="text" 
                                        placeholder="Név"
                                        data-place="8"
                                        onChange={this.putToResult} />

                                    <input className="place" 
                                        name="9-16" 
                                        type="text" 
                                        placeholder="Név"
                                        data-place="9"
                                        onChange={this.putToResult} />

                                    <input className="place" 
                                        name="9-16" 
                                        type="text" 
                                        placeholder="Név"
                                        data-place="10"
                                        onChange={this.putToResult} />

                                    <input className="place" 
                                        name="9-16" 
                                        type="text" 
                                        placeholder="Név"
                                        data-place="11"
                                        onChange={this.putToResult} />
                                    
                                    <input className="place" 
                                        name="9-16" 
                                        type="text" 
                                        placeholder="Név"
                                        data-place="12"
                                        onChange={this.putToResult} />
                                    
                                    <input className="place" 
                                        name="9-16" 
                                        type="text" 
                                        placeholder="Név"
                                        data-place="13"
                                        onChange={this.putToResult} />

                                    <input className="place" 
                                        name="9-16" 
                                        type="text" 
                                        placeholder="Név"
                                        data-place="14"
                                        onChange={this.putToResult} />
                                    
                                    <input className="place" 
                                        name="9-16" 
                                        type="text" 
                                        placeholder="Név"
                                        data-place="15"
                                        onChange={this.putToResult} />

                                </div>
                            </>
                            )}
                            <button className="submitButton" type="submit">Beküldés</button>
                        </form>
                    </UploadResultStyle>)}
                </Mutation>
        );
    }
}

export default UploadResult;