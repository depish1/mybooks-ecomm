import React from 'react';

import { Wrapper, RingSpinner } from './Loader.styles';

const Loader = () => (
  <Wrapper>
    <RingSpinner />
    <span>Ładowanie...</span>
  </Wrapper>
);

export default Loader;
