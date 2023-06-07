import { todoMock } from "__mock__/datas/todo.data";
import { rest } from "msw";

export const getTodo = rest.get('/api/todo', async(_, res, ctx)=>{
                        // 백엔드에 요청할 url
    return res(ctx.status(200), ctx.json(todoMock))
    // 요청을 보내면 해당주소로 200번대 성공의 응답을 받을 수 있다.
})

export const addTodo = rest.post('/api/todo', async(req,res,ctx)=>{
    let title;
    let content;

    await req.json().then((data)=>{
        title = data.title
        content = data.content
    })

    return res(
        ctx.status(200),
        ctx.json({
            id:Math.floor(Math.random()*10000000),
            title,
            content,
            state: false
        })
    )
})

export const deleteTodo = rest.delete('/api/todo/:id', async (req, res, ctx)=>{
    const {id}  = req.params;
    return await res(
        ctx.status(200),
        ctx.json({
            id,
        })
    )
})

export const updateTodo = rest.put('/api/todo/:id', async (req, res, ctx)=>{
    const {id} = req.params;
    let title;
    let content;
    let state;
    
    await req.json().then((data)=>{
        title = data.title
        content = data.content
        state = data.state
    })

    return await res(
        ctx.status(200),
        ctx.json({
            id,
            title,
            content,
            state,
        })

    )
})

// msw에 api 등록 -> msw화 가상 msw생성 -> msw 동작