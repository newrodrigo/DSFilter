import './styles.css';

export default function Filter() {
  return (
    <div className="dsf-card-filter dsf-mb20">
      <form className="dsf-form-filter">
        <div>
          <input type="text" placeholder="Preço mínimo" />
        </div>
        <div>
          <input type="text" placeholder="Preço máximo" />
        </div>
        <button type="submit">Filtrar</button>
      </form>
    </div>
  );
}
