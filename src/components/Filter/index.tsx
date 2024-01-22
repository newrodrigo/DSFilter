import { useContext, useState } from "react";
import "./styles.css";
import { findByPrice } from "../../services/product-service"; // Certifique-se de importar ProductDTO
import Listing from "../Listing";
import { ProductDTO } from "../../models/products";
import { ContextProductCount } from "../../utils/context-product";

type FormData = {
  minPrice?: number;
  maxPrice?: number;
};

export default function Filter() {
  const [formData, setFormData] = useState<FormData>({});
  const [searchResults, setSearchResults] = useState<ProductDTO[]>([]);

  const { setContextProductCount } = useContext(ContextProductCount);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const results = findByPrice(
      formData.minPrice || 0,
      formData.maxPrice || Number.MAX_VALUE
    );
    setSearchResults(results);
    setContextProductCount(results.length);
  }

  function handleCleanForm() {
    setFormData({});
  }

  return (
    <>
      <div className="dsf-card-filter dsf-mb20">
        <form onSubmit={handleSubmit} className="dsf-form-filter">
          <div>
            <input
              name="minPrice"
              value={formData.minPrice || ""}
              type="text"
              placeholder="Preço mínimo"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              name="maxPrice"
              value={formData.maxPrice || ""}
              type="text"
              placeholder="Preço máximo"
              onChange={handleInputChange}
            />
          </div>
          <div className="dsf-mb20">
            <button type="submit">Filtrar</button>
          </div>
          <div>
            <button onClick={handleCleanForm}>Limpar</button>
          </div>
        </form>
      </div>
      <Listing product={searchResults} />
    </>
  );
}
