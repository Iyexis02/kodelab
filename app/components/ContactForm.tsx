'use client';

import { Button } from './ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Input } from './ui/Input';
import { Label } from './ui/Label';
import { Select } from './ui/Select';
import { useState } from 'react';
import { z } from 'zod';

import { phoneCodes } from '@/constants';
import { BudgetRange, CareerPosition, InquiryType, ProjectType, Timeline } from '@/enums';
import { contactFormSchema } from '@/utils';

type ContactFormData = z.infer<typeof contactFormSchema>;

type ContactFormProps = {
  onSubmit?: (data: ContactFormData) => void;
  isModal?: boolean;
};

export function ContactForm({ onSubmit, isModal = false }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: '+385',
    phoneNumber: '',
    company: '',
    inquiryType: '',
    projectType: '',
    careerPosition: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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

      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneCode: '+385',
          phoneNumber: '',
          company: '',
          inquiryType: '',
          projectType: '',
          careerPosition: '',
          budget: '',
          timeline: '',
          message: '',
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

  const isProjectInquiry = formData.inquiryType === InquiryType.ProjectDevelopment;
  const isCareerInquiry = formData.inquiryType === InquiryType.CareerOpportunities;

  if (isSubmitted) {
    return (
      <Card className={`${isModal ? 'shadow-none border-0' : 'max-w-2xl mx-auto shadow-xl border-0'}`}>
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank you for reaching out!</h3>
          <p className="text-gray-600 text-lg">
            {formData.inquiryType === 'Career Opportunities'
              ? "We've received your application and will review it carefully. We'll get back to you within 3-5 business days."
              : "We've received your inquiry and will get back to you within 24 hours with next steps."}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`${isModal ? 'shadow-none border-0' : 'max-w-2xl mx-auto shadow-xl border-0'}`}>
      <CardHeader className={`text-center ${isModal ? 'pb-4' : 'pb-6'}`}>
        <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Get In Touch</CardTitle>
        <p className="text-gray-600 text-lg">
          {"Whether you have a project in mind or are looking to join our team, we'd love to hear from you."}
        </p>
      </CardHeader>
      <CardContent className={`${isModal ? 'p-0 pt-4' : 'p-8 pt-0'}`}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div>
              <Label required>Phone Number</Label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-1">
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
                <div className="sm:col-span-2">
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
            <div>
              <Label htmlFor="company">Company/Organization (Optional)</Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Enter your company name"
                error={errors.company}
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Inquiry Details</h3>
            <div>
              <Label htmlFor="inquiryType" required>
                What can we help you with?
              </Label>
              <Select
                id="inquiryType"
                value={formData.inquiryType}
                onChange={(e) => handleInputChange('inquiryType', e.target.value)}
                error={errors.inquiryType}>
                <option value="">Select inquiry type</option>
                {Object.values(InquiryType).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
            </div>
            {isProjectInquiry && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => handleInputChange('projectType', e.target.value)}
                      error={errors.projectType}>
                      <option value="">Select project type</option>
                      {Object.values(ProjectType).map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      error={errors.budget}>
                      <option value="">Select budget range</option>
                      {Object.values(BudgetRange).map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <Select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    error={errors.timeline}>
                    <option value="">Select timeline</option>
                    {Object.values(Timeline).map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </Select>
                </div>
              </>
            )}
            {isCareerInquiry && (
              <div>
                <Label htmlFor="careerPosition">Position of Interest</Label>
                <Select
                  id="careerPosition"
                  value={formData.careerPosition}
                  onChange={(e) => handleInputChange('careerPosition', e.target.value)}
                  error={errors.careerPosition}>
                  <option value="">Select position</option>
                  {Object.values(CareerPosition).map((position) => (
                    <option key={position} value={position}>
                      {position}
                    </option>
                  ))}
                </Select>
              </div>
            )}
            <>
              <Label htmlFor="message" required>
                {isCareerInquiry
                  ? "Tell us about yourself and why you'd like to join our team"
                  : isProjectInquiry
                    ? 'Describe your project requirements'
                    : 'Message'}
              </Label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder={
                  isCareerInquiry
                    ? 'Share your experience, skills, and what excites you about working with us...'
                    : isProjectInquiry
                      ? 'Describe your project goals, requirements, and any specific features you need...'
                      : 'Tell us more about your inquiry...'
                }
                rows={5}
                className={`w-full px-4 py-3 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-vertical ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </>
          </div>
          <div className="pt-4">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-600 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]">
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
              ) : isCareerInquiry ? (
                'Submit Application'
              ) : (
                'Send Inquiry'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
