import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, water, light }) {

	function handkeClick(plantName){
		alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
	}
	return (
		<li key={id} className='lmj-plant-item' onClick={()=>handkeClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem 
