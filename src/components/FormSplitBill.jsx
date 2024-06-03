import React, { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 rounded-lg bg-[#ffe8cc] p-6"
      >
        <h2 className="mb-4  text-4xl font-bold uppercase tracking-wide">
          Split the bill with
          <span
            className="ml-2 bg-gradient-to-r from-purple-500 to-pink-500 
          bg-clip-text text-transparent"
          >
            {selectedFriend.name}
          </span>
        </h2>
        <div className="flex items-center justify-between">
          <label htmlFor="billValue" className="text-lg font-semibold">
            Bill value
          </label>
          <input
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
            id="billValue"
            type="text"
            className="w-1/2 rounded-lg p-4 text-black"
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="billValue" className="text-lg font-semibold">
            Your expense
          </label>
          <input
            value={paidByUser}
            onChange={(e) =>
              setPaidByUser(
                Number(e.target.value) > bill
                  ? paidByUser
                  : Number(e.target.value),
              )
            }
            id="expense"
            type="text"
            className="w-1/2 rounded-lg p-4 text-black"
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="billValue" className="text-lg font-semibold">
            {selectedFriend.name}&apos;s expense
          </label>
          <input
            value={paidByFriend}
            disabled
            id="billValue"
            type="text"
            className="w-1/2 rounded-lg p-4 text-black"
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="billValue" className="text-lg font-semibold">
            Who is paying the bill?
          </label>
          <select
            value={whoIsPaying}
            onChange={(e) => setWhoIsPaying(e.target.value)}
            name="payBill"
            id="payBill"
            className="rounded-lg px-6 py-2"
          >
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
          </select>
        </div>
        <Button className={`mt-4 self-end`}>Split bill</Button>
      </form>
    </>
  );
};

export default FormSplitBill;
