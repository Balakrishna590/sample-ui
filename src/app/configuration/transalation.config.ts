/* --- Interfaces --- */
import { Configuration } from './../interfaces/configuration';

export const CONFIGURATION: Configuration = {
  defaultLanguageLocaleId: 'en-us',
  id: 'sample-error-messages',
  localeStrings: {
    'en_us': {
      registration:{
        heading:'User Registration',
        registration:'Registration',
        regcontent: 'Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usum facete detracto patrioque an per, lucilius pertinacia eu vel.',
      },
      common:{
       firstnamelabel: 'First Name',
       lastnamelabel: 'Last Name',
       emaillabel:'E-Mail',
       useridlabel:'User ID',
       passwordlabel: 'Password',
       confirmpasswordlable: 'Confirm Password',
       daylable:'Day',
       monthlabel:'Month',
       yearlabel:'Year',
       regbtnlabel:'Register'
      },
      about: 'About',
      skip: 'Skip',
    }
  }
};