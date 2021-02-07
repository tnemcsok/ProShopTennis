import styled from 'styled-components';

const UploadScheduledStyle = styled.div`
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

}

.date {
    margin-left: 15px;
}

.type {
    margin-bottom: 15px;
    margin-left: 25px;
}

.number {
    margin-left: 15px,
}

p {
    display: inline-block;
    margin-right: 15px;
}




.entrants {
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-row-gap: 15px;
    grid-column-gap: 40px;
}


.label_start {
    margin-left: 15px;
}

.start {
    margin-left: 15px;
}

input.place {
  margin-left: 20px;
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

export default UploadScheduledStyle;