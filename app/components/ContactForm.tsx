'use client';

import { Button } from './ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Input } from './ui/Input';
import { Label } from './ui/Label';
import { Select } from './ui/Select';
import { useState } from 'react';
import { z } from 'zod';

// Phone codes data
const phoneCodes = [
  { code: '+1', country: 'US/CA' },
  { code: '+44', country: 'UK' },
  { code: '+49', country: 'DE' },
  { code: '+33', country: 'FR' },
  { code: '+39', country: 'IT' },
  { code: '+34', country: 'ES' },
  { code: '+31', country: 'NL' },
  { code: '+41', country: 'CH' },
  { code: '+43', country: 'AT' },
  { code: '+385', country: 'HR' },
  { code: '+381', country: 'RS' },
  { code: '+386', country: 'SI' },
  { code: '+387', country: 'BA' },
  { code: '+382', country: 'ME' },
];

// Services data
const services = [
  'Web Development',
  'Mobile App Development',
  'Backend Development',
  'Full-Stack Development',
  'DevOps & Cloud Services',
  'UI/UX Design',
  'Consulting',
  'Other',
];

// Zod validation schema
const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  phoneCode: z.string().min(1, 'Phone code is required'),
  phoneNumber: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[0-9\s\-()]+$/, 'Please enter a valid phone number')
    .min(6, 'Phone number must be at least 6 digits')
    .max(15, 'Phone number must be less than 15 digits'),
  service: z.string().min(1, 'Please select a service'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: '+385',
    phoneNumber: '',
    service: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Call onSubmit if provided
      if (onSubmit) {
        onSubmit(validatedData);
      } else {
        console.log('Form submitted:', validatedData);
      }

      setIsSubmitted(true);

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneCode: '+385',
          phoneNumber: '',
          service: '',
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto shadow-xl border-0">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank you!</h3>
          <p className="text-gray-600 text-lg">
            {"We've received your message and will get back to you within 24 hours."}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-xl border-0">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-3xl font-bold text-gray-900 mb-2">{"Let's Work Together"}</CardTitle>
        <p className="text-gray-600 text-lg">
          Tell us about your project and how we can help bring your vision to life.
        </p>
      </CardHeader>

      <CardContent className="p-8 pt-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName" required>
                First Name
              </Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder="Enter your first name"
                error={errors.firstName}
              />
            </div>

            <div>
              <Label htmlFor="lastName" required>
                Last Name
              </Label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                placeholder="Enter your last name"
                error={errors.lastName}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" required>
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email address"
              error={errors.email}
            />
          </div>

          {/* Phone */}
          <div>
            <Label required>Phone Number</Label>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <Select
                  value={formData.phoneCode}
                  onChange={(e) => handleInputChange('phoneCode', e.target.value)}
                  error={errors.phoneCode}>
                  {phoneCodes.map((phone) => (
                    <option key={phone.code} value={phone.code}>
                      {phone.code} ({phone.country})
                    </option>
                  ))}
                </Select>
              </div>

              <div className="col-span-2">
                <Input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  placeholder="Enter your phone number"
                  error={errors.phoneNumber}
                />
              </div>
            </div>
          </div>

          {/* Service */}
          <div>
            <Label htmlFor="service" required>
              Service Needed
            </Label>
            <Select
              id="service"
              value={formData.service}
              onChange={(e) => handleInputChange('service', e.target.value)}
              error={errors.service}>
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </Select>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                'Send Message'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
