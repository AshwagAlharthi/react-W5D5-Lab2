function Benefit(props) {
    return (
        <div className='flex flex-col justify-around items-center text-center w-[25vw] h-[42vh] max-sm:h-[20vh] max-sm:w-[100%]'>
            <div className='w-[80%] h-[30%] flex justify-center items-center'>
                <img className='w-[35%] h-[80%] max-sm:w-[20%]' src={props.image} />
            </div>
            <div className='w-[100%] h-[20%] '>
                <h2 className='font-bold'>{props.title}</h2>
            </div>
            <div className='w-[100%] h-[40%] '>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Benefit