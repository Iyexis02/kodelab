'use client';

import type { ApolloError } from '@apollo/client';
import { useCallback } from 'react';

import { LogType } from '@/enums';
import { logApolloErrorFromClient, logFromClient } from '@/serverLogger';

export function useClientLogger() {
  const getUserAgent = () => {
    if (typeof window !== 'undefined') {
      return window.navigator.userAgent;
    }
    return 'Unknown';
  };

  const getCurrentUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return 'Unknown';
  };

  const logInfo = useCallback(async (message: string, context?: string, additionalData?: Record<string, any>) => {
    await logFromClient({
      type: LogType.Message,
      message,
      context,
      userAgent: getUserAgent(),
      url: getCurrentUrl(),
      timestamp: new Date().toISOString(),
      additionalData,
    });
  }, []);

  const logError = useCallback(async (message: string, context?: string, additionalData?: Record<string, any>) => {
    await logFromClient({
      type: LogType.Error,
      message,
      context,
      userAgent: getUserAgent(),
      url: getCurrentUrl(),
      timestamp: new Date().toISOString(),
      additionalData,
    });
  }, []);

  const logWarning = useCallback(async (message: string, context?: string, additionalData?: Record<string, any>) => {
    await logFromClient({
      type: LogType.Warning,
      message,
      context,
      userAgent: getUserAgent(),
      url: getCurrentUrl(),
      timestamp: new Date().toISOString(),
      additionalData,
    });
  }, []);

  const logApolloError = useCallback(
    async (error: ApolloError, context?: string, additionalData?: Record<string, any>) => {
      await logApolloErrorFromClient(error.message, error.graphQLErrors, error.networkError, context, {
        userAgent: getUserAgent(),
        url: getCurrentUrl(),
        timestamp: new Date().toISOString(),
        ...additionalData,
      });
    },
    []
  );

  return {
    logInfo,
    logError,
    logWarning,
    logApolloError,
  };
}
