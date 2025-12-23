import Image from "next/image";
import logoIMG from "./favicon.ico";
import { Button } from "@/components/ui/button";
import Container2 from "./container";
import HomeBanner from "@/components/ui/homeBanner";
export default function Home() {
  return (
    <Container2 className="text-xl text-justify min-h-screen ">
      <HomeBanner />
      
    </Container2>
  );
}
 