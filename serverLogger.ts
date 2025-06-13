'use server';

import { logApolloError, logError, logInfo, logWarning } from './logger';
import { GraphQLFormattedError } from 'graphql';

import { LogType } from '@/enums';

interface ClientLogData {
  type: LogType;
  message: string;
  context?: string;
  userId?: string;
  userAgent?: string;
  url?: string;
  timestamp?: string;
  additionalData?: Record<string, any>;
}

export async function logFromClient(logData: ClientLogData) {
  try {
    const serverContext = {
      context: logData.context || 'ClientSide',
      userId: logData.userId,
      clientTimestamp: logData.timestamp,
      userAgent: logData.userAgent,
      url: logData.url,
      ...logData.additionalData,
    };

    switch (logData.type) {
      case LogType.Message:
        await logInfo(logData.message, serverContext);
        break;
      case LogType.Error:
        await logError(logData.message, serverContext);
        break;
      case LogType.Warning:
        await logWarning(logData.message, serverContext);
        break;
      case LogType.ApolloError:
        await logError(`Apollo Error: ${logData.message}`, {
          ...serverContext,
          errorType: 'ApolloError',
        });
        break;
      default:
        await logInfo(logData.message, serverContext);
    }
  } catch (error) {
    console.error('Failed to log from client:', error);
  }
}

export async function logApolloErrorFromClient(
  errorMessage: string,
  graphQLErrors?: readonly GraphQLFormattedError[],
  networkError?: any,
  context?: string,
  additionalData?: Record<string, any>
) {
  try {
    const sanitizedGraphQLErrors = graphQLErrors?.map((error) => ({
      message: error.message,
      path: error.path,
      extensions: error.extensions ? { code: error.extensions.code } : undefined,
    }));

    const sanitizedNetworkError = networkError
      ? {
          name: networkError.name,
          message: networkError.message,
          statusCode: networkError.statusCode,
        }
      : undefined;

    await logApolloError(new Error(errorMessage) as any, {
      context: context || 'ClientSide',
      graphQLErrors: sanitizedGraphQLErrors,
      networkError: sanitizedNetworkError,
      ...additionalData,
    });
  } catch (error) {
    console.error('Failed to log Apollo error from client:', error);
  }
}
