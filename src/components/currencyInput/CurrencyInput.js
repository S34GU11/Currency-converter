
import './currencyInput.css'


const CurrencyInput = props => {

    const {
        currencies,
        amount,
        currency,
        onCurrencyChange,
        onAmountChange,

    } = props

    return (
       <div className="inputGroup">
           <input
              type="text"
              className="currencyInput"
              value={amount}
              placeholder="100"
              onChange={ev => onAmountChange(ev.target.value)}/>
           <select
              value={currency}
              className="currencySelect"
              onChange={ev => onCurrencyChange(ev.target.value)}>
               {
                   currencies.map((currency, i) =>
                       (
                          <option
                             key={i}
                             value={currency.currency}
                             className="currencyOption"
                          >{currency.currency}</option>
                       )
                   )
               }

           </select>
       </div>
    )
}


export default CurrencyInput