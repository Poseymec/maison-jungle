
//fonction carescale 
import sun from '../assets/sun.svg'
import water from '../assets/water.svg'


//import { Suspense } from "react"


function CareScale({scaleValue, careType})
{
    
    const scaleType = careType === 'light'?( <img src={sun} alt='sun-icon'/>): (<img src={water} alt='sun-icon'/>)
    const range = [1, 2, 3]


    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span>: null
            )}
        </div>
    )
}

export default CareScale