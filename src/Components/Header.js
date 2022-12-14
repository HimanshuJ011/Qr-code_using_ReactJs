import { useState } from 'react';
import { QRCodeSVG} from "qrcode.react";

function Header(){
    const [qrCode, setQrCode] = useState();
  return (
    <>
    <div className='heading'><h1>QR_Code Generator</h1></div>
    <div className="App-header">
        <h2>Write Some text here....</h2>
    <header className='header'>    
     <input className='input' type="text" placeholder='QR_Code text' onChange={(e)=>{ setQrCode(e.target.value)}} />
     {qrCode && <><h2>QR Code is here...</h2> <QRCodeSVG className='qrImg' value={qrCode} /></>}
   </header>
  </div>
  </>
  );
}

export default Header;
