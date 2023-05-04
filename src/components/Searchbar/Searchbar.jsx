import * as Yup from 'yup';
import { Formik, Form, Field, FormBtn, FormLabel } from './SearchBar.styled';

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
    actions.setSubmitting(false);
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
          <FormBtn type="submit" disabled={isSubmitting}>
            <FormLabel>Search</FormLabel>
          </FormBtn>

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
