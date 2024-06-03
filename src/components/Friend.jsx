import React, { useState } from "react";
import Button from "./Button";

const Friend = ({ friend, selectedFriend, onSelection }) => {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li
      className={`flex flex-col ${isSelected ? "rounded-lg bg-[#ffe8cc]" : ""}`}
    >
      <div className="flex justify-between rounded-lg p-4 transition duration-300 ease-in-out hover:bg-[#ffe8cc]">
        <div className="flex items-center gap-5">
          <img
            src={friend.image}
            alt={friend.name}
            className="size-12 rounded-full"
          />
          <div className="flex flex-col text-lg">
            <h3 className="font-bold">{friend.name}</h3>
            {friend.balance > 0 ? (
              <p className="text-emerald-600">
                {friend.name} owes you ${friend.balance}
              </p>
            ) : friend.balance < 0 ? (
              <p className="text-red-500">
                You owe {friend.name} ${Math.abs(friend.balance)}
              </p>
            ) : (
              <p>{friend.name} and you are even</p>
            )}
          </div>
        </div>
        <Button onClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
      </div>
    </li>
  );
};

export default Friend;
