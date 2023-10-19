import React, { useState } from 'react';
import ButtonSubmit from '../UI/ButtonSubmit'
import ButtonReset from '../UI/ButtonReset'
import ErrorModal from './ErrorModal';
import styles from './InvForm.module.css';
const initialInvState = 
{
  curSaving: '',
  yearSaving: '',
  interest: '',
  duration: '',
};

const InvForm = (props) => {

  const formatter = new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
   
  // use like this:

    const[enteredInv,setEnteredInv] = useState(initialInvState);

    const[isInputValid, setIsInputValid] = useState(1);

    const inputValidator = (enteredInv) =>{
      for (let data in enteredInv){
        if(enteredInv[data] === 0 || enteredInv[data].length === 0 || isNaN(enteredInv[data])){
          setIsInputValid(0);
        }else{
          setIsInputValid(1)
        }
      }
    }

    const inputChangeHandler = (inputName,value) => {

      switch(inputName){

        case 'curSaving':
          setEnteredInv({...enteredInv, curSaving: parseFloat(value)})
        break;

        case 'yearSaving':
          setEnteredInv({...enteredInv, yearSaving: parseFloat(value)})
        break;

        case 'interest':
          setEnteredInv({...enteredInv, interest: parseFloat(value)})
        break;

        case 'duration':
          setEnteredInv({...enteredInv, duration: parseFloat(value)})
        break;

      }
      
    }



    const calculateHandler = (event) => {
      event.preventDefault();
      inputValidator(enteredInv);
      // Should be triggered when form is submitted
      // You might not directly want to bind it to the submit event on the form though...
      if(isInputValid){
        const yearlyData = []; // per-year results
    
        let currentSavings = +enteredInv.curSaving; // feel free to change the shape of this input object!
        const yearlyContribution = +enteredInv.yearSaving; // as mentioned: feel free to change the shape...
        const expectedReturn = +enteredInv.interest/ 100;
        const duration = +enteredInv.duration;
        let InvestedCapital = enteredInv.curSaving ;
        let totalInterest = 0;
    
        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
          const yearlyInterest = currentSavings * expectedReturn;
          totalInterest += yearlyInterest 
          currentSavings += yearlyInterest + yearlyContribution;
          InvestedCapital += enteredInv.yearSaving;
          yearlyData.push({
            // feel free to change the shape of the data pushed to the array!
            year: i + 1,
            yearlyInterest: formatter.format(yearlyInterest),
            savingsEndOfYear: formatter.format(currentSavings),
            yearlyContribution: formatter.format(yearlyContribution),
            InvCapital: formatter.format(InvestedCapital),
            totalInterest: formatter.format(totalInterest)
          });

          props.getData(yearlyData)
        }
      }else{
      }  
      // do something with yearlyData ...
    };

    const resetValue = () =>{
      let yearlyData = [];
      setEnteredInv(initialInvState)
      props.getData(yearlyData)
    }


    return (
      <div>

          <form onSubmit={calculateHandler} onReset={resetValue} className={styles.form}>
          <div className={styles['input-group']}>
            <div>
              <label htmlFor="current-savings">Current Savings (&euro;)</label>
              <input onChange={ (event) => inputChangeHandler('curSaving',event.target.value)} min={0} type="number" id="current-savings" value={enteredInv.curSaving > 0 ? enteredInv.curSaving : ''}/>
            </div>

            <div>
              <label htmlFor="yearly-contribution">Yearly Savings (&euro;)</label>
              <input onChange={ (event) => inputChangeHandler('yearSaving',event.target.value)}  min={0} type="number" id="yearly-contribution" value={enteredInv.yearSaving > 0 ? enteredInv.yearSaving : ''}/>
            </div>
          </div>

          <div className={styles['input-group']}>
            <div>
              <label htmlFor="expected-return">
                Expected Interest (%, per year)
              </label>
              <input onChange={ (event) => inputChangeHandler('interest',event.target.value)} min={0} type="number" id="expected-return" value={enteredInv.interest > 0 ? enteredInv.interest  : ''}/>
            </div>

            <div>
              <label htmlFor="duration">Investment Duration (years)</label>
              <input  onChange={ (event) => inputChangeHandler('duration',event.target.value)}  min={0}  type="number" id="duration" value={enteredInv.duration > 0 ? enteredInv.duration : ''}/>
            </div>
          </div>

          <div className={styles.actions}>
            <ButtonReset text={'reset'}/>
            <ButtonSubmit text={'calculate'}/>
          </div>
        </form>

        <div className={ !isInputValid ? 'd-block' : 'd-none'}>
          <ErrorModal />
        </div>
      </div>
    )
}

export default InvForm;