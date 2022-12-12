import { useState } from 'react';
import { QRCodeSVG} from "qrcode.react";
import './App.css';

function App() {
  const [qrCode, setQrCode] = useState();
  return (
    <div className="App">
    <input type="text" placeholder='Qr Code text' onChange={(e)=>{ setQrCode(e.target.value)}} />
    {qrCode && <QRCodeSVG value={qrCode} />}
    </div>
  );
}

export default App;
