import uuid from "react-uuid"

const Webtoon = ({props}) => {
    return (
        <li className="list-none mr-5" key={uuid()}>
            <img src={props.imgUrl} alt={props.name} width={"200px"}/>
            <div>{props.name}</div>
        </li>
    )
}

export default Webtoon