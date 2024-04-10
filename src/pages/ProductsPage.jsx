import  { useContext } from 'react';
import { CardComponent } from '../components/CardComponent';
import { ProductContext } from '../context/ProductContext'; // Importa el contexto directamente
import { CartContext } from '../context/CartContext'; // Importa el contexto directamente

export const ProductsPage = () => {
    const { products } = useContext(ProductContext); // Obtén el contexto directamente
    const { addProduct, removeProduct } = useContext(CartContext)

    return (
        <>
            <h1>Products</h1>
            <hr />
            {products.map((product) => (
                <CardComponent
                    key={product.id} // Asegúrate ex proporcionar una key única
                    id={product.id}
                    image={product.image} 
                    title={product.title} 
                    description={product.description}
                    price={product.price}
                    handlerAdd={() => addProduct(product)}
                    handlerRemove={ () => removeProduct(product.id)}
                />
            ))}
        </>
    );
};
