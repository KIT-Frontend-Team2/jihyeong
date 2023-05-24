import { useListProvider } from '../../../../../store/3_context';
import ContextQ2Form2 from './Form2';

const ContextQ2Form = () => {
    const [_, dispatch, Key] = useListProvider();
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: Key.ADDED,
            name: e.target[0].value,
            nickname: e.target[1].value,
        });
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>Q2Form</h1>
                <input placeholder="name" />
                <input placeholder="nick-name" />
                <button>추가</button>
                <ContextQ2Form2 />
            </form>
        </div>
    );
};
export default ContextQ2Form;
