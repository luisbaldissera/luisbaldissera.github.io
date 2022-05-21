import NextImage, { ImageLoader, ImageProps } from "next/image";
import React from "react";

const loader: ImageLoader = ({ src }) => src;

const Image: React.FC<ImageProps> = (props) => (
  <NextImage {...props} loader={loader} />
);

export default Image;
