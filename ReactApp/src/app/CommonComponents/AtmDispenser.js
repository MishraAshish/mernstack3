import React, { useState } from 'react';

export const AtmDispenser = () => {

    //const [homeLink, setHomeLink] = useState("ATM Money Dispenser");
    const [amount, setAmount] = useState(0);
    const [denominationSet, setDenominationSet] = useState([]);
    const defaultSet = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    
    const moneyToBeDisbursed = ()=>{
        let total = amount;
        let result = [];
    
        if (amount > 0 && denominationSet.length === 0) {
            for (let i = 0; i < defaultSet.length; i++) {
                result.push(Math.floor(total / defaultSet[i]));
                total = total % defaultSet[i];
            }
        }
        console.log(result);
        setDenominationSet(result.reverse());
    }

    const onMoneyEntered = (e)=>{
        if(e.target){
            setAmount(e.target.value),
            setDenominationSet([])
        }else{
            console.log("Some Issue"); 
        }
    }

    return(
        <div className="container">
            <main className="row form">
                <div className="col-md-12 userentry">
                    <h2>Welcome to ATM</h2>
                    <p>Enter The Amount</p>
                    <input type="number" className="form-control col-md-2" value={amount} onChange={onMoneyEntered} />
                    <button onClick={moneyToBeDisbursed} className="btn btn-primary">Get Money</button>
                </div>     
                <div className="col-xs-10 notesdisplay">
                    <h4>You will get following amount</h4>
                        <ul className="notesList">
                        {denominationSet.length > 0 ? defaultSet.reverse().map((notes, index) =>
                            <li key={index}>{`${denominationSet[index]} notes of Rs ${notes}`}</li>
                        ) : ''}
                        </ul>
                        
                    <h4 className="dispensed">Total notes dispensed: {denominationSet.reduce((a, b) => a + b, 0)}</h4>
                </div>
            </main>               
        </div>
    )
}

// Create a react page like atm dispenser using hooks, it should update the denomination within functional 
// component or create this using react class component
// 	Denominations are of : 1,2,5,10,20,50,100,200,500,1000,2000
// 	E.G. Amount 7863 -
// 	You will get following amount
// 	1 notes of $ 1
// 	1 notes of $ 2
// 	0 notes of $ 5
// 	1 notes of $ 10
// 	0 notes of $ 20
// 	1 notes of $ 50
// 	1 notes of $ 100
// 	1 notes of $ 200
// 	3 notes of $ 500
// 	3 notes of $ 2000
// 	Total notes dispensed: 12

// Create a component ATM Dispencer, IT will contain a text box to enter amount that needs to be withdrawn
// a button - with text withdraw : upon click it should display the minimum set of denominations of notes

// import React, { useState } from "react";
// const DENOMINATIONS = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000]
// let WithdrawComponent = (props) => {
//     let [withdrawAmt, changeWithdrawAmt] = useState(0)
//     // set to false because i was having trouble with conditionally rendering billsNeeded
//     // will be assigned to a Map later
//     let [billsNeeded, changeBillsNeeded] = useState(false);
//     let onChangeText = (evt) => {
//         let target = evt.target;
//         let typedValue = target.value;
//         changeWithdrawAmt(typedValue);
//     }
// }
// let onButtonClick = (evt) => {
//     let tempWithdrawAmt = withdrawAmt;
//     changeBillsNeeded(DENOMINATIONS.reduceRight((prev, current) => {
//         let numOfCurrentDenom = Math.floor(tempWithdrawAmt / current);
//         tempWithdrawAmt -= current * numOfCurrentDenom;
//         prev[current.toString()] = numOfCurrentDenom;
//         return prev;
//     }, new Map));
// };
// return (
//     <div className="col-md-12">
//         <b>Bank of the Best</b>
//         <input type="number" className="form-control col-md-6 withdraw-amt"
//             placeholder="Amount To Withdraw" onChange={onChangeText} />
//         <button onClick={onButtonClick}>Withdraw</button>
//         {billsNeeded ? 
//             DENOMINATIONS.map((denomination) => (<li key={denomination}>{billsNeeded[denomination] + " notes of $" + denomination}</li>)) 
//             : ""}
//     </div>
// )
// }
// export default WithdrawComponent;