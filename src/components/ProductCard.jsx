function ProductCard({ name, price, category }) {
  return (
    <div style={{ border: '1px solid #eee', padding: 12, borderRadius: 8, marginBottom: 10 }}>
      <h3>{name}</h3>
      <p>Catégorie : {category}</p>
      <p>Prix : {price} €</p>
    </div>
  );
}
export default ProductCard;
