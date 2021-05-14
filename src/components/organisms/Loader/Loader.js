import React from 'react';

import { LoaderContainer, LoaderWrapper, RingSpinner } from './Loader.styles';

const Loader = () => {
  console.log('loader');
  return (
    <LoaderContainer>
      <LoaderWrapper>
        <RingSpinner />
      </LoaderWrapper>
    </LoaderContainer>
  );
};

export default Loader;
