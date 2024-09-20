import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <div>
      <form className="flex items-center gap-5 px-5 py-5">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered rounded-full"
        />
        <button
          type="submit"
          className="btn btn-circle bg-sky-500 text-white hover:bg-sky-900 outline-none"
        >
          <CiSearch className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
