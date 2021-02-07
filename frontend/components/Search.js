import React from 'react';
import Downshift, { resetIdCounter } from 'downshift';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

const SEARCH_PLAYERS_QUERY = gql`
  query SEARCH_PLAYERS_QUERY($searchTerm: String!) {
    players(where: { name_contains: $searchTerm }) {
        id
        name
        points
        competitions
        golds
        silvers
        image
    }
  }
`;

function routeToItem(item) {
  Router.push({
    pathname: '/player',
    query: {
      id: item.id,
    },
  });
}

class AutoComplete extends React.Component {
  state = {
    players: [],
    loading: false,
    fetched: false,
  };
  onChange = debounce(async (e, client) => {
    console.log('Searching...');
    // turn loading on
    this.setState({ loading: true });
    // Manually query apollo client
    const res = await client.query({
      query: SEARCH_PLAYERS_QUERY,
      variables: { searchTerm: e.target.value },
    });
   
    this.setState({
      players: res.data.players,
      loading: false,
      fetched: true
    });
  }, 350);



  render() {
    resetIdCounter();
    return (
      <SearchStyles>
        <Downshift onChange={routeToItem} itemToString={item => (item === null ? '' : item.name)}>
          {({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex }) => (
            <div>
              <ApolloConsumer>
                {client => (
                  <input
                    {...getInputProps({
                      type: 'search',
                      placeholder: 'Játékos keresése',
                      id: 'search',
                      className: this.state.loading ? 'loading' : '',
                      onChange: e => {
                        e.persist();
                        this.onChange(e, client);
                      },
                    })}
                  />
                )}
              </ApolloConsumer>
              {isOpen && (
                <DropDown>
                  {this.state.players.map((player, index) => (
                    <DropDownItem
                      {...getItemProps({ item: player })}
                      key={player.id}
                      highlighted={index === highlightedIndex}
                    >
                      {player.name}
                  </DropDownItem>
                  ))}
                  {!this.state.players.length  && 
                    this.state.fetched && <DropDownItem> Nothing Found {inputValue}</DropDownItem>}
                </DropDown>
              )}
            </div>
          )}
        </Downshift>
      </SearchStyles>
    );
  }
}

export default AutoComplete;
