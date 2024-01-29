import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaFilePdf } from 'react-icons/fa';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const [isSent,setIsSent]=useState(false);
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          message: '',
        },
        validationSchema: Yup.object({
          name: Yup.string().required('Name is required'),
          email: Yup.string().email('Invalid email address').required('Email is required'),
          message: Yup.string().required('Message is required'),
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
          try {
            setSubmitting(true);
            await emailjs.send(
                'service_v3euoo4',
              'template_hxtv0b3',
              values,
              'K69_p-qQF_AENJakL'
            );
      
            console.log('Sent successfully');
            setIsSent(true);
            resetForm();
          } catch (error) {
            console.error('Failed to send:', error);
          } finally {
            setSubmitting(false);
          }
        },
      });
      
  const downloadResume = () => {
    window.open('https://drive.google.com/uc?export=download&id=1jMTkTaTns1_xj9taOzBJM1V7XOiiGGiw', '_blank');
  };
  

  return (
    <div id="contact" className="mt-8">
      <div className="text-center mb-4">
        <p><span className="text-4xl font-bold inline border-b-4 border-pink-600 mb-8">Contact Me</span><button
        onClick={downloadResume} className="bg-emerald-300 hover:bg-emerald-400 text-white bg-emerald-800 ml-8 mt-4 font-bold py-2 px-4 rounded 
        inline-flex items-center">
            <FaFilePdf className="mr-1 text-2xl" />Download CV
            </button>
            </p>
      </div>
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto w-full h-full p-3 m-3 ">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg  font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={`mt-1 p-2 border rounded-md w-full focus:outline-none ${
                formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium ">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`mt-1 p-2 border rounded-md w-full focus:outline-none ${
                formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium ">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className={`mt-1 p-2 border rounded-md w-full focus:outline-none ${
                formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className={`bg-blue-500 text-white hover:bg-blue-800 text-lg p-2 rounded-md ${
              formik.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          </form>
        {formik.isSubmitting && (
          <div className="mt-4 p-2 bg-yellow-200 text-black border-yellow-500 border-l-4 rounded-md">
            Sending message, please wait...
          </div>
        )}
        {isSent && (
          <div className="mt-4 p-2 bg-green-200 text-black border-green-500 border-l-4 rounded-md">
            Message sent successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
