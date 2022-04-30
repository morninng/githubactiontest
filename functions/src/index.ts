import * as functions from 'firebase-functions';

// import { PROJECT_SECRET } from '../secret/test-secret';
import secretJson from '../secret/test-secret2.json';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  // const TWITTER_API_KEY = PROJECT_SECRET["mixidea-temp-staging"].TWITTER_API_KEY
 response.send("ss");
});

export const helloWorld3 = functions.https.onRequest((request, response) => {
  const abc = secretJson.abc
 response.send(abc);
});
