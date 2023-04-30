import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ items }) => ( 
    <>
      {items.map(item => (
        <li key={item.id} className="gallery-item">
          <img src={item.webformatURL} alt={item.tag} />
        </li>
      ))}
    </>
);

ImageGalleryItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
