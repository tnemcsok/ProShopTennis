import Player from '../components/Player';

const Játékos = props => (
    <div>
        <Player id={props.query.id} />
    </div>
);

export default Játékos;
