import { ContenedorFormulari } from "../ContenedorFormulari/ContenedorFormulari_styled";

const Panell = ({ paginas, idiomas, setPaginas, setIdiomas }) => {
  const incrementarPaginas = () => {
    setPaginas(parseInt(paginas) + 1);
  };

  const decrementarPaginas = () => {
    if (paginas > 0) {
      setPaginas(parseInt(paginas) - 1);
    }
  };

  const incrementarIdiomas = () => {
    setIdiomas(parseInt(idiomas) + 1);
  };

  const decrementarIdiomas = () => {
    if (idiomas > 0) {
      setIdiomas(parseInt(idiomas) - 1);
    }
  };

  return (
    <ContenedorFormulari>
      <div>
        <label htmlFor="paginas">Número de páginas</label>
        <div>
          <button onClick={incrementarPaginas}>+</button>
          <input
            id="paginas"
            type="text"
            min="0"
            value={paginas}
            onChange={(event) => setPaginas(event.target.value)}
          />
          <button onClick={decrementarPaginas}>-</button>
        </div>
      </div>
      <br />
      <div>
        <label htmlFor="idiomas">Número de idiomas</label>

        <div>
          <button onClick={incrementarIdiomas}>+</button>
          <input
            id="idiomas"
            type="text"
            min="0"
            value={idiomas}
            onChange={(event) => setIdiomas(event.target.value)}
          />
          <button onClick={decrementarIdiomas}>-</button>
        </div>
      </div>
    </ContenedorFormulari>
  );
};

export default Panell;
