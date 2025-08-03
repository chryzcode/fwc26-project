"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  interests: string[];
};

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const interests = [
    'Strategy Session',
    'Monetization Blueprint',
    'Full-Service Launch',
    'Partnership Opportunities',
    'Other',
  ];

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setSubmitStatus(null);

    try {
      // Replace with your form submission logic
      console.log('Form submitted:', data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! We\'ll get back to you soon.',
      });
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.',
      });
    }
  };

  return (
    <div className="w-full">
      {submitStatus && (
        <div
          className={`p-4 mb-6 rounded-lg ${
            submitStatus.success
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-left font-medium text-slate-700 mb-1"
            >
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-4 py-3 rounded-lg border text-left ${
                errors.name ? 'border-red-500' : 'border-slate-300'
              }  focus:ring-primary focus:border-transparent transition-all`}
              placeholder="John Doe"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm text-left font-medium text-slate-700 mb-1"
            >
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-3 rounded-lg border text-left ${
                errors.email ? 'border-red-500' : 'border-slate-300'
              } focus:ring-primary focus:border-transparent transition-all`}
              placeholder="you@example.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm text-left font-medium text-slate-700 mb-1"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 text-left focus:ring-primary focus:border-transparent transition-all"
            placeholder="+1 (555) 000-0000"
            {...register('phone')}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm text-left font-medium text-slate-700 mb-1"
          >
            Your Message *
          </label>
          <textarea
            id="message"
            rows={4}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.message ? 'border-red-500' : 'border-slate-300'
            }  focus:ring-primary focus:border-transparent transition-all`}
            placeholder="Tell us about your business and how we can help..."
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 20,
                message: 'Message must be at least 20 characters',
              },
            })}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        <div className="flex items-center justify-center mt-6">
          <button
            type="submit"
            className="px-8 py-3.5 border-2 border-primary rounded-xl bg-gradient-to-r from-primary to-accent text-primary font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-lg focus:outline-none w-fit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
