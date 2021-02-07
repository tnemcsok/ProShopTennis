import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import TopTen from './TopTen';
import Results from './Results';

const MainStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-auto-flow: column;
    grid-column-gap: 40px; 

	.ranking {
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	z-index: -1;
	}
`;





class MainPage extends React.Component {
  render() {
    return (
        <MainStyle>
			<div className="ranking">
				<TopTen />
			</div>
			<div className="result">
				<Results />
			</div>
		</MainStyle>
    )
  }
}

export default MainPage;
