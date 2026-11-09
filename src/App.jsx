import { useState, useEffect } from 'react'
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';


function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  console.log("From is:", from);
  
  let data  =  useCurrencyInfo(from);
  console.log("Data we got is", data);
  
  const options = Object.keys(data);

  const swap = ()=> {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convertAmount = () => setConvertedAmount((amount * data[to]).toFixed(3));

  return (
    <>
      <div id='body' className='w-screen h-screen flex justify-center items-center bg-gray-500'>
        <div id='container' className='p-3 relative flex flex-col gap-3 bg-linear-30 from-cyan-300 to-blue-400'>
          <InputBox
            label="From"
            amount={amount}
            currency={from}
            onAmountChange={(amount)=> setAmount(amount)}
            onCurrencyChange={(currency)=> setFrom(currency)}
            currencyOptions={options}
          />
          <span className='absolute p-2 rounded-lg bg-blue-500 top-25 left-37 cursor-pointer'
            onClick={swap}
          >
            Swap
          </span>
          <InputBox
            label="To"
            amount={convertedAmount}
            currency={to}
            onCurrencyChange={(currency)=> setTo(currency)}
            currencyOptions={options}
            isDisabled
          />
          <button
          onClick={convertAmount}
          className='p-3 bg-blue-700 text-white cursor-pointer rounded-xl hover:bg-blue-950 transition-all'
          >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </div>

      </div>
    </>
  )
}

export default App
