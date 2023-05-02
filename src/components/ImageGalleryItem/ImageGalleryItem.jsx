import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ items, toggleModal }) => {
  return (
    <div>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li
          key={id}
          onClick={() => {
            toggleModal(largeImageURL, tags);
          }}
          className="gallery-item"
        >
          <img src={webformatURL} alt={tags} />
        </li>
      ))}
    </div>
  );
};

ImageGalleryItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
