
import * as express from 'express';
import { Application } from 'express';

import * as webpush from 'web-push';

import { readAllLessons } from './read-all-lessons.route';
import { addPushSubscriber } from './add-push-subscriber.route';
import { sendNewsletter } from './send-newsletter.route';

const vapidKeys = {
  publicKey: 'BMlz1G5vv3FOHf8M91WkT-eJGWvLP5TRssrvFWlma5uXoVyotA_k4kQ_92425vBlOt278-0Yod2HnAr3ylZK74E',
  privateKey: 'GNR1RUS0Fp6tN-3AzcSVKukCu9BgQHQSCO2eTyQcZmE'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const app: Application = express();
app.use(express.json());

// REST API
app.route('/api/lessons').get(readAllLessons);
app.route('/api/notifications').post(addPushSubscriber);
app.route('/api/newsletter').post(sendNewsletter);


// launch an HTTP Server
const httpServer = app.listen(9000, () => {
  console.log('HTTP Server running at http://localhost:' + httpServer.address().port);
});









