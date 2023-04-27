// import { Formik } from 'formik';
// import * as Yup from 'yup';

// const ContactShema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   number: Yup.string()
//     .min(2, 'Too Short!')
//     .max(13, 'Too Long!')
//     .required('Required'),
// });

// const state = {
//   name: '',
//   number: '',
// };

export const SearchBar = ({onSubmit}) => {
  return (
    <header className="searchbar">
      <form className="form">
        <button type="submit" className="button">
          <span class="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
