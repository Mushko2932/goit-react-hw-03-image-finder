import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ items, toggleModal }) => {
  if (items.length > 0) {
    return (
      <ul className="gallery">
        <ImageGalleryItem items={items} toggleModal={toggleModal} />
      </ul>
    );
  }
};


ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleModal: PropTypes.func.isRequired,
};