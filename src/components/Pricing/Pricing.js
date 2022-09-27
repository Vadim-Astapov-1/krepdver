import { useCallback, useEffect, useState } from 'react';

export function Pricing({ type, price, count, extraChangeCounter }) {
  const [countProduct, setCountProduct] = useState(1);
  const [priceProduct, setPriceProduct] = useState(0);

  // extraChangeCounter только для CartCard.

  function handleCountClick(evt) {
    if (evt.target.name === `${type}-btn-up`) {
      if (countProduct === 99) {
        return;
      }

      setCountProduct(countProduct + 1);
      setPriceProduct(priceProduct + price);
      if (extraChangeCounter) {
        extraChangeCounter(countProduct + 1);
      }
      return;
    }

    if (countProduct === 1) {
      return;
    }

    setCountProduct(countProduct - 1);
    setPriceProduct(priceProduct - price);
    if (extraChangeCounter) {
      extraChangeCounter(countProduct - 1);
    }
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
