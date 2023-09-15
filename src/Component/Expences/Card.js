export default function Card(props) {
    return (
        <>
            <div className="bg-gray-900 w-full rounded-lg max-w-3xl p-4 m-3">
                {props.children}
            </div>
        </>
    )
}