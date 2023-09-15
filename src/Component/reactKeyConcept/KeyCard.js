export default function KeyCard(props) {
    return (
        <>
            <div className="flex flex-col justify-start items-center gap-4 bg-gradient-to-r from-[#250358] to-[#440c66] p-6  shadow-pink-0.2 w-2/5 transition-all duration-700 hover:translate-x-minus2px hover:shadow-pink-0.4 hover:transition-transform">
                {/* {props.children} */}
                <img src={props.image} alt={props.title} className='w-28 h-20' />
                <h2 className='m-0 text-base uppercase font-bold'>{props.title}</h2>
                <p className='m-0 text-center text-sm'>{props.description}</p>
            </div>
        </>
    )
}