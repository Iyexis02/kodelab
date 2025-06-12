'use client';

import { Button } from './ui/Button';
import { Card, CardContent } from './ui/Card';
import { AlertCircle, Briefcase, Calendar, Code, Heart, MessageCircle, RefreshCw } from 'lucide-react';

import { ErrorStateType } from '@/enums';

type ErrorStateProps = {
  title?: string;
  message: string;
  onRetry?: () => void;
  showRetry?: boolean;
  type?: ErrorStateType;
};

export function ErrorState({
  title = 'Something went wrong',
  message,
  onRetry,
  showRetry = true,
  type = ErrorStateType.General,
}: ErrorStateProps) {
  const getIcon = () => {
    switch (type) {
      case ErrorStateType.Products:
        return <Briefcase className="w-8 h-8 text-white" />;
      case ErrorStateType.Team:
        return <Code className="w-8 h-8 text-white" />;
      case ErrorStateType.Testimonials:
        return <MessageCircle className="w-8 h-8 text-white" />;
      case ErrorStateType.Milestones:
        return <Calendar className="w-8 h-8 text-white" />;
      case ErrorStateType.Values:
        return <Heart className="w-8 h-8 text-white" />;
      default:
        return <AlertCircle className="w-8 h-8 text-white" />;
    }
  };

  const getGradient = () => {
    switch (type) {
      case ErrorStateType.Products:
        return 'from-emerald-500 to-blue-500';
      case ErrorStateType.Team:
        return 'from-blue-500 to-purple-500';
      case ErrorStateType.Testimonials:
        return 'from-emerald-500 to-blue-600';
      case ErrorStateType.Milestones:
        return 'from-blue-500 to-purple-500';
      case ErrorStateType.Values:
        return 'from-emerald-500 to-green-500';
      default:
        return 'from-red-500 to-orange-500';
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[400px]">
      <Card className="max-w-md w-full shadow-lg border-0">
        <CardContent className="p-8 text-center">
          <div
            className={`w-16 h-16 bg-gradient-to-br ${getGradient()} rounded-full flex items-center justify-center mx-auto mb-6`}>
            {getIcon()}
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{message}</p>

          {showRetry && onRetry && (
            <Button
              onClick={onRetry}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02]">
              <RefreshCw className="mr-2 w-4 h-4" />
              Try Again
            </Button>
          )}

          {type === ErrorStateType.Milestones && (
            <div className="mt-8 relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
              <div className="flex justify-center mb-4">
                <div className="w-4 h-4 bg-gray-200 rounded-full relative z-10"></div>
              </div>
              <div className="flex justify-center">
                <div className="w-4 h-4 bg-gray-200 rounded-full relative z-10"></div>
              </div>
            </div>
          )}

          {type === ErrorStateType.Values && (
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="h-12 bg-gray-100 rounded-lg"></div>
              <div className="h-12 bg-gray-100 rounded-lg"></div>
              <div className="h-12 bg-gray-100 rounded-lg"></div>
              <div className="h-12 bg-gray-100 rounded-lg"></div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
