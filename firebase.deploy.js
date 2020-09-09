const path = require('path');
const dotenv = require('dotenv');
const firebaseClient = require('firebase-tools');

const mode = (process.argv.includes('--development') || process.argv.includes('--dev')) ? 'development' : 'production';

dotenv.config({ path: path.join(__dirname, `.env.${mode}.local`) });
dotenv.config({ path: path.join(__dirname, `.env.${mode}`) });
dotenv.config({ path: path.join(__dirname, '.env.local') });
dotenv.config({ path: path.join(__dirname, '.env') });

firebaseClient.deploy({
  project: mode,
  token: process.env.FIREBASE_TOKEN || '@', // Fallback with an invalid token.
}).then(() => {
  console.log('\033[32m✔\033[0m \033[1mFirebase rules and indexes have been deployed!\033[0m');
}).catch((err) => {
  if (err.status === 401) {
    firebaseClient.login.ci().then((response) => {
      console.log("\033[32m✔\033[0m \033[1mPaste FIREBASE_TOKEN into '.env.local' and try again:\033[0m");
      console.log(response.tokens.refresh_token);
    });
  } else {
    console.error(err);
  }
});
