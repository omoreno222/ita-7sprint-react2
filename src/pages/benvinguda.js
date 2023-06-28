import { useNavigate } from "react-router-dom";

const Benvinguda = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Bienvenidos a la aplicación de Presupuestos de páginas Web</h1>
      <p>
        En esta aplicación podrás parametrizar tu futura página web sabiendo así
        su coste desde el primer momento. Gracias.
      </p>
      <button onClick={() => navigate(process.env.PUBLIC_URL + "/pressupost")}>
        Empezar con un presupuesto
      </button>
    </div>
  );
};

export default Benvinguda;
