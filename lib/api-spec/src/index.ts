export const openApiDocument = {
  openapi: '3.1.0',
  info: {
    title: 'Turbo Fiverr API',
    version: '0.1.0'
  },
  paths: {
    '/status': {
      get: {
        summary: 'Read API heartbeat',
        responses: {
          '200': {
            description: 'Server is healthy',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/StatusPayload'
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    schemas: {
      StatusPayload: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'Service health marker'
          },
          version: {
            type: 'string'
          },
          timestamp: {
            type: 'string',
            format: 'date-time'
          }
        },
        required: ['status', 'timestamp']
      }
    }
  }
} as const;

export type StatusPayload = (typeof openApiDocument)['components']['schemas']['StatusPayload'];
