import {useState} from 'react'

const Prices = (props) => {
    const [currency, setCurrency] = useState('USD');
    return (
        <div>
            <ul className='list-group'>
                <li className='list-group-item'>
                    Bitcoin rate for {props.bpi[currency].description} : <span className='badge badge-primary'>{props.bpi[currency].code}</span>
                    <strong>{props.bpi[currency].rate}</strong>
                </li>
            </ul>
        </div>
    )

}

export default Prices