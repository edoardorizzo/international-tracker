import React from "react";

export default function InputPlayerDelete({ input, playerName, onRemove, onChange, index }) {
    return (
        <div className="player_input flex justify-between align-center gap-3 my-4">
            <div className="input_user_container">
                <img className="h-full" src={input} alt={input} />
            </div>
            <input
                className="w-full rounded-lg p-2"
                placeholder="insert player name here..."
                type="text"
                value={playerName}
                onChange={onChange}
                required
            />
            {
                index > 1 ?
                    <button onClick={onRemove}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_49_9)">
                                <path d="M20 6C20.2549 6.00028 20.5 6.09788 20.6854 6.27285C20.8707 6.44782 20.9822 6.68695 20.9972 6.94139C21.0121 7.19584 20.9293 7.44638 20.7657 7.64183C20.6021 7.83729 20.3701 7.9629 20.117 7.993L20 8H19.919L19 19C19 19.7652 18.7077 20.5015 18.1827 21.0583C17.6577 21.615 16.9399 21.9501 16.176 21.995L16 22H7.99999C6.40199 22 5.09599 20.751 5.00799 19.25L5.00299 19.083L4.07999 8H3.99999C3.74511 7.99972 3.49996 7.90212 3.31462 7.72715C3.12929 7.55218 3.01776 7.31305 3.00282 7.05861C2.98788 6.80416 3.07067 6.55362 3.23426 6.35817C3.39785 6.16271 3.62989 6.0371 3.88299 6.007L3.99999 6H20ZM14 2C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4C15.9997 4.25488 15.9021 4.50003 15.7271 4.68537C15.5522 4.8707 15.313 4.98223 15.0586 4.99717C14.8042 5.01211 14.5536 4.92933 14.3582 4.76574C14.1627 4.60214 14.0371 4.3701 14.007 4.117L14 4H9.99999L9.99299 4.117C9.96289 4.3701 9.83728 4.60214 9.64182 4.76574C9.44637 4.92933 9.19583 5.01211 8.94139 4.99717C8.68694 4.98223 8.44781 4.8707 8.27284 4.68537C8.09787 4.50003 8.00027 4.25488 7.99999 4C7.99983 3.49542 8.1904 3.00943 8.53349 2.63945C8.87658 2.26947 9.34684 2.04284 9.84999 2.005L9.99999 2H14Z" fill="url(#paint0_linear_49_9)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_49_9" x1="12" y1="2" x2="12" y2="28.25" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#9AE19D" />
                                    <stop offset="1" stop-color="#537A5A" />
                                </linearGradient>
                                <clipPath id="clip0_49_9">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button> : null
            }
        </div>
    );
}
