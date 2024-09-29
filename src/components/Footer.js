import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function Blur(){
		if(!inputValue.includes('@')){
			alert("Attention , il n'y a pas de @ dans votre adresse")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>

			<input
				type='email'
				value={inputValue}

				onChange={(e)=> setInputValue(e.target.value)}
				onBlur={Blur}
			/>
		</footer>
	)
}

export default Footer