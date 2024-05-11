import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/***************************************************************
 * klasa: App
 * 
 * opis: Aplikacja zawiera formularz rejestracyjny, który dodaje
 *       użytkowników do listy i wyświetla tę listę.
 * 
 * autor: Bartek Pyka
 * 
 ***************************************************************/

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '' });

  // Tutaj się dzieje magia (kiedy zmieniasz wartość w input to się aktualizuje w zmienne "newUser")
    const handleChange = (e) => {
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

  // Dodawanie do listy użytkowników
    const handleSubmit = (e) => {
      e.preventDefault();
      setUsers([...users, newUser]);
      setNewUser({ firstName: '', lastName: '', email: '' }); // Reset form fields after submission
    };

  return (
    <div className="container mt-4">
      <h1>Formularz rejestracyjny</h1>
      {/* Formularz */}
        <form onSubmit={handleSubmit} className="mb-3 fs-5">
          <div className="form-group">
            <label htmlFor="firstName">Imię:</label>
            <input type="text" className="form-control" id="firstName" name="firstName" value={newUser.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Nazwisko:</label>
            <input type="text" className="form-control" id="lastName" name="lastName" value={newUser.lastName} onChange={handleChange} required />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" name="email" value={newUser.email} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Dodaj użytkownika</button>
        </form>

      {/* Lista użytkowników */}
        <h2>Lista użytkowników</h2>
        <ul className="list-group">
          {users.map((user, index) => (
            <li key={index} className="list-group-item">
              {user.firstName} {user.lastName} - {user.email}
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;
