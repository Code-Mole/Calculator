import React, { useState } from 'react'

function Calculator() {
    const [value, setValue] = useState('');
  const clickFunction = (e)=>{
    setValue(value + e.target.value)
    console.log(value);
  }

  const ClearAll = (e)=>{
    setValue(e.target.value = '')
  }

  const deleteElement = ()=>{
    setValue(value.slice(0,-1))
  }

  // const Evaluate = ()=>{
  //   setValue(eval(value))
  // }

  return (
    <>
    <div className='parent'>
        <div className='Input_field'>
         <input type="text" id='Input' value={value}/>
         {/* <div className='answer'>
          <input type="text" name="" id="answer" />
         </div> */}

        </div>
        <div className='buttons'>
          <button type='button' className='btn1' value='ac' onClick={ClearAll}>AC</button>
          <button type='button' className='btn' value='del' onClick={deleteElement}>DEL</button>
          <button type='button' className='btn' onClick={clickFunction}  value='00'>00</button>
          <button type='button' onClick={clickFunction}  className='btn' value='%'>%</button>

        </div>
        <div className='keys_container'>

        <div className='Operatant'>
          <div className='n7-n9'>
            <button type='button' onClick={clickFunction}id='key' value='7'>7</button>
            <button type='button' onClick={clickFunction}  id='key' value='4'>4</button>
            <button type='button'onClick={clickFunction} id='key' value='1'>1</button>
            <button type='button' onClick={clickFunction} id='key1'
            value='.'>.</button>
          </div>
          <div className='n4-n6'>
            <button type='button' onClick={clickFunction}  id='key' value='8'>8</button>
            <button type='button' onClick={clickFunction}  id='key' value='5'>5</button>
            <button type='button' onClick={clickFunction}  id='key' value='2'>2</button>
            <button type='button' onClick={clickFunction}  id='key1' value='0'>0</button>
          </div>
          <div className='n1-n3'>
            <button  type='button' onClick={clickFunction} id='key'
            value='9'>9</button>
            <button type='button' onClick={clickFunction}  id='key' value='6'>6</button>
            <button type='button' onClick={clickFunction} id='key' value='3'>3</button>
            <button type='button' onClick={(e)=>setValue(eval(value))}  id='key1' value='='>=</button>
          </div>

        </div>
      
        <div className='Operators'>
            <button type='button' onClick={clickFunction} id='keyFun' value='*'>*</button>
            <button type='button' onClick={clickFunction} id='keyFun' value='/'>/</button>
            <button type='button' onClick={clickFunction} id='keyFun' value='+'>+</button>
            <button type='button' onClick={clickFunction}  id='keyFun' value='-'>-</button>
        </div>
        </div>

         <div className='text'>
          <h1><span id='mole'>Mole`s </span>Calculator</h1>
         </div>
    </div>
    
    </>
  )
}

export default Calculator