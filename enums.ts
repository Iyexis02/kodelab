export enum CardContentVariant {
  HowWeHelp = 'HowWeHelp',
}

export enum InquiryType {
  ProjectDevelopment = 'Project Development',
  CareerOpportunities = 'Career Opportunities',
  TechnicalConsulting = 'Technical Consulting',
  PartnershipInquiry = 'Partnership Inquiry',
  GeneralInformation = 'General Information',
  SupportMaintenance = 'Support & Maintenance',
}

export enum ProjectType {
  WebApplication = 'Web Application',
  MobileApp = 'Mobile App (iOS/Android)',
  ECommercePlatform = 'E-commerce Platform',
  EnterpriseSoftware = 'Enterprise Software',
  APIDevelopment = 'API Development',
  CloudMigration = 'Cloud Migration',
  UIUXDesign = 'UI/UX Design',
  Other = 'Other',
}

export enum BudgetRange {
  LessThanFive = 'Under €5,000',
  FiveToFifteen = '€5,000 - €15,000',
  FifteenToFifty = '€15,000 - €50,000',
  FiftyToHundred = '€50,000 - €100,000',
  MoreThanHundred = '€100,000+',
  DiscussInDetail = 'Discuss in detail',
}

export enum CareerPosition {
  FrontendDeveloper = 'Frontend Developer',
  BackendDeveloper = 'Backend Developer',
  FullStackDeveloper = 'Full-Stack Developer',
  MobileDeveloper = 'Mobile Developer',
  DevOpsEngineer = 'DevOps Engineer',
  UIUXDesigner = 'UI/UX Designer',
  ProjectManager = 'Project Manager',
  Internship = 'Internship',
  Other = 'Other',
}

export enum Timeline {
  ASAP = 'ASAP',
  OneWeek = 'Within 1 month',
  OneToThreeMonths = '1-3 months',
  ThreeToSixMonths = '3-6 months',
  AboveSixMonths = '6+ months',
  Flexible = 'Flexible',
}

export enum ContactFormType {
  Default = 'default',
  Contact = 'contact',
  Careers = 'careers',
  Project = 'project',
  Consultation = 'consultaion',
}

export enum ContactButtonVariant {
  Default = 'default',
  Outline = 'outline',
  Secondary = 'secondary',
  Ghost = 'ghost',
}

export enum ContactButtonSize {
  Default = 'default',
  Small = 'sm',
  Large = 'lg',
  Icon = 'icon',
}

export enum ProjectStatus {
  Completed = 'Completed',
  InProgress = 'In Progress',
  Maintenance = 'Maintenance',
  Archived = 'Archived',
}

export enum ErrorStateType {
  Products = 'products',
  Team = 'team',
  General = 'general',
  Testimonials = 'testimonials',
  Milestones = 'milestones',
  Values = 'values',
  Stats = 'stats',
}

export enum HTTPStatusCode {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  INTERNAL_SERVER_ERROR = 500,
}
