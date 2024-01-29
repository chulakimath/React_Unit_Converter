import React, { useEffect, useState } from 'react'


const App = () => {
  const [topValue, setTopValue] = useState('');
  const [bottomValue, setBottomValue] = useState('');
  const [topLabel, settopLabel] = useState("Centimeter");
  const [bottomLabel, setbottomLabel] = useState("Meter");
  const [cm, setcm] = useState(true);
  const [deg, setdeg] = useState(true);
  const [toggle, settoggle] = useState(false)
  useEffect(() => {
    if(toggle){
      let degree =((5/9)*(topValue-32)).toFixed(3);
      let fahrenheit=((9/5)*topValue+32).toFixed(3);
      setBottomValue(deg ? fahrenheit:degree)
    }else{
      let meater = topValue / 100;
      let centimeter = topValue * 100;
      setBottomValue(cm ? meater : centimeter)
    }
  }, [topValue, cm, deg])

    useEffect(()=>{
      if(toggle){
        if(deg){
          settopLabel('Degree Celsius');
          setbottomLabel('Degree Fahrenheit');
        }
        else{
          settopLabel('Degree Fahrenheit');
          setbottomLabel('Degree Celsius');
        }
      }
      else{
        if(cm){
          settopLabel('Centimeter');
          setbottomLabel('Meter');
        }
        else{
          settopLabel('Meter');
          setbottomLabel('Centimeter');
        }
      }
    },[toggle])

  useEffect(() => {
    setTopValue("")
    setBottomValue("")
  }, [toggle]);

  const cliclHandler = () => {
    let tp = topLabel;
    let bt = bottomLabel;
    setbottomLabel(tp);
    settopLabel(bt);
    setcm(prev =>!prev);
    setdeg(prev=>!prev);
  }


  return (
    <>
      <div className='h-screen flex flex-col items-center pt-5 bg-slate-950'>
        <h1 className='text-white text-3xl text-center'>Unit Converter</h1>
        <div>
          <select 
          onChange={(e)=>{
           settoggle(e.target.value==='temprature'? true:false);
          }}
          className='bg-slate-900 text-white border-2 shadow-sm shadow-yellow-300 focus:outline-none'
          >
            <option value="length">Length</option>
            <option value="temprature">Temprature</option>
          </select>
        </div>
        <div className=' bg-slate-900 flex flex-col items-center justify-center gap-4 px-10 rounded-lg py-8 my-4 sm:px-48'>
          <div className='flex flex-col text-center'>
            <label className='text-white text-2xl' htmlFor="">{topLabel}</label>
            <input className='border-2 border-slate-900 rounded-lg text-center p-3 focus:outline-1 outline-red-300'
              type='text' placeholder={`Enter in ${topLabel}`}
              value={topValue}
              onChange={(e) => setTopValue(prev => !isNaN(e.target.value) ? e.target.value : prev)}
            />
          </div>
          <button className='bg-slate-900 border border-white  shadow-sm shadow-white px-8 py-2 rounded-xl hover:shadow-md hover:shadow-red-300 transition duration-300'
            onClick={cliclHandler}
          >👆👇</button>
          <div className='flex flex-col text-center'>
            <label className='text-white text-2xl' htmlFor="">{bottomLabel}</label>
            <input className='border-2 border-slate-100 rounded-lg text-center p-3 bg-slate-500 focus:outline-none'
              type='text' placeholder={`Values in ${bottomLabel}`}
              value={bottomValue}
              readOnly
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
