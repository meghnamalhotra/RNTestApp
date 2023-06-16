
import React from 'react';
import WrappedComponent from '../../components/WrapperComponent';
import ImageGeneration from '../../components/ImageGene';

const ImageGenerator = () => {
  return (
    <ImageGeneration />
  );
};

export default WrappedComponent(ImageGenerator);
