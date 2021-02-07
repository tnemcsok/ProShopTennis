import styled from 'styled-components';

const UploadResultStyle = styled.div`
width: 60vw;
border-radius:    0 0 1.071rem 1.071rem;
margin: 100px auto;
color: black;

h2 {
    background-color:  rgb(64, 126, 147);
    color: white;
    border-radius:    1.071rem 1.071rem 0 0;
    padding: 10px;
    margin-bottom: 0;
    text-align: center;
}

.add_result {
    margin: 0;
    background-color: hsla(207, 20%, 91%,1);
    padding: 20px 40px;
}

.point {
    margin-bottom: 15px;
    margin-left: 15px;
}

.label_date {
    margin-left: 20px;
}

.date {
  margin-left: 15px;
}

.type {
    margin-bottom: 15px;
    margin-left: 15px;
    margin-right: 20px;
}

.number {
    margin-left: 15px,
}

p {
    display: inline-block;
    margin-right: 15px;
}

.image {
  width: 75%;
  margin-left: 30px;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid black;
  margin-bottom: 15px;
}
.label_review {
    display: block;
}

textarea {
resize: none;
width: 100%;
margin-bottom: 15px;
}

.places {
    display: grid;
    grid-template-rows: repeat(7, auto);
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: column;
    grid-column-gap: 15px;
}

.morePlaces {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
}

.place {
    margin-left: 40px;
    margin-bottom: 5px;
}

.submitButton {
    display: block;
    margin: 30px auto;
    font-size: 1.5rem;
    color: white;
    background-color: ${props => props.theme.green};
    padding: 5px;
}
`;

export default UploadResultStyle;