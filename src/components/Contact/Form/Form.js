import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import "./Form.css";

export default function Form() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  function resetForm() {
    formik.handleReset();
  }

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Requis";
    }
    if (!values.email) {
      errors.email = "Requis";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Adresse email invalide";
    }
    if (!values.subject) {
      errors.subject = "Requis";
    }
    if (!values.message) {
      errors.message = "Requis";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      emailjs
        .send(
          "gmail",
          "template_portfolio",
          {
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
          },
          "user_btbpi0L2zR6vCzcWNhkEZ"
        )
        .then(() => {
          resetForm();
          setIsSubmitting(true);
        })
        .catch(() => {
          setError(true)
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="name"
        className="form-input"
        type="text"
        placeholder="Loïc Antoniak"
        size="40"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
      <input
        name="email"
        className="form-input"
        type="email"
        placeholder="loic.antoniak@gmail.com"
        size="40"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
      <input
        name="subject"
        className="form-input"
        type="text"
        placeholder="Entretien d'embauche"
        size="40"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.subject}
      />
      {formik.touched.subject && formik.errors.subject ? <div className="error">{formik.errors.subject}</div> : null}
      <textarea
        name="message"
        cols="40"
        rows="10"
        className="form-input"
        placeholder="Nous aimerions vous rencontrer afin de..."
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
      ></textarea>
      {formik.touched.message && formik.errors.message ? <div className="error">{formik.errors.message}</div> : null}
      <button type="submit" className="btn">
        ENVOYER
      </button>
      {isSubmitting ? <div className="alert_success"><p>Message envoyé</p></div> : null}
      {error ? <div className="alert_error"><p>Une erreur s'est produite</p></div> : null}
    </form>
  );
}
