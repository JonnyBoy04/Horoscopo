import PropTypes from 'prop-types';
import './Cards.css';

const Calendario = ({ onDateChange }) => {
    return (
        <div className="card" style={{ marginBottom: '20px' }}>
            <h2>Fecha de Nacimiento</h2>
            <input
                type="date"
                onChange={e => onDateChange(e.target.value)}
                style={{ padding: '10px', fontSize: '16px', borderRadius: '5px' }}
            />
        </div>
    );
};

Calendario.propTypes = {
    onDateChange: PropTypes.func.isRequired,
};

export default Calendario;
