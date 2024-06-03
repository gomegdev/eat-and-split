import Button from "./Button";
import { useState } from "react";

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <>
      <form
        className="flex flex-col gap-5 rounded-lg bg-[#ffe8cc] p-4"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between">
          <label htmlFor="friendName" className="text-xl font-semibold">
            Friend Name
          </label>
          <input
            id="friendName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter friend name"
            className="rounded-lg p-4 text-black"
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="imageURL" className="text-xl font-semibold">
            Image URL
          </label>
          <input
            id="imageURL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="place URL img here"
            className="rounded-lg p-4 text-black"
          />
        </div>
        <Button className={`self-end`}>Add</Button>
      </form>
    </>
  );
};

export default FormAddFriend;
