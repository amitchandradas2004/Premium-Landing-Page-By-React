import Banner from "./Components/Banner/Banner";
import Feature from "./Components/Feature/Feature";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing/Pricing";
import Service from "./Components/Service/Service";
import Testimonials from "./Components/Testimonials/Testimonials";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Service></Service>
      <Feature></Feature>
      <Pricing></Pricing>
      <Testimonials></Testimonials>
    </>
  );
}

export default App;
