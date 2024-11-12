import About from "@/components/about";
import { Contact } from "@/components/contact";
import MyProjects from "@/components/show-project";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <About/>
    <MyProjects/>
    <Contact/>  
    </>
   );
}
