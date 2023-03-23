// jest.config.js
const config = {
    type:"module",
    testEnvironmentOptions: {
      "node": {
        "experimental-vm-modules": true
      }
    }
  }

  export default config;