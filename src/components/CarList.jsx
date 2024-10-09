import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../features/cars/carsSlice";

function CarList() {
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  const onClick = (car) => {
    dispatch(removeCar(car));
  };

  const renderedCars = cars.map((car, i) => (
    <div key={i} className="panel">
      <p>
        {car.name} - ${car.value}
      </p>
      <button className="button-clear" onClick={() => onClick(car)}>
        Sil
      </button>
    </div>
  ));

  return (
    <div className="car-list">
      {renderedCars.length ? (
        renderedCars
      ) : (
        <div className="no-cars">Başlamak için araba ekleyin</div>
      )}
    </div>
  );
}

export default CarList;
