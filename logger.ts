'use server';

import { LogType } from './enums';
import { ApolloError } from '@apollo/client';

interface LoggerOptions {
  context?: string;
  userId?: string;
  requestId?: string;
  errorType?: string;
  graphQLErrors?: any;
  networkError?: any;
}

const logger = async (type: LogType, message: string | ApolloError | Error, options?: LoggerOptions) => {
  const timestamp = new Date().toISOString();
  const context = options?.context ? `[${options.context}]` : '';
  const prefix = `${timestamp} ${context}`;

  switch (type) {
    case LogType.Message:
      console.log(`${prefix} INFO:`, message);
      break;

    case LogType.Error:
      if (typeof message === 'string') {
        console.error(`${prefix} ERROR:`, message);
      } else if (message instanceof Error) {
        console.error(`${prefix} ERROR:`, {
          name: message.name,
          message: message.message,
          stack: message.stack,
          ...options,
        });
      }
      break;

    case LogType.ApolloError:
      if (message instanceof ApolloError) {
        const errorDetails = {
          timestamp,
          context: options?.context,
          message: message.message,
          name: message.name,
          networkError: message.networkError
            ? {
                name: message.networkError.name,
                message: message.networkError.message,
                statusCode: (message.networkError as any)?.statusCode,
              }
            : null,
          graphQLErrors:
            message.graphQLErrors?.map((error) => ({
              message: error.message,
              locations: error.locations,
              path: error.path,
              extensions: error.extensions,
            })) || [],
          clientErrors:
            message.clientErrors?.map((error) => ({
              message: error.message,
              name: error.name,
            })) || [],
          extraInfo: message.extraInfo || null,
          stack: message.stack,
        };

        console.error(`${prefix} APOLLO_ERROR:`, errorDetails);

        if (message.graphQLErrors?.length > 0) {
          console.table(
            message.graphQLErrors.map((error) => ({
              message: error.message,
              path: error.path?.join('.') || 'N/A',
              code: error.extensions?.code || 'N/A',
            }))
          );
        }
      } else {
        console.error(`${prefix} APOLLO_ERROR: Invalid ApolloError object`, message);
      }
      break;

    case LogType.Warning:
      console.warn(`${prefix} WARNING:`, message);
      break;

    case LogType.Debug:
      if (process.env.NODE_ENV === 'development') {
        console.debug(`${prefix} DEBUG:`, message);
      }
      break;

    default:
      console.log(`${prefix} UNKNOWN_LOG_TYPE:`, message);
      break;
  }
};

const logInfo = (message: string, options?: LoggerOptions) => logger(LogType.Message, message, options);

const logError = (error: string | Error, options?: LoggerOptions) => logger(LogType.Error, error, options);

const logApolloError = (error: ApolloError, options?: LoggerOptions) => logger(LogType.ApolloError, error, options);

const logWarning = (message: string, options?: LoggerOptions) => logger(LogType.Warning, message, options);

const logDebug = (message: string, options?: LoggerOptions) => logger(LogType.Debug, message, options);

export { logger, logInfo, logError, logApolloError, logWarning, logDebug };
