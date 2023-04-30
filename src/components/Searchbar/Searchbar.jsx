import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ContactShema = Yup.object().shape({
  search: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const state = {
  search: '',
};

export const SearchBar = ({ onSubmit }) => {
  const handleSabmit = (values, actions) => {
    console.log('values :>> ', values);
    onSubmit(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={state}
      validationSchema={ContactShema}
      onSubmit={handleSabmit}
    >
      <Form className="form">
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <Field
          className="input"
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Formik>
  );
};
