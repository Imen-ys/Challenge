import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
    return (
        <div className="mt-4">
            <div className="relative">
                <IoSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search members..."
                    className="pl-8 py-2 text-sm rounded text-gray-700 w-[800px] bg-gray-100 border-none focus:ring-2 focus:ring-blue-500 outline-none"
                />
            </div>
        </div>
    );
}

export default SearchInput;
