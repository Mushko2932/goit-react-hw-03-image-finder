import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ items, toggleModal }) => {  
  const{ largeImageURL, webformatURL, tags } = items;
  return (
    <GalleryItem
      onClick={() => {
        toggleModal(largeImageURL, tags);
      }}
    >
      <GalleryImage src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleModal: PropTypes.func.isRequired,
};
