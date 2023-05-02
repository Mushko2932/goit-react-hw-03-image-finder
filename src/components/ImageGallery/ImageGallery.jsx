import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ items, toggleModal }) => {
  return (
    <ul className="gallery">
      <ImageGalleryItem items={items} toggleModal={toggleModal} />
    </ul>
  );
};


ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleModal: PropTypes.func.isRequired,
};