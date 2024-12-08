import "./App.css";
import ProductCard from "./Components/Card";

type Product = {
  name: string;
  description: string;
  image: string;
};
function App() {
  const products: Product[] = [
    {
      name: "Apple AirPods Pro",
      description: "High-quality wireless earbuds with noise cancellation.",
      image:
        "https://www.myimaginestore.com/media/catalog/product/cache/0469a4dc62dd6e534a19177e6b269c6b/a/i/airpods_4_pdp_image_position_1__en-in.jpg",
    },
    {
      name: "Samsung Galaxy Watch 6",
      description: "A smartwatch with advanced health tracking.",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/2307/gallery/in-galaxy-watch6-r945-469954-sm-r945fzkains-537406789?$2052_1641_PNG$",
    },
    {
      name: "Sony WH-1000XM5",
      description: "Premium headphones with noise cancellation.",
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1682587116/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/271047_0_yaama6.png?tr=w-640",
    },
    {
      name: "Logitech MX Master 3S",
      description: "A precision ergonomic mouse for productivity.",
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1681404219/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/258454_0_rmm57f.png?tr=w-640",
    },
    {
      name: "Kindle Paperwhite",
      description: "A lightweight e-reader with a glare-free display.",
      image: "https://m.media-amazon.com/images/I/61d5WVS49ML._SL1000_.jpg",
    },
    {
      name: "GoPro HERO11 Black",
      description: "A rugged action camera with 5.3K video.",
      image: "https://m.media-amazon.com/images/I/51t6c5t0nDL._SL1500_.jpg",
    },
    {
      name: "Nintendo Switch OLED",
      description: "A hybrid gaming console with a vibrant OLED display.",
      image: "https://m.media-amazon.com/images/I/51c-nxAH5zL._SL1000_.jpg",
    },
    {
      name: "Razer BlackWidow V4 Keyboard",
      description: "A gaming keyboard with RGB lighting and tactile switches.",
      image: "https://m.media-amazon.com/images/I/71qoXjgRb-L._SL1500_.jpg",
    },

    {
      name: "Echo Dot (5th Gen)",
      description: "A compact smart speaker with Alexa.",
      image: "https://m.media-amazon.com/images/I/81VttNsrDwL._SL1500_.jpg",
    },
    {
      name: "Anker PowerCore 20K",
      description: "A powerful portable charger with 20,000mAh capacity.",
      image:
        "https://images-cdn.ubuy.co.in/63f9bfa9152f0174ac31463d-anker-powercore-essential-20-000-power.jpg",
    },
    {
      name: "Fitbit Charge 5",
      description: "An advanced fitness tracker with heart rate monitoring.",
      image: "https://m.media-amazon.com/images/I/61Llpu4OGYL._SL1500_.jpg",
    },
  ];
  return (
    <div className="w-full">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 w-full m-auto">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product?.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
