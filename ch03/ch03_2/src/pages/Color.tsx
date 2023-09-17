export default function Color() {
    return (
        <div className="p-4 bg-sky-700">
            <p className="w-full text-3xl text-white">Color</p>
            <div className="mb-4">
                <p className="text-white">Email Address</p>
                <input type="email" className="text-gray-900 border-sky-200 border-4"/>
                <p className="text-rose-500">This field is required</p>
            </div>
        </div>
    )
}