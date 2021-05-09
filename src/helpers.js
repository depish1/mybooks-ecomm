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

export const checkIfEmpty = (value) => {
  return !Boolean(value);
};

export const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(re.test(email));
  return re.test(email);
};
