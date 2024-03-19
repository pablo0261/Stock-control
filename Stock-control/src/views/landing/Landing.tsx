import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const LandingView: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true); 
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
      navigate('/LogIn');
    }, 4000);

    return () => clearTimeout(timer); 
  }, [navigate]);

  
  return (
    <>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <div> landingView</div>
      )}
    </>
  );
}

export default LandingView;
