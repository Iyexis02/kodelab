import * as LucideIcons from 'lucide-react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import React from 'react';

import { ContactButton } from '@/app/components/ContactButton';
import { Button } from '@/app/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/Card';
import { ContactButtonVariant, ContactFormType } from '@/enums';
import { Project } from '@/types';

type ProjectCardProps = {
  project: Project;
  isEven: boolean;
  IconComponent: React.ForwardRefExoticComponent<
    Omit<LucideIcons.LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
};

const ProjectCard = ({ project, isEven, IconComponent }: ProjectCardProps) => {
  return (
    <div
      key={project.id}
      className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
      {/* Project Visual */}
      <div className={isEven ? '' : 'lg:col-start-2'}>
        <div className="relative">
          <div className={`bg-gradient-to-br ${project.gradient} rounded-2xl p-8 md:p-12 text-white shadow-2xl`}>
            <div className="text-center mb-8">
              <IconComponent className="w-16 md:w-24 h-16 md:h-24 mx-auto mb-6 opacity-80" />
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
                <div className="text-white/60 text-sm">{project.dateCompleted}</div>
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
                <div className="font-semibold">{project.duration}</div>
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
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{project.name}</CardTitle>
                <p className="text-emerald-600 font-semibold text-lg">{project.client}</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-gray-900">{project.category}</div>
                <div className="text-sm text-gray-500">Completed {project.dateCompleted}</div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">{project.description}</p>
          </CardHeader>

          <CardContent className="pt-0">
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {project?.features?.map((feature, featureIndex) => (
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
                {project?.technologies?.map((tech, techIndex) => (
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
              {project.caseStudyUrl && (
                <Button
                  variant={ContactButtonVariant.Outline}
                  className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 font-semibold rounded-xl transition-all duration-300 flex-1">
                  <ExternalLink className="mr-2 w-4 h-4" />
                  View Case Study
                </Button>
              )}
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
};

export default ProjectCard;
