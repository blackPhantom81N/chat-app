import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useConversation from "../../store/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      return;
    }
    if (search?.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations?.find((item) =>
      item?.fullName.toLowerCase().includes(search?.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else return toast.error("User not found");
  };

  return (
    <div>
      <form
        className="flex items-center gap-5 px-5 py-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered rounded-full"
          value={search}
          onChange={(e) => setSearch(e?.target?.value)}
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
