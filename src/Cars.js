const Car = (props) => {
  console.log(props.cars);
  return props.cars.map((car) => {
    return (
      <div key={car.id}>
        <ul>
          <li>{car.name}</li>
          <li>{car.year}</li>
          <li>{car.origin}</li>
        </ul>
      </div>
    );
  });
};

export default Car;
