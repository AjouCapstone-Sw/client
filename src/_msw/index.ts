import { setupWorker } from 'msw';

import { CategoryHandler } from './Category';

export const worker = setupWorker(...CategoryHandler);
