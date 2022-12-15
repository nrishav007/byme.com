export default function Pagination ({onChange,current,totalPage,limit}) {
    const prev = <button onClick={( )=> onChange(current-1)} disabled={current === 1}>Prev</button>
    const curr = <button>{current}</button>
    const Next = <button onClick={( ) => onChange(current+1)} disabled={current === Math.ceil(totalPage/18)}>Next</button>
    return (
        <>
        {prev}
        {curr}
        {Next}
        </>
    )
}   