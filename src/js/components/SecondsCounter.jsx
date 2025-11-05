import React  from "react";

const SecondsCounter = ({seconds}) => {
  
  

    /*useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((preSeconds) => preSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);*/

  const segundos = seconds % 60;
  const minutos = Math.floor(seconds / 60) % 60;
  const horas = Math.floor(seconds / 3600);

  return (
    <div id="totalcontador">
      <div id="contador" className=" bg-dark text-white text-center mt-5">
        <h1>⏱️</h1>
        <div className="numbers text-center">
          {String(horas).padStart(2, "0")}:
          {String(minutos).padStart(2, "0")}:
          {String(segundos).padStart(2, "0")}
        </div>
        </div>

      
    </div>
  );
};

export default SecondsCounter;


