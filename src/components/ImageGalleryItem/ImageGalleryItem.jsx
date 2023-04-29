import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <li key={item.id} class="gallery-item">
          <img src={item.webformatURL} alt={item.tag} />
        </li>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
