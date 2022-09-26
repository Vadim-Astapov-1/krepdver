import { useCallback, useEffect, useState } from 'react';

export function Pricing({ type, price, count }) {
  const [countProduct, setCountProduct] = useState(1);
  const [priceProduct, setPriceProduct] = useState(0);

  function handleCountClick(evt) {
    if (evt.target.name === `${type}-btn-up`) {
      if (countProduct === 99) {
        return;
      }

      setCountProduct(countProduct + 1);
      setPriceProduct(priceProduct + price);
      return;
    }

    if (countProduct === 1) {
      return;
    }

    setCountProduct(countProduct - 1);
    setPriceProduct(priceProduct - price);
  }

  const resetCounter = useCallback(() => {
    setPriceProduct(price);
    setCountProduct(1);
  }, [setCountProduct, setPriceProduct, price]);

  useEffect(() => {
    if (count !== null) {
      setCountProduct(count);
      setPriceProduct(count * price);
      return;
    }

    setPriceProduct(price);
  }, [price, count]);

  return { countProduct, priceProduct, handleCountClick, resetCounter };
}
