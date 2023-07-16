import { rest } from 'msw'

import detailPageMock from '../datas/detailPage.mock'

export const getTodo = rest.get('/detail/:productId', async (_, res, ctx) => {
	return res(ctx.status(200), ctx.json(detailPageMock))
})
