import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '/src/style/NavBarComponent.css'

export const NavBarComponent = () => {

  const { shoppingList } = useContext(CartContext)



  return (


    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
                <NavLink to="/" className="navbar-brand active">ShoopingHouse</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink to="/products" className="nav-link " aria-current="page">Productos</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/Carrito" className="nav-link " aria-current="page">Carrito</NavLink>
                    </li>
                </ul>
                </div>
                <NavLink className='cart-icon' to='/carrito'>
                <Badge badgeContent={shoppingList.length} color="primary">
                    <ShoppingCartIcon />
                  </Badge>
                </NavLink>
            </div>
        </nav>

  )
}
