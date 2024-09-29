import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div
            onClick={quabtityLabel}

        >
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)

    function quabtityLabel(){
        const quantity = {
            1: 'peu',
            2: 'moderement',
            3: 'beaucoup'
        }

        alert( `Cette plante requiert ${quantity[scaleValue]} ${careType=== 'light' ? 'de lumiere':"d'arrosage"}` )
    }
}

export default CareScale