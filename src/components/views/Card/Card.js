import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRoutesData } from '../../../redux/reducers/routesRedux';
import { incrementCounter, decrementCounter } from '../../../redux/actions/counterActions';
import styles from './Card.module.scss';

function Card() {
  const routes = useSelector(getRoutesData);
  const dispatch = useDispatch();

  const [selectedRoute, setSelectedRoute] = useState(0);

  const handleIncrement = useCallback(() => {
    if (selectedRoute < routes.length - 1) {
      setSelectedRoute(selectedRoute + 1);
      dispatch(incrementCounter());
    }
  }, [selectedRoute, routes, dispatch]);

  const handleDecrement = useCallback(() => {
    if (selectedRoute > 0) {
      setSelectedRoute(selectedRoute - 1);
      dispatch(decrementCounter());
    }
  }, [selectedRoute, dispatch]);

  return (
    <div className={styles['card-container']}>
      <div className={styles['card-wrapper']}>
        <h2>Route ID: {selectedRoute}</h2>
        <button onClick={handleIncrement}>Następna trasa</button>
        <button onClick={handleDecrement}>Poprzednia trasa</button>
      </div>
    </div>
  );
}

export default Card;
