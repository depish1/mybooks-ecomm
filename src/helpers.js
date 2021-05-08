export const reduceBasket = (basket) => {
  const uniqueBasket = [...new Set(basket.map((prod) => prod.prod_id))].map((id) => {
    return {
      ...basket.find((prod) => prod.prod_id === id),
    };
  });

  return uniqueBasket.map((uniqueProd) => {
    return {
      ...uniqueProd,
      prod_quantity: basket.filter((prod) => prod.prod_id === uniqueProd.prod_id).length,
      prod_value: (parseFloat(uniqueProd.prod_price) * basket.filter((prod) => prod.prod_id === uniqueProd.prod_id).length).toFixed(2),
    };
  });
};

export const redirect = (e, path, history) => {
  e?.preventDefault();
  history.push(path);
};

export const asyncLocalStorage = {
  setItem: (key, value) => {
    return Promise.resolve().then(function () {
      localStorage.setItem(key, value);
    });
  },
  getItem: (key) => {
    return Promise.resolve().then(function () {
      return localStorage.getItem(key);
    });
  },
  removeItem: (key) => {
    return Promise.resolve().then(function () {
      return localStorage.removeItem(key);
    });
  },
};
