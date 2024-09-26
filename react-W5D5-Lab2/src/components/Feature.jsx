function Feature(props) {
    return (
        <div className='flex flex-col justify-between items-center text-center w-[20vw] h-[40vh] max-sm:h-[20vh] max-sm:w-[100%]'>
            <img className='w-[100%] h-[50%] max-sm:w-[20%]' src={props.image} />
            <h2 className='font-bold'>{props.title}</h2>
            <p>{props.desc}</p>
        </div>)
}

export default Feature