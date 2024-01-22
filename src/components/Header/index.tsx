import { useContext } from "react";
import "./styles.css";
import { ContextProductCount } from "../../utils/context-product";

export default function Header() {
  const { contextProductCount } = useContext(ContextProductCount);

  
  return (
    <header className="dsf-mb20">
      <div className="dsf-container header">
        <h1>DSFilter</h1>
        {contextProductCount > 0 && <p>{contextProductCount} produtos(s)</p>}
      </div>
    </header>
  );
}
