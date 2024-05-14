import Image from 'next/image';
import * as React from 'react';

interface IImageProps {
    imgsrc?: string,
    altText?: string,
    width?: number,
    height?: number
}

const ImageComponent: React.FunctionComponent<IImageProps> = ({
    imgsrc='',
    altText='',
    width=100,
    height=100
}) => {
  return (
    <Image src={imgsrc} alt={altText} width={width} />
  );
};

export default ImageComponent;
