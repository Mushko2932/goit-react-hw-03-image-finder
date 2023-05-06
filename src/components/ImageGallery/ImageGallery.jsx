import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageList } from './ImageGallery.styled';

export const ImageGallery = ({ items, toggleModal }) => (
  <ImageList>
    {items.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        items={items}
        toggleModal={toggleModal}
        key={id}
        previewURL={webformatURL}
        imageURL={largeImageURL}
        alt={tags}
      ></ImageGalleryItem>
    ))}
  </ImageList>
);


ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleModal: PropTypes.func.isRequired,
};
