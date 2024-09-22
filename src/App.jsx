import { useState } from 'react';
import Calendario from './components/Calendario';
import Horoscopo from './components/Horoscopo';

const getZodiacSign = date => {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    // Función de signos zodiacales
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return 'Acuario';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return 'Piscis';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return 'Aries';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return 'Tauro';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return 'Géminis';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return 'Cáncer';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return 'Leo';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return 'Virgo';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return 'Libra';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return 'Escorpio';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return 'Sagitario';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return 'Capricornio';
    }
    return 'Desconocido';
};

const App = () => {
    const [birthDate, setBirthDate] = useState(null);
    const [zodiacSign, setZodiacSign] = useState('');

    const handleDateChange = date => {
        const selectedDate = new Date(date);
        setBirthDate(selectedDate);
        setZodiacSign(getZodiacSign(selectedDate));
    };

    return (
        <div className="container">
            <h1 className="header">Bienvenidos Hor&oacute;scopo React</h1>
            <Calendario onDateChange={handleDateChange} />
            <Horoscopo zodiacSign={zodiacSign} />
        </div>
    );
};

export default App;
