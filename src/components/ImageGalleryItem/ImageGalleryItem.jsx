// import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ items }) => {
  console.log({items});
  return (
    <>
      {items.map(({id, webformatURL, tags}) => (
        <li key={id} className="gallery-item">
          <img src={webformatURL} alt={tags} />
        </li>
      ))}
    </>
  )
};

// ImageGalleryItem.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
