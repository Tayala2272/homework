import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/***************************************************************
   * klasa: App
   * opis: Aplikacja React służąca do konwersji jednostek miary,
   *       zapisuje wyniki konwersji oraz pozwala je przeglądać.
   * 
   * pola: 
   *       history - lista z historią konwersji
   * 
   * autor: Bartek Pyka
 ***************************************************************/

function App() {
  const [value, setValue] = useState('')
  const [fromUnit, setFromUnit] = useState('mm')
  const [toUnit, setToUnit] = useState('cm')
  const [history, setHistory] = useState([])

  // Przeliczanie jednostek miary
    const convertUnits = (value, from, to) => {
      const conversions = {
        mm: 1,
        cm: 10,
        m: 1000,
        km: 1000000,
        mi: 1609340,
        ft: 304.8
      };
      return (value * conversions[from] / conversions[to]).toFixed(2)
    };

  // onSubmit
    const handleSubmit = (e) => {
      e.preventDefault()
      const conversionResult = convertUnits(value, fromUnit, toUnit)
      const resultString = `${value} ${fromUnit} = ${conversionResult} ${toUnit}`
      setHistory([...history, { value: value, from: fromUnit, to: toUnit, result: conversionResult, date: new Date().toLocaleString() }])
      alert(resultString)
      setValue('')
    };

  return (
    <div className="container mt-4">
      <h1>Kalkulator jednostek miary</h1>
      <form onSubmit={handleSubmit} className="mb-3">
        {/* Value */}
          <input type="number" value={value} onChange={e => setValue(e.target.value)} className="form-control" placeholder="Wprowadź wartość" required />

        {/* Wybierz z czego */}
          <label className='mt-5 mb-2 h4'>Wybierz co chcesz zamienić:</label>
          <select className="form-control" value={fromUnit} onChange={e => setFromUnit(e.target.value)}>
            <option value="mm">Milimetry</option>
            <option value="cm">Centymetry</option>
            <option value="m">Metry</option>
            <option value="km">Kilometry</option>
            <option value="mi">Mile</option>
            <option value="ft">Stopy</option>
          </select>

        {/* Na co */}
          <label className='mt-5 mb-2 h4'>Wybierz na co chcesz zamienić:</label>
          <select className="form-control mb-3" value={toUnit} onChange={e => setToUnit(e.target.value)}>
            <option value="mm">Milimetry</option>
            <option value="cm">Centymetry</option>
            <option value="m">Metry</option>
            <option value="km">Kilometry</option>
            <option value="mi">Mile</option>
            <option value="ft">Stopy</option>
          </select>
        <button type="submit" className="btn btn-primary">Konwertuj</button>
      </form>
      <h2>Historia konwersji</h2>
      <ul className="list-group">
        {history.map((item, index) => (
          <li key={index} className="list-group-item">
            {item.date}: {item.value} {item.from} = {item.result} {item.to}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
