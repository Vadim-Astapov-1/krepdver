import { useCallback, useEffect, useState } from 'react';

export function Pricing({ type, price }) {
  const [count, setCount] = useState(1);
  const [priceProduct, setPriceProduct] = useState(0);

  function handleCountClick(evt) {
    if(evt.target.name === `${type}-btn-up`) {
      if(count === 99) {
        return;
      }

      setCount(count + 1);
      setPriceProduct(priceProduct + price);
      return;
    }

    if(count === 1) {
      return;
    }

    setCount(count - 1);
    setPriceProduct(priceProduct - price);
  }

  const resetCounter = useCallback(() => {
    setPriceProduct(price);
    setCount(1);
  }, [setCount, setPriceProduct, price])

  useEffect(() => {
    setPriceProduct(price);
  }, [price]);

  return {count, priceProduct, handleCountClick, resetCounter};
}
