import {useHttp} from "../hooks/http.hook";

const useCurrencyService = () => {
    const {request} = useHttp()

    const _apiBase = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?`

    const getAllCurrency = async () => {
        const res = await request(`${_apiBase}?json`)
        return res.map(_transformCurrency)
    }

    const getCurrentCurrency = async currentCurrency => {
        const res = await request(`${_apiBase}valcode=${currentCurrency}&date=20221118&json`)
        return res.map(_transformCurrency)
    }

    const _transformCurrency = currency => {
        return {
            currency: currency.cc,
            rate: currency.rate,
        }
    }

    return {
        getAllCurrency,
        getCurrentCurrency
    }

}

export default useCurrencyService