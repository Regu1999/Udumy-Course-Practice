import keyConceptsImage from '../../assets/images/key-concepts.png';
export default function KeyHeader() {
    return (
        <>
            <header className='flex items-center justify-center flex-col p-8 mb-10 text-center'>
                <img src={keyConceptsImage} alt="Medal badge with a star" className='w-20' />
                <h1 className='text-2xl'>Key React Concepts</h1>
                <p className='m-0'>Selected key React concepts you should know about</p>
            </header>
        </>
    )
}