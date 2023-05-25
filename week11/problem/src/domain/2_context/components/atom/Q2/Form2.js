import { useListProvider } from '../../../../../store/3_context';

const ContextQ2Form2 = () => {
    const [_, dispatch, Key] = useListProvider();
    const onClick = () => {
        dispatch({
            type: Key.CHANGE,
        });
    };
    return (
        <div>
            <h1>Q2Form2</h1>
            <button onClick={onClick}>STATUS 추가</button>
        </div>
    );
};
export default ContextQ2Form2;
