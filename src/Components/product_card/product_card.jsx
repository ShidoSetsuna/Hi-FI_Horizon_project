import { GiSettingsKnobs } from "react-icons/gi";
import { API_BASE_URL } from "../../config/api";

export default function ProductCard({ itemId, name, image, price }) {
  return (
    <article>
      <div>
        <button>Compare</button>
        <GiSettingsKnobs />
      </div>
      <img src={`${API_BASE_URL}/${image}`} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Add to Cart</button>
      <p>stock</p>
    </article>
  );
}
