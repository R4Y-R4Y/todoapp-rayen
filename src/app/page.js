import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/button";

export default function Home() {
  console.log("Hello, world!");
  return (
    <div>
      <div>
        Welcome to Todo App!
      </div>
      <Button >
        <h2>Click me!</h2>
      </Button>
      <Button title={"this is another button :("}/>
    </div>
  );
}




