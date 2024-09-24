// liste des plantes

import"../styles/ShoppingList.css"
import { plantList } from "../datas/plantList"

import PlantItem from "./PlantItem"

/*const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]*/


//fonction pour parcourir la liste des plantes

function ShoppingList(){
    const categories = [];
    
    plantList.forEach(plant=>{
        if(!categories.includes(plant.category)){

            categories.push(plant.category)
        }
        
    })
    //console.log(categories)

    return (
        <div>
            <ul>
                {categories.map((category, index) =>(
                    <li key={`${category}-${index}`}>{category}</li>
                    ))}
            </ul>
           {/*<ul>
                {plantList.map((plant) => (
                    <li key={plant.id} className='lmj-plant-item'>
                        {plant.isBestSale ? <span>🔥</span> :null}
                        {plant.name}
                        <CareScale careType='water' scaleValue={plant.water} />
						<CareScale careType='light' scaleValue={plant.light} />
                    </li>

                ))}
            </ul>*/} 
            <ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul>
        </div>
    )
}

export default ShoppingList
