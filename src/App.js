import React, { useState } from 'react';
import Header from './UI/Header'
import InvForm from './Inv/InvForm';
import InvTable from './Inv/InvTable';

function App() {

  const [calculateInv, setCalculateInv] = useState('')

  const getDataInput = (data) => {
    setCalculateInv(data);
  }

  return (
    <div>
      <Header />

      <InvForm getData={getDataInput}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <InvTable  data={calculateInv} />
    </div>
  );
}

export default App;
