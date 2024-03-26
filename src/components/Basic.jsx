
import { Formik } from 'formik';

const Basic = () => (
  <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h5>Please enter your email, your name and a message.</h5>
    <Formik
    // I removed password and created name and message fields
      initialValues={{ email: '', name: '', message: ''}}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder='email...'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="text"
            name="name"
            placeholder='name...'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name && errors.name}
          <textarea
          className="form-control message-box"
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
          {errors.message && touched.message && errors.message}
          {/* <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur} // when mouse leaves
            value={values.password}
          />
          {errors.password && touched.password && errors.password} */}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;