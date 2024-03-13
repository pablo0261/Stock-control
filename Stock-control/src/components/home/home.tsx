import { useState, useEffect } from 'react';
import Icecat from 'icecat';

const Home = () => {
  const [productDescription, setProductDescription] = useState<string>('');
  const [productImages, setProductImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const icecatClient = new Icecat(process.env.USERNAME, process.env.PASSWORD);
        const product = await icecatClient.openCatalog.getProduct('EN', '4948570114344');
        setProductDescription(product.getLongDescription());
        setProductImages(product.getImages());
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Product Description</h1>
      <p>{productDescription}</p>
      <h2>Product Images</h2>
      <div>
        {productImages.map((image, index) => (
          <img key={index} src={image} alt={`Product Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Home;
