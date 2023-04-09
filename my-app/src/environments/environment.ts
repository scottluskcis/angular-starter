// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  msalConfig: {
      auth: {
          clientId: "30cc08d3-8d5e-406d-b289-4c93c46ba426",
      }
  },
  apiConfig: {
      scopes: [""],
      uri: ""
  },
  b2cPolicies: {
      names: {
          signUpSignIn: "B2C_1_susi",
          resetPassword: "B2C_1_reset_password",
          editProfile: "B2C_1_edit_profile"
      },
      authorities: {
          signUpSignIn: {
              authority: "https://scottluskdev.b2clogin.com/scottluskdev.onmicrosoft.com/B2C_1_susi"
          },
          resetPassword: {
              authority: "https://scottluskdev.b2clogin.com/scottluskdev.onmicrosoft.com/B2C_1_reset_password"
          },
          editProfile: {
              authority: "https://scottluskdev.b2clogin.com/scottluskdev.onmicrosoft.com/B2C_1_edit_profile"
          }
      },
      authorityDomain: "scottluskdev.b2clogin.com"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
