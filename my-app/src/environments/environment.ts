// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    clientId: 'Enter_the_Application_Id_here', // Application (client) ID from the app registration
    authority: 'Enter_the_Cloud_Instance_Id_Here/Enter_the_Tenant_Info_Here', // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
    redirectUri: 'Enter_the_Redirect_Uri_Here'// This is your redirect URI
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
