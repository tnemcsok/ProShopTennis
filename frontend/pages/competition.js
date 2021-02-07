import SingleCompetition from '../components/SingleCompetition';

const Competition = props => (
  <div>
    <SingleCompetition id={props.query.id} />
  </div>
);

export default Competition;
