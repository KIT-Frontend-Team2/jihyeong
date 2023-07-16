import { setupWorker } from 'msw'

import * as detailApi from './apis/detailPage.api'

const handler = [...Object.values(detailApi)]
export const worker = setupWorker(...handler)
