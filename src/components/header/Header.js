
import './headers.css'

const Header = props => {

    const {
        eur,
        usd,

    } = props

    return (
       <header className="header">
           <h1>Currency converter</h1>
           <div>
               Exchange rate: USD:{usd} / EUR: {eur}
           </div>
       </header>
    )
}



export default Header