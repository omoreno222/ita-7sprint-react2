import { ContenedorFormulari } from "../ContenedorFormulari/ContenedorFormulari_styled";

const Panell = ({ paginas, idiomas, setPaginas, setIdiomas }) => (
  <ContenedorFormulari>
    <div>
      <label htmlFor="paginas">Número de págines</label>
      <div>
        <input
          id="páginas"
          type="text"
          min="0"
          value={paginas}
          onChange={(event) => setPaginas(event.target.value)}
        />
      </div>
    </div>
    <div>
      <label htmlFor="idiomas">Número de idiomas</label>
      <div>
        <input
          id="idiomas"
          type="text"
          min="0"
          value={idiomas}
          onChange={(event) => setIdiomas(event.target.value)}
        />
      </div>
    </div>
  </ContenedorFormulari>
);

export default Panell;
