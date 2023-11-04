import './Title.css';

export default function Title (props) {
    const {fontSize} = props
    return (
        <div className='title'>
            <h1 style={{fontSize: fontSize}}>{props.h1}</h1>
            <p>{props.p}</p>
        </div>
    )
}