import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Card.module.scss';
import { getRouteById } from '../../../redux/reducers/routesRedux';

function Card() {
  const routes = useSelector((state) => state.routes); // Pobierz wszystkie trasy
  const [routeIndex, setRouteIndex] = useState(0); // Użyj useState do przechowywania indeksu
  const route = routes[routeIndex]; // Wybierz trasę na podstawie indeksu

  const handleIncrement = () => {
    if (routeIndex < routes.length - 1) {
      setRouteIndex(routeIndex + 1);
    }
  };

  const handleDecrement = () => {
    if (routeIndex > 0) {
      setRouteIndex(routeIndex - 1);
    }
  };

  console.log('routeIndex:', routeIndex);
  console.log('route:', route);

  if (!route) {
    return (
      <div className={styles['card-container']}>
        <div>Nie znaleziono trasy o podanym ID</div>
        <button onClick={handleDecrement} disabled={routeIndex === 0}>
          -
        </button>
        <button onClick={handleIncrement} disabled={routeIndex === routes.length - 1}>
          +
        </button>
      </div>
    );
  }

  return (
    <div className={styles['card-container']}>
      <div className={styles['card-wrapper']}>
        <h2>{route.route_name}</h2>
        <p>{route.description}</p>
        <a href='https://pl.wikipedia.org/wiki/Owca_domowa'>Link</a>
        <button onClick={handleDecrement} disabled={routeIndex === 0}>
          -
        </button>
        <button onClick={handleIncrement} disabled={routeIndex === routes.length - 1}>
          +
        </button>
      </div>
    </div>
  );
}

export default Card;
