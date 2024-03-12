import { useState } from 'react';
import hexToRgb from './HexToRgb';

const Converter = () => {
  const [rgb, setRgb] = useState('rgb(52, 73, 94)');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length < 7) {
      return;
    }

    const res = hexToRgb(inputValue);

    if (res !== null) {
      setRgb(`rgb(${res.r}, ${res.g}, ${res.b})`);
    } else {
      setRgb('Ошибка!');
    }
  };

  return (
    <form> 
      <div className='container' style={{backgroundColor: rgb !== 'Ошибка!' ? rgb : 'rgb(233, 75, 53)'}}>
        <input
          name='input'
          type='text'
          className='ConverterInput'
          onChange={handleChange}
          maxLength={7}
        />
        <div className='ConverterOutput'>{rgb}</div>
      </div>
    </form> 
  );
};

export default Converter;