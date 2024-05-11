import React, { useState } from 'react';

import './App.css';


/***************************************************************
 * klasa: App
 * opis: 
 *       Główny komponent aplikacji do obliczania i zarządzania
 *       listą wskaźników BMI. Umożliwia dodawanie, edycję oraz
 *       usuwanie wpisów.
 * pola: 
 *       items - lista przechowująca wpisy BMI
 * autor: Bartek Pyka
 ***************************************************************/

export default function App() {
    const [items, setItems] = useState([]);
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [date, setDate] = useState('');

    // Zatwierdzenie formularza
        const handleSubmit = (e) => {
            e.preventDefault();
            const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
            setItems([...items, { weight, height, bmi, date }]);
            setWeight('');
            setHeight('');
            setDate('');
        };

    // Usuwanie z tablicy danego elementu
        const handleDeleteItem = (index) => {
            setItems(items.filter((item, idx) => idx !== index));
        };

    return (
        <div className='App'>
            <h1>Obliczanie BMI</h1>
            {/* Formularz */}
            <form onSubmit={handleSubmit}>
                <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="Waga w kg" required/>
                <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="Wzrost w cm" required/>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} required/>
                <button type="submit">Dodaj</button>
            </form>

            {/* Lista */}
            <ul style={{textAlign:"left"}}>
                {items.map((item, index) => (
                    <li key={index}>
                        {index + 1}Waga: {item.weight} kg, Wzrost: {item.height} cm, BMI: {item.bmi}, Data: {item.date}
                        <button onClick={() => handleDeleteItem(index)}>Usuń</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}