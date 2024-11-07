import { QRCode } from 'react-qrcode-logo';
import './App.css'
import React, { useRef, useState } from 'react';

function App() {
  const [value, setValue] = useState<string>('')
  const [file, setFile] = useState<string>('')
  const [qrVisible, setQrVisible] = useState(false)
  const qrCodeRef = useRef<QRCode>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value
    setValue(inputValue)
    if(!inputValue) {
      setQrVisible(false)
    }
  }

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      setFile(URL.createObjectURL(e.target.files[0]))
    }
  }

  const generateQRCode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(value) {
      setQrVisible(true)
    }
  }

  const uploadQRCode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    qrCodeRef.current?.download('png', 'qrCode')
  }

  return (
    <div className='container'>
      <h1>Let's generate an awesome <span className="nowrap">QR Code 🔥</span></h1>
      <input 
        type="text"
        value={value} 
        placeholder='Type your URL ...'
        onChange={handleChange}
        className="conttainer__input" 
      />
      <label 
        className="container__label" 
        htmlFor="fileUpload"
      >
        {/* <i className="upload"></i> */}
        Upload a logo
      </label>
      <input 
        id="fileUpload"
        type="file"
        placeholder='Upload a logo ...'
        onChange={uploadFile}
        className="container__input" 
      />
      <button 
        className="container__btn"
        onClick={generateQRCode}
      >Generate QR Code</button>
      {qrVisible && <div className='qrcode-generator'>
        <QRCode 
          value={value}
          size={225}
          logoImage={file}
          removeQrCodeBehindLogo={true}
          ref={qrCodeRef}
        />
        <button 
          className="container__btn download"
          onClick={uploadQRCode}
        >Upload QR Code</button>
      </div>}
    </div>
  )
}

export default App