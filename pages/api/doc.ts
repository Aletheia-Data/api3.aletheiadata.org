import { withSwagger } from 'next-swagger-doc';

const swaggerHandler = withSwagger({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Aletheia Data Swagger',
      version: '0.0.1',
    },
  },
  apiFolder: 'pages/api',
});
export default swaggerHandler();