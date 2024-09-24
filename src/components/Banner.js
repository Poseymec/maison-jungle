import '../styles/Banner.css'
import logo from '../assets/logo.png'


//creation de la fonction banner qui vas gerer  la nav bar du site

function Banner()
{ 
    
    const titre = 'La maison jungle'
    return (
    <div className='lmj-banner'>
        <img src={logo} alt='la maison jungle' className='lmj-logo' />
        <h1 className='lmj-titre'>{titre}</h1>
    </div>)
}

export default Banner