import styled from 'styled-components';

const PrevCompStyles = styled.table`
  background-color: white;
  border: 1px solid black;
  margin-top: 10px;
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

export default PrevCompStyles;