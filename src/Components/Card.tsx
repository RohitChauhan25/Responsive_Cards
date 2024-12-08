type ProductCardProps = {
  name: string;
  description: string;
  image: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <div className="max-w-xs w-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img className="w-full h-40 object-contain" src={image} alt={name} />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-auto">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
