import { useState, useEffect } from "react";
import "./shop_filter_item.scss";

export default function ShopFilterItem({
  name,
  options,
  type = "checkbox",
  priceRange,
}) {
  const [minPrice, setMinPrice] = useState(priceRange?.min || 0);
  const [maxPrice, setMaxPrice] = useState(priceRange?.max || 0);

  useEffect(() => {
    if (minPrice > maxPrice) {
      setMinPrice(maxPrice);
    }
  }, [minPrice, maxPrice]);

  useEffect(() => {
    if (maxPrice < minPrice) {
      setMaxPrice(minPrice);
    }
  }, [maxPrice, minPrice]);

  if (type === "range") {
    return (
      <details className="filter-item">
        <summary className="filter-item__name">{name}</summary>
        <div className="filter-item__sliders">
          <input
            type="range"
            name="minPrice"
            min={priceRange.min}
            max={priceRange.max}
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
          <input
            type="range"
            name="maxPrice"
            min={priceRange.min}
            max={priceRange.max}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <div className="filter-item__price-display">
            Min ${minPrice} - ${maxPrice} Max
          </div>
        </div>
      </details>
    );
  }

  return (
    <details className="filter-item">
      <summary className="filter-item__name">{name}</summary>
      <div className="filter-item__options">
        {options.map((option) => (
          <label key={option}>
            <input type="checkbox" name={option} value={option} />
            {option}
          </label>
        ))}
      </div>
    </details>
  );
}
