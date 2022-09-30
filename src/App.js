import { useState } from 'react';
import './App.css';

function App() {
  const [mailit, setMailit] = useState('')
  const [kilometrit, setKilometrit] = useState('')

  function laske(e){
    e.preventDefault()
    const tulos = mailit * 1.609
    setKilometrit(tulos)
  }
  
  return (
 <div id="content">
  <h3> mailit kilometreiksi</h3>
  <form onSubmit={laske}>
    <div> Mailit 
    <input value={mailit} onChange={e => setMailit(e.target.value)}/>
    </div>
    <div>
      <label> Kilometrit</label>
      <output>{kilometrit}</output>
    </div>
    <button> Laske</button>
  </form>
 </div>
  );
}

export default App;
