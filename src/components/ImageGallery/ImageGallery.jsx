

export const ImageGallery = ({items}) => {
    return (<ul className="gallery">
        {items.map(item => <li>{item}</li>)}
    </ul>);
}