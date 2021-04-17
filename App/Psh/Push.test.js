import Push from '../components/Push';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

test('Sending notif', () => {
  expect(Push(this.sendPushNotification()));
});

