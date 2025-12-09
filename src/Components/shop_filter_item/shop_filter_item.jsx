export default function ShopFilterItem() {
  return (
    <>
      <details>
        <summary>Brand</summary>
        <div className="filter-options">
          <label>
            <input type="checkbox" name="brand" value="Sony" />
            Sony
          </label>
        </div>
      </details>
    </>
  );
}
