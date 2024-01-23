import { useState } from "react";
import "./styles.css";

type Props = {
  onFilter: (min: number, max: number) => void;
};

type FormData = {
  minPrice?: number;
  maxPrice?: number;
};

export default function Filter({ onFilter }: Props) {
  const [formData, setFormData] = useState<FormData>({});

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onFilter(formData.minPrice || 0, formData.maxPrice || Number.MAX_VALUE);
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
    </>
  );
}
