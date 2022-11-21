import { useState, useEffect } from "react";
import useCurrencyService from "../../services/CurrencyService";

import Header from "../header/Header";
import CurrencyInput from "../currencyInput/CurrencyInput";

import './app.css'

const App = () => {
    const [currencyList, setCurrencyList] = useState([])
    const [currencyOne, setCurrencyOne] = useState('USD')
    const [currencyTwo, setCurrencyTwo] = useState('EUR')
    const [amountOne, setAmountOne] = useState('')
    const [amountTwo, setAmountTwo] = useState('')

    const { getAllCurrency } = useCurrencyService()

    useEffect(() => {

        getAllCurrency()
           .then(res=> setCurrencyList(res))

    }, [])


    const getCurrentCurrencyRate = nameOfCurrency => {
        let rate

         currencyList.filter(el => {
            if (el.currency === nameOfCurrency)
           rate = el.rate
        })

        return rate
    }

    const format = number => number.toFixed(2)

    const handleAmountOneChange = amountOne => {
        setAmountTwo(format(amountOne * getCurrentCurrencyRate(currencyOne) / getCurrentCurrencyRate(currencyTwo)))
        setAmountOne(amountOne)
    }

    const handleCurrencyOneChange = currency => {
        setAmountTwo(format(amountOne * getCurrentCurrencyRate(currencyOne) / getCurrentCurrencyRate(currencyTwo)))
        setCurrencyOne(currency)
    }

    const handleAmountTwoChange = amountTwo => {
        setAmountOne(format(amountTwo * getCurrentCurrencyRate(currencyTwo) / getCurrentCurrencyRate(currencyOne)))
        setAmountTwo(amountTwo)
    }

    const handleCurrencyTwoChange = currency => {
        setAmountOne(format(amountTwo * getCurrentCurrencyRate(currencyTwo) / getCurrentCurrencyRate(currencyOne)))
        setCurrencyTwo(currency)
    }

    return (
       <>
           <Header
              eur={getCurrentCurrencyRate('EUR')}
              usd={getCurrentCurrencyRate('USD')}/>
           <CurrencyInput
              currencies={currencyList}
              amount={amountOne}
              currency={currencyOne}
              onCurrencyChange={handleCurrencyOneChange}
              onAmountChange={handleAmountOneChange}/>
           <CurrencyInput
              currencies={currencyList}
              amount={amountTwo}
              currency={currencyTwo}
              onCurrencyChange={handleCurrencyTwoChange}
              onAmountChange={handleAmountTwoChange}/>
       </>
    )
}

export default App