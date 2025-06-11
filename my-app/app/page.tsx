import Button from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
const Homepage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
     <Button variant="destructive" size="lg" className="rounded-full">
      <CirclePlus />
      Click Me
      </Button> 
    </div>
  );
}

export default Homepage;