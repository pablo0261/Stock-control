import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Transition } from "react-transition-group";
import animationStock from "../../../utils/AnimationStock.gif";
import style from "./Landing.module.sass";

const transitionDuration: number = 900;

const transitionStyles: { [key: string]: React.CSSProperties } = {
  entering: { opacity: 0 },
  entered: { opacity: 1, transition: `opacity ${transitionDuration}ms ease-in-out` },
};

const LandingView: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      navigate("/LogIn");
    }
  }, [isLoading, navigate]);

  return (
    <div className={style.background}>
      <Transition in={!isLoading} timeout={transitionDuration}>
        {(state: string) => (
          <div
            style={{
              ...transitionStyles[state],
            }}
          >
            <div className={style.marginContainer}>
              {isLoading ? (
                <img
                  className={style.loading}
                  src={animationStock}
                  alt="Loading..."
                />
              ) : (
                <div>landingView</div>
              )}
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default LandingView;
