import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too short!")
    .max(50, "Too long!"),
  number: Yup.string()
    .required("Required")
    .min(3, "Too short!")
    .max(50, "Too long!"),
});

const ContactForm = ({ onSubmit }) => {
  const nameInputId = useId();
  const numberInputId = useId();

  const handleSubmit = (values, actions) => {
    onSubmit({ name: values.name, number: values.number });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <div className={style.fieldContainer}>
          <label htmlFor={nameInputId} className={style.label}>
            Name
          </label>
          <Field
            name="name"
            type="text"
            id={nameInputId}
            className={style.input}
          />
          <ErrorMessage name="name" component="span" className={style.error} />
        </div>
        <div className={style.fieldContainer}>
          <label htmlFor={numberInputId} className={style.label}>
            Number
          </label>
          <Field
            name="number"
            type="text"
            id={numberInputId}
            className={style.input}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={style.error}
          />
        </div>
        <button type="submit" className={style.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
