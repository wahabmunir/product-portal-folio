import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const navigate = useNavigate();

  return (
    <div className="product-card rounded-lg border bg-card text-card-foreground shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover rounded-t-lg"
        onClick={() => navigate(`/product/${product.id}`)}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
        <div className="mt-4 flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            View Details
          </Button>
          <Button onClick={() => addItem(product)}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}