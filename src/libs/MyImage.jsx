import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MyImage = ({ image }) => (
  <>
    {console.log(image.props)}
    {console.log(image.props.alt)}

    <div className="w-full lg:w-4/6  mx-auto">
      <LazyLoadImage
        alt={image.props.alt}
        effect="black-and-white"
        src={image.props.src} // use normal <img> attributes as props
      />
    </div>
  </>
);

export default MyImage;
