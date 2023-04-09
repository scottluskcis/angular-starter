export const environment = {
  production: true,
  auth: {
    clientId: 'Enter_the_Application_Id_here', // Application (client) ID from the app registration
    authority: 'Enter_the_Cloud_Instance_Id_Here/Enter_the_Tenant_Info_Here', // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
    redirectUri: 'Enter_the_Redirect_Uri_Here'// This is your redirect URI
  }
};
