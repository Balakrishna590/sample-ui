export const ENVIRONMENT: any = {
  admin_employee: {
    isProduction: true,
    prefix: 'adminemp',
    storageVersion: 1,
    timeoutDelay: 9000
  },
  API_ENDPOINT: 'http://localhost:8090',
 /*  API_EMPLOYEES: this.API_ENDPOINT+'/employees', */
  API_DEPARTMENTS: 'http://localhost:8090/getAll/depts'
 
};