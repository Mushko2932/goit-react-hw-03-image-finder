import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({items}) => {
    return (
      <ul className="gallery">
        <ImageGalleryItem items={items} />
      </ul>
    );
}

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};