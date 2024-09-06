import { useState, useEffect } from 'react';
import Header from './components/Header';
import Guitar from './components/Guitar';
import { db } from './data/db';

//App es el componente
function App() {

  //!para  general un arreglo en memoria
  // if localStorageCarr have, become to JSON formate, else will be empty array
  const initialCarr = () => {
    const localStorageCarr = localStorage.getItem('carr');
    return localStorageCarr ? JSON.parse(localStorageCarr) : []
  }
  //console.log('es este',initialCarr);
//eliminamos el setData porque nunca se usó
  const [data] = useState(db);//tomamos los datos de la base de datos
  const [carr, setCarr] = useState(initialCarr);//creamos un arreglo de carrito de compras

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 0;


  //! to save on memory the value carr
  // Run this effect when the component mounts or 'carr' changes
  useEffect(() => {
    // Store 'carr' in local storage as a JSON string
    localStorage.setItem('carr', JSON.stringify(carr));
  }, [carr]); // Re-run this effect when 'carr' changes

  function addToCarr(item) {// creamos una funcion en la que  se retorn el arreglo con una copia de prevCarr+el nuevo item ingresado
    const itemExist = carr.findIndex(e => e.id === item.id);
    // con esto las guitarras solo se agregan una vez
    if (itemExist >= 0) {
      // con ... spread operator, crea una copia del state
      // si la guitarra ya esta en el carrito, aumentamos la cantidad y actualizamos el carrito
      const updateCarr = [...carr]
      updateCarr[itemExist].quantity++
      setCarr(updateCarr)
    } else {
      item.quantity = 1;
      setCarr([...carr, item])  //agregar guitar al carrito
    }

  }

  function removeFromCarr(id) {
    setCarr(prevCarr => prevCarr.filter(guitar => guitar.id !== id))
  }

  //! incrementar cantidad del guitar.quantity
  function increaseQuantity(id) {
    const updateCarr = carr.map(item => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        //retornamos una copia del item y modificamos el quantity 
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item;
    })
    setCarr(updateCarr)
  }
  function decreaseQuantity(id) {
    const updateCarr = carr.map(item => {
      if (item.id === id && item.quantity > MIN_ITEMS
      ) {
        //retornamos una copia del item y modificamos el quantity de item siendo igual a item.quantity-1 
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item;
    })
    setCarr(updateCarr)
  }
  function clearCarr() {
    setCarr([])
  }

  return (
    //state
    <>
      <Header
        carr={carr}
        removeFromCarr={removeFromCarr}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCarr={clearCarr}
      />





      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((e) => (
            <Guitar
              key={e.id}
              guitar={e}
              setCarr={setCarr}
              addToCarr={addToCarr}
            />

          ))}


        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>

    </>
  )
}

export default App
