
export const environment = {
  production: true,
  msalConfig: {
      auth: {
          clientId: "",
      }
  },
  apiConfig: {
      scopes: [""],
      uri: ""
  },
  b2cPolicies: {
      names: {
          signUpSignIn: "",
          resetPassword: "",
          editProfile: ""
      },
      authorities: {
          signUpSignIn: {
              authority: ""
          },
          resetPassword: {
              authority: ""
          },
          editProfile: {
              authority: ""
          }
      },
      authorityDomain: ""
  }
};

