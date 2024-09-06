export default function Guitar({ guitar, setCarr,addToCarr }) {
  const { id, name, image, description, price } = guitar

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">{price}</p>
        <button
          type="button"
          className="btn btn-dark w-100"
          //todo setCarr es el promps de arriba, prevCarr es un arrgelo creado a partir de la copia de prevCarr + guitar      
         // onClick={() => setCarr(prevCarr => [...prevCarr, guitar])}//()=function(id) el ()=> evita que s ellame automaticamente y se llame cuando si ocurra el evento               
          onClick={() => addToCarr(guitar)}//()=function(id) el ()=> evita que s ellame automaticamente y se llame cuando si ocurra el evento               

        >Agregar al Carrito</button>
      </div>
    </div>
  )
}