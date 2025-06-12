import * as LucideIcons from 'lucide-react';
import z from 'zod';

const createUrl = (url: string) => {
  const normalizedUrl = '/' + url.split(' ').join('-').toLowerCase();

  return normalizedUrl;
};

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
  company: z.string().optional(),
  inquiryType: z.string().min(1, 'Please select an inquiry type'),
  projectType: z.string().optional(),
  careerPosition: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z
    .string()
    .min(1, 'Please provide some details about your inquiry')
    .min(10, 'Please provide at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

const getIconComponent = (
  iconName: string
): React.ForwardRefExoticComponent<Omit<LucideIcons.LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>> => {
  if (!iconName || typeof iconName !== 'string') {
    return LucideIcons.Code;
  }

  const LucideIcon = (LucideIcons as keyof object)[iconName];

  return LucideIcon || LucideIcons.Code;
};

export { createUrl, contactFormSchema, getIconComponent };
