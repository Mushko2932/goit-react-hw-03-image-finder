import PropTypes from 'prop-types';
import { GalleryItem, GallerImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ items, toggleModal }) => {
  console.log(items.id);  
  if (items) {
    return (
      <div>
        {items.map(({ id, webformatURL, largeImageURL, tags }) => (
          <GalleryItem
            key={id}
            onClick={() => {
              toggleModal(largeImageURL, tags);
            }}
            className="gallery-item"
          >
            <GallerImage src={webformatURL} alt={tags} />
          </GalleryItem>
        ))}
      </div>
    );
  }
};

ImageGalleryItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
