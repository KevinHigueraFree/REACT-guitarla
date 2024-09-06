import { Fragment } from "react";
import { useMemo } from "react";

export default function Header({ carr, removeFromCarr, increaseQuantity,decreaseQuantity,clearCarr}) {
    // es un state derivado: una variable que depende de un state
    const isEmtpy = useMemo(() => carr.length === 0, [carr])// hacer cuando el carrito cambie
    const carrTotal = useMemo(() => carr.reduce((total, item) => total + (item.quantity * item.price), 0), [carr])// el 0 es para quwe comience sumar a partir de cero
    //lo que esta dentro del return es lo que se ejecutará
    return (
        <Fragment>

            <header className="py-5 header">
                <div className="container-xl">
                    <div className="row justify-content-center justify-content-md-between">
                        <div className="col-8 col-md-3">
                            <a href="index.html">
                                <img className="img-fluid" src="./img/logo.svg" alt="imagen logo" />
                            </a>
                        </div>
                        <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                            <div
                                className="carrito"
                            >
                                <img className="img-fluid" src="./img/carrito.png" alt="imagen carrito" />

                                <div id="carrito" className="bg-white p-3">
                                    {isEmtpy ? (// uso de un ternario
                                        <p className="text-center">El carrito esta vacio</p>

                                    ) : (
                                        <Fragment>
                                            <table className="w-100 table">
                                                <thead>
                                                    <tr>
                                                        <th>Imagen</th>
                                                        <th>Nombre</th>
                                                        <th>Precio</th>
                                                        <th>Cantidad</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {carr.map(guitar => (


                                                        <tr key={guitar.id}>
                                                            <td>
                                                                <img className="img-fluid" src={`/img/${guitar.image}.jpg`} alt="imagen guitarra" />
                                                            </td>
                                                            <td>{guitar.name}</td>
                                                            <td className="fw-bold">
                                                                {guitar.price}
                                                            </td>
                                                            <td className="flex align-items-start gap-4">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-dark"
                                                                    onClick={()=>decreaseQuantity(guitar.id)}//mandamos llamar la funcion del app.jsx
                                                             
                                                                
                                                                >
                                                                    -
                                                                </button>
                                                                {guitar.quantity}
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-dark"
                                                                    onClick={()=>increaseQuantity(guitar.id)}//mandamos llamar la funcion del app.jsx
                                                                >
                                                                    +
                                                                </button>
                                                            </td>
                                                            <td>
                                                                <button
                                                                    className="btn btn-danger"
                                                                    type="button"
                                                                    onClick={() => removeFromCarr(guitar.id)}
                                                                >
                                                                    X
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <p className="text-end">Total pagar: <span className="fw-bold">{carrTotal}</span></p>
                                        </Fragment>
                                    )}
                                    <button 
                                    className="btn btn-dark w-100 mt-3 p-2"
                                    onClick={clearCarr}
                                    >Vaciar Carrito</button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}

