'use client';

import { Button } from './ui/Button';
import { Card, CardContent } from './ui/Card';
import { AlertCircle, RefreshCw } from 'lucide-react';

type ErrorStateProps = {
  title?: string;
  message: string;
  onRetry?: () => void;
  showRetry?: boolean;
};

export function ErrorState({ title = 'Something went wrong', message, onRetry, showRetry = true }: ErrorStateProps) {
  return (
    <div className="flex justify-center items-center min-h-[400px]">
      <Card className="max-w-md w-full shadow-lg border-0">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8 text-white" />
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
        </CardContent>
      </Card>
    </div>
  );
}
