import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Cart } from "@/components/Cart";
import { ArrowLeft } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Button variant="ghost" onClick={() => navigate(-1)} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <Cart />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
            <p className="text-muted-foreground">{product.description}</p>
            <Button size="lg" onClick={() => addItem(product)} className="w-full md:w-auto">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;