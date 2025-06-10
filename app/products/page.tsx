import { ContactButton } from '../components/ContactButton';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import {
  Award,
  BarChart3,
  Building,
  Calendar,
  CheckCircle,
  Cloud,
  Code,
  ExternalLink,
  Globe,
  Heart,
  Shield,
  ShoppingCart,
  Smartphone,
  Star,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';

import { ContactButtonSize, ContactButtonVariant, ContactFormType } from '@/enums';

export default function ProductsPage() {
  const portfolioProjects = [
    {
      id: 1,
      name: 'MediCare Plus',
      client: 'Healthcare Clinic Network',
      category: 'Healthcare Platform',
      description:
        'A comprehensive patient management system with appointment scheduling, medical records, and telemedicine capabilities. Built to handle 10,000+ patients across multiple clinic locations.',
      image: '/placeholder.svg?height=400&width=600',
      completedDate: '2024',
      projectDuration: '8 months',
      teamSize: '4 developers',
      features: [
        'Patient Portal & Records',
        'Appointment Scheduling',
        'Telemedicine Integration',
        'Multi-clinic Management',
        'Insurance Processing',
        'GDPR Compliance',
        'Mobile App (iOS/Android)',
        'Real-time Notifications',
      ],
      technologies: ['React', 'Next.js', 'Spring Boot', 'PostgreSQL', 'Flutter', 'AWS'],
      results: [
        '50% reduction in appointment scheduling time',
        '30% increase in patient satisfaction',
        '99.9% system uptime achieved',
      ],
      gradient: 'from-blue-500 to-cyan-400',
      icon: Heart,
      liveUrl: '#',
      caseStudyUrl: '#',
    },
    {
      id: 2,
      name: 'EcoShop Croatia',
      client: 'Sustainable Products Retailer',
      category: 'E-commerce Platform',
      description:
        'A modern e-commerce platform focused on sustainable products with advanced inventory management, customer loyalty programs, and carbon footprint tracking for each purchase.',
      image: '/placeholder.svg?height=400&width=600',
      completedDate: '2024',
      projectDuration: '6 months',
      teamSize: '5 developers',
      features: [
        'Multi-vendor Marketplace',
        'Carbon Footprint Tracking',
        'Loyalty Rewards System',
        'Advanced Search & Filters',
        'Payment Gateway Integration',
        'Inventory Management',
        'Mobile-responsive Design',
        'Analytics Dashboard',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Docker'],
      results: [
        '200% increase in online sales',
        '40% improvement in conversion rate',
        '15,000+ registered customers in first year',
      ],
      gradient: 'from-emerald-500 to-green-400',
      icon: ShoppingCart,
      liveUrl: '#',
      caseStudyUrl: '#',
    },
    {
      id: 3,
      name: 'DataViz Pro',
      client: 'Financial Services Company',
      category: 'Analytics Dashboard',
      description:
        'A real-time business intelligence dashboard that processes financial data from multiple sources, providing interactive visualizations and automated reporting for executive decision-making.',
      image: '/placeholder.svg?height=400&width=600',
      completedDate: '2023',
      projectDuration: '10 months',
      teamSize: '6 developers',
      features: [
        'Real-time Data Processing',
        'Interactive Dashboards',
        'Custom Report Builder',
        'Data Source Integration',
        'Automated Alerts',
        'Role-based Access Control',
        'Export Capabilities',
        'Mobile Dashboard App',
      ],
      technologies: ['React', 'Python', 'PostgreSQL', 'D3.js', 'Redis', 'Docker', 'AWS'],
      results: [
        '60% faster report generation',
        '90% reduction in manual data processing',
        'Enhanced decision-making speed by 40%',
      ],
      gradient: 'from-purple-500 to-pink-500',
      icon: BarChart3,
      liveUrl: '#',
      caseStudyUrl: '#',
    },
    {
      id: 4,
      name: 'CityGuide Mobile',
      client: 'Tourism Board Zagreb',
      category: 'Mobile Application',
      description:
        'A comprehensive city guide mobile app featuring interactive maps, augmented reality features, event listings, and offline capabilities for tourists visiting Zagreb.',
      image: '/placeholder.svg?height=400&width=600',
      completedDate: '2023',
      projectDuration: '7 months',
      teamSize: '4 developers',
      features: [
        'Interactive City Maps',
        'Augmented Reality Features',
        'Event Calendar',
        'Offline Map Access',
        'Multi-language Support',
        'Push Notifications',
        'Social Sharing',
        'Tourist Reviews & Ratings',
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'ARCore'],
      results: ['50,000+ downloads in first 6 months', '4.8/5 app store rating', '25% increase in tourist engagement'],
      gradient: 'from-orange-500 to-red-500',
      icon: Smartphone,
      liveUrl: '#',
      caseStudyUrl: '#',
    },
    {
      id: 5,
      name: 'EduManage System',
      client: 'Private School Network',
      category: 'Education Platform',
      description:
        'A comprehensive school management system handling student enrollment, grade tracking, parent communication, and administrative tasks across multiple school locations.',
      image: '/placeholder.svg?height=400&width=600',
      completedDate: '2022',
      projectDuration: '12 months',
      teamSize: '5 developers',
      features: [
        'Student Information System',
        'Grade & Attendance Tracking',
        'Parent-Teacher Communication',
        'Online Assignment Submission',
        'Financial Management',
        'Timetable Management',
        'Report Generation',
        'Mobile App for Parents',
      ],
      technologies: ['React', 'Spring Boot', 'MySQL', 'Flutter', 'AWS'],
      results: [
        '80% reduction in administrative workload',
        '95% parent satisfaction rate',
        'Streamlined operations across 5 schools',
      ],
      gradient: 'from-indigo-500 to-purple-500',
      icon: Building,
      liveUrl: '#',
      caseStudyUrl: '#',
    },
    {
      id: 6,
      name: 'FitTracker Pro',
      client: 'Fitness Center Chain',
      category: 'Fitness Platform',
      description:
        'A comprehensive fitness platform with member management, class scheduling, personal trainer booking, and nutrition tracking. Includes both web dashboard and mobile app.',
      image: '/placeholder.svg?height=400&width=600',
      completedDate: '2022',
      projectDuration: '9 months',
      teamSize: '4 developers',
      features: [
        'Member Management System',
        'Class Booking & Scheduling',
        'Personal Trainer Matching',
        'Workout & Nutrition Tracking',
        'Progress Analytics',
        'Payment Processing',
        'Social Features',
        'Wearable Device Integration',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Flutter', 'Stripe'],
      results: [
        '40% increase in member retention',
        '60% more class bookings',
        '35% growth in personal training sessions',
      ],
      gradient: 'from-green-500 to-teal-500',
      icon: TrendingUp,
      liveUrl: '#',
      caseStudyUrl: '#',
    },
  ];

  const projectCategories = [
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Custom web platforms and business applications tailored to your specific needs.',
      count: '15+ Projects',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment processing, inventory management, and analytics.',
      count: '8+ Projects',
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Cross-platform mobile apps for iOS and Android with native performance.',
      count: '12+ Projects',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboards',
      description: 'Data visualization and business intelligence solutions for informed decision-making.',
      count: '6+ Projects',
    },
  ];

  const capabilities = [
    {
      icon: Zap,
      title: 'Rapid Development',
      description: 'Agile methodology ensures fast delivery without compromising on quality or functionality.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built-in security best practices and compliance standards to protect your business data.',
    },
    {
      icon: Cloud,
      title: 'Scalable Architecture',
      description: 'Cloud-native solutions that grow with your business and handle increasing user loads.',
    },
    {
      icon: Users,
      title: 'Ongoing Support',
      description: 'Comprehensive maintenance, updates, and technical support after project completion.',
    },
  ];

  const clientTestimonials = [
    {
      name: 'Dr. Marija Kovač',
      company: 'MediCare Plus',
      role: 'Medical Director',
      content:
        'The patient management system transformed our clinic operations. The team understood our complex requirements and delivered beyond expectations.',
      rating: 5,
      avatar: '/placeholder.svg?height=60&width=60',
      project: 'Healthcare Platform',
    },
    {
      name: 'Petar Novak',
      company: 'EcoShop Croatia',
      role: 'CEO',
      content:
        'Our online sales increased by 200% after launching the new e-commerce platform. The carbon footprint feature sets us apart from competitors.',
      rating: 5,
      avatar: '/placeholder.svg?height=60&width=60',
      project: 'E-commerce Platform',
    },
    {
      name: 'Ana Jurić',
      company: 'Zagreb Tourism Board',
      role: 'Digital Marketing Manager',
      content:
        'The CityGuide app has been a huge success. Tourists love the AR features and offline maps. Downloads exceeded our expectations.',
      rating: 5,
      avatar: '/placeholder.svg?height=60&width=60',
      project: 'Mobile Application',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
            Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Portfolio
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {
              "Discover the custom web applications, e-commerce platforms, and mobile solutions we've built for businesses across Croatia and beyond."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactButton
              type={ContactFormType.Project}
              size={ContactButtonSize.Large}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Start Your Project
            </ContactButton>
            <ContactButton
              size={ContactButtonSize.Large}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Calendar className="mr-2 w-4 md:w-5 h-4 md:h-5" />
              Schedule Consultation
            </ContactButton>
          </div>
        </div>
      </section>

      {/* Project Categories Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">What We Build</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              From simple websites to complex enterprise applications, we create custom solutions for every business
              need.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {projectCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 text-center cursor-pointer">
                  <CardContent className="p-6 md:p-8">
                    <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{category.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">{category.description}</p>
                    <span className="text-emerald-600 font-semibold text-sm">{category.count}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {
                "Explore some of our most successful custom development projects and the impact they've made for our clients."
              }
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {portfolioProjects.map((project, index) => {
              const Icon = project.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={project.id}
                  className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}>
                  {/* Project Visual */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="relative">
                      <div
                        className={`bg-gradient-to-br ${project.gradient} rounded-2xl p-8 md:p-12 text-white shadow-2xl`}>
                        <div className="text-center mb-8">
                          <Icon className="w-16 md:w-24 h-16 md:h-24 mx-auto mb-6 opacity-80" />
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.name}</h3>
                          <p className="text-white/90 text-lg">{project.category}</p>
                        </div>

                        {/* Mock interface elements */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex space-x-2">
                              <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                              <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                              <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                            </div>
                            <div className="text-white/60 text-sm">{project.completedDate}</div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 bg-white/20 rounded w-3/4"></div>
                            <div className="h-2 bg-white/20 rounded w-1/2"></div>
                            <div className="h-2 bg-white/20 rounded w-2/3"></div>
                          </div>
                        </div>

                        {/* Project stats */}
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div className="bg-white/10 rounded-lg p-3">
                            <div className="text-sm text-white/80">Duration</div>
                            <div className="font-semibold">{project.projectDuration}</div>
                          </div>
                          <div className="bg-white/10 rounded-lg p-3">
                            <div className="text-sm text-white/80">Team</div>
                            <div className="font-semibold">{project.teamSize}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={isEven ? '' : 'lg:col-start-1'}>
                    <Card className="shadow-xl border-0 h-full">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                              {project.name}
                            </CardTitle>
                            <p className="text-emerald-600 font-semibold text-lg">{project.client}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-gray-900">{project.category}</div>
                            <div className="text-sm text-gray-500">Completed {project.completedDate}</div>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">{project.description}</p>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {project.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Results Achieved:</h4>
                          <div className="space-y-2">
                            {project.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="flex items-center">
                                <Award className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button
                            variant={ContactButtonVariant.Outline}
                            className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 font-semibold rounded-xl transition-all duration-300 flex-1">
                            <ExternalLink className="mr-2 w-4 h-4" />
                            View Case Study
                          </Button>
                          <ContactButton
                            type={ContactFormType.Project}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 font-semibold rounded-xl transition-all duration-300 flex-1">
                            Similar Project?
                          </ContactButton>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Our Development</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with business understanding to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 text-center">
                  <CardContent className="p-6 md:p-8">
                    <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{capability.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{capability.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from businesses that have transformed their operations with our custom solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 italic">{'"{testimonial.content}"'}</p>
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar || '/placeholder.svg'}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-emerald-600 font-medium bg-emerald-50 px-3 py-1 rounded-full inline-block">
                    {testimonial.project}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build Your Custom Solution?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {"Let's discuss your project requirements and create a custom solution that drives your business forward."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactButton
              type={ContactFormType.Project}
              size={ContactButtonSize.Large}
              className=" bg-emerald-600 hover:bg-emerald-700 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Start Your Project
            </ContactButton>
            <ContactButton
              size={ContactButtonSize.Large}
              className=" bg-emerald-600 hover:bg-emerald-700 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Calendar className="mr-2 w-4 md:w-5 h-4 md:h-5" />
              Schedule Consultation
            </ContactButton>
          </div>
        </div>
      </section>
    </div>
  );
}
