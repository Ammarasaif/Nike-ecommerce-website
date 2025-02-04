
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Gear from "./components/Gear";
import Miss from "./components/Miss";
import Essential from "./components/Essential";
import Icon from "./components/Icon";



export default async function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <Feature />
      <Gear />
      <Miss />
      <Essential />
      <Icon />
      <Footer />
    </div>
  );
}
