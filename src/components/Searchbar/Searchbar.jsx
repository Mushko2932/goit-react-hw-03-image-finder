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
  const handleSabmit = async (values, actions) => {
    console.log('values :>> ', values);
    await onSubmit(values);
    actions.setSubmitting(false)
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={state}
      validationSchema={ContactShema}
      onSubmit={handleSabmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <button type="submit" disabled={isSubmitting}>
            <span>Search</span>
          </button>

          <Field
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      )}
    </Formik>
  );
};
