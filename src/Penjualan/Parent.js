import React from 'react'

import Jambu from '../Penjualan/Jambu';
import Naga from '../Penjualan/Naga';
import Sirsak from './Sirsak';



const Parent = () => {
    return <div>
        {
            <div>

                <Jambu nama="Buah Jambu" harga="50.000" />


                <Naga nama="Buah Naga" harga="70.000" />

                <Sirsak nama="Buah Sirsak" harga="90.000" />

                {/* <Nike nama="AirJordan" harga="2.000.000" />  */}
            </div>

        }
    </div>



}

export default Parent;