import React from "react";

export default function Input({ value, onChange }) {
    return (
        <input
            className="w-full rounded-lg p-2 my-4"
            placeholder="insert tournament name..."
            type="text"
            value={value}
            onChange={onChange}
            required
        />
    );
}
