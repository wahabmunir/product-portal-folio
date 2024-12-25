import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createWorker } from "tesseract.js";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

const AddProduct = () => {
  const [image, setImage] = useState<string | null>(null);
  const [suggestedName, setSuggestedName] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState<Date>();
  const [processing, setProcessing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const captureImage = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement("video");
      const canvas = document.createElement("canvas");
      
      video.srcObject = stream;
      await video.play();
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d")?.drawImage(video, 0, 0);
      
      const imageData = canvas.toDataURL("image/jpeg");
      setImage(imageData);
      
      // Stop the camera stream
      stream.getTracks().forEach(track => track.stop());
      
      // Process the image with OCR
      await processImage(imageData);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to access camera. Please make sure camera permissions are granted.",
        variant: "destructive",
      });
    }
  };

  const processImage = async (imageData: string) => {
    setProcessing(true);
    try {
      const worker = await createWorker();
      await worker.loadLanguage("eng");
      await worker.initialize("eng");
      const { data: { text } } = await worker.recognize(imageData);
      await worker.terminate();

      // Extract a potential product name (first line or first few words)
      const potentialName = text.split("\n")[0].trim();
      setSuggestedName(potentialName);
      setName(potentialName);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process image text. Please enter product name manually.",
        variant: "destructive",
      });
    } finally {
      setProcessing(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the product to your backend
    toast({
      title: "Success",
      description: "Product added successfully!",
    });
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="flex flex-col items-center gap-4">
            {image ? (
              <img 
                src={image} 
                alt="Captured product" 
                className="w-full max-w-md rounded-lg shadow-md"
              />
            ) : (
              <div className="w-full max-w-md aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">No image captured</p>
              </div>
            )}
            <Button 
              type="button" 
              onClick={captureImage}
              disabled={processing}
            >
              {processing ? "Processing..." : "Capture Image"}
            </Button>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
              required
            />
            {suggestedName && (
              <p className="text-sm text-muted-foreground">
                Suggested name from image: {suggestedName}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Expiry Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="flex gap-4">
          <Button 
            type="submit" 
            className="w-full"
            disabled={processing || !name || !price}
          >
            Add Product
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            className="w-full"
            onClick={() => navigate("/")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;