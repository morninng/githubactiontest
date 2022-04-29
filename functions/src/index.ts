import * as functions from 'firebase-functions';

import { PROJECT_SECRET } from '../secret/test-secret';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  const TWITTER_API_KEY = PROJECT_SECRET["mixidea-temp-staging"].TWITTER_API_KEY
 response.send(TWITTER_API_KEY);
});
