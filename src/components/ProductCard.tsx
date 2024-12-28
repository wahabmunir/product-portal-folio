import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Box } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const navigate = useNavigate();

  return (
    <div className="product-card rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col h-full">
      <div className="relative pt-[100%]">
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg cursor-pointer"
          onClick={() => navigate(`/product/${product.id}`)}
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-muted-foreground mb-4">${product.price.toFixed(2)}</p>
        <div className="mt-auto flex justify-between items-center gap-2">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            View Details
          </Button>
          <Button 
            className="flex-1"
            onClick={() => addItem(product)}
          >
            Add to Cart
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate('/product-preview-3d')}
            className="flex items-center gap-2"
          >
            <Box className="h-4 w-4" />
            3D View
          </Button>
        </div>
      </div>
    </div>
  );
}