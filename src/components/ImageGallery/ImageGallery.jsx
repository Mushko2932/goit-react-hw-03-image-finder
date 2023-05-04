import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageList } from './ImageGallery.styled';

export const ImageGallery = ({ items, toggleModal }) => {
  if (items.length > 0) {
    return (
      <ImageList className="gallery">
        <ImageGalleryItem items={items} toggleModal={toggleModal} />
      </ImageList>
    );
  }
};


ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleModal: PropTypes.func.isRequired,
};