import Image from "next/image";
import logoIMG from "./favicon.ico";
import { Button } from "@/components/ui/button";
import Container2 from "./container";
export default function Home() {
  return (
    <Container2 className="text-xl text-justify  bg-shop-background min-h-screen w-11/12 mx-auto">
      <h1>This is home page</h1>
      <Image src={logoIMG} alt="Flipside IT logo" className="" />
      <h3 className="px-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum placeat sequi, maiores odio quo laudantium inventore cumque dolor consequatur repellendus, voluptatum labore veritatis esse laboriosam distinctio! Blanditiis explicabo ipsum quos sint dolorem corporis, distinctio, perspiciatis enim deleniti provident temporibus earum? Porro recusandae, quas quasi aspernatur error quisquam vero, quam illo pariatur cupiditate labore, deserunt quidem debitis fugit. Quae molestiae fuga quisquam eos obcaecati reiciendis assumenda facere. Cumque, accusamus ea? Iure sequi eveniet reiciendis consequatur sint officiis? Velit ullam, necessitatibus nesciunt facilis inventore praesentium. Eius aut corporis, nam ad, ratione autem qui nulla aliquam quisquam voluptatem at dolores soluta aliquid pariatur?</h3>
      <Button size="lg" >Click me</Button>
    </Container2>
  );
}
 