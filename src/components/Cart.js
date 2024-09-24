// fonction pour le panier du site
import '../styles/Cart.css'

function Cart()
{
    const PrixMonstera = 8;
    const PrixLierre = 10;
    const PrixFleurs = 15;
    return (<div className='lmj-cart'>
                <h2>Panier</h2>
                  <ul>
                    <li>Monstera : {PrixMonstera} F</li>
                    <li> Lierre : {PrixLierre} F</li>
                    <li> Fleurs : {PrixFleurs} F</li>
                  </ul>
                  <h3>Total : {PrixLierre+PrixFleurs+PrixMonstera} F</h3>
            </div>)
}

export default Cart