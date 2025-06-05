import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

import { Button } from '@/app/components/ui/Button';
import { Card, CardContent } from '@/app/components/ui/Card';

type TeamCardProps = {
  employee: Employee;
};

const TeamCard = ({ employee }: TeamCardProps) => {
  return (
    <Card
      key={employee?.id}
      className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={employee?.image?.url || '/placeholder.svg'}
            alt={`${employee?.name} ${employee?.surname}`}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {employee.name} {employee.surname}
            </h3>
            <p className="text-emerald-600 font-semibold text-lg">{employee.role}</p>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">{employee.introduction}</p>
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {employee?.skills?.map((skill, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="flex space-x-3">
            {employee?.socials?.linkedin && (
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Button>
            )}
            {employee?.socials?.github && (
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-colors">
                <Github className="w-5 h-5" />
              </Button>
            )}
            {employee?.socials?.twitter && (
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 rounded-full hover:bg-blue-100 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </Button>
            )}
            {employee?.socials?.email && (
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 rounded-full hover:bg-emerald-100 hover:text-emerald-600 transition-colors">
                <Mail className="w-5 h-5" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
