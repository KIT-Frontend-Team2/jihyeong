import * as TodoApi from "./apis/todo.api"
import {setupWorker} from 'msw'

const handler = [...Object.values(TodoApi)];
// export한 함수들이 객체형태로 * = TodoApi에 담겨전달 해당 객체의 키의 밸류인 함수들을 배열로 생성
export const worker = setupWorker(...handler);
// 모킹 워커 생성 후 핸들러 등록