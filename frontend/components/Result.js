import React, { Component } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

const SingleResultStyles = styled.div`

  margin: 50px auto;
  

  h2 {
        border-radius: 1.072rem 1.072rem 0 0;
        margin: 0px auto;
        text-align: center;
        background-color: rgb(64, 126, 147);
        color: white;
        font-size: 2rem;
        font-weight: normal;
        padding: 10px;
  }
  img {
      display: block;
      margin-bottom: 0;
      outline: 0;
  }

  .result {
    outline: 0;
    margin-top: 0;
    border: 1px solid gray;
    background-color: hsla(207, 20%, 91%,1);
    border-radius: 0 0 1.072rem 1.072rem;
    padding: 20px;
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

class Result extends Component {
    render() {
        const { competition } = this.props;
        return (
            <SingleResultStyles>
                <h2>{competition.date} - {competition.type}</h2>
            
                <img style={{marginBottom:0}} src={competition.image} alt={competition.date} />
                <div className="result">
                
                <h6>Végeredmény</h6>
                <ul>
                    <li>I. {competition.result[0]}</li>
                    <li>II. {competition.result[1]}</li>
                    <li>III-IV. {competition.result[2]}, {competition.result[3]}</li>
                    
                    

                </ul>
                <h6>Versenybeszámoló</h6>
                <p>{competition.review}</p>
                <button onClick={() => {
                                Router.push({
                                    pathname: '/competition',
                                    query: { id: competition.id },
                                });
                                }}>Beszámoló</button>
                </div>
                
              </SingleResultStyles>
        );
    }
}

export default Result;