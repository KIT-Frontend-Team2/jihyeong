import { useListProvider } from '../../../../../store/3_context';

const ContextQ2Form3 = () => {
    const [_, dispatch, Key] = useListProvider();
    const onClick = () => {
        dispatch({
          type: Key.RESET,
        });
    };
    return (
        <div>
            <h1>Q2Form3</h1>
            <button onClick={onClick}>RESET</button>
        </div>
    );
};
export default ContextQ2Form3;
