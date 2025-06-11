import Button from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Navbar from "@/components/Navbar";
const Homepage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
     <Button variant="destructive" size="lg" className="rounded-full">
      <CirclePlus />
      Click Me
      </Button> 
      <Navbar />
    </div>
  );
}

export default Homepage;