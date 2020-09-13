import React from "react"

export const CartIcon = (color, filled) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g>
        {filled ? (
          <path
            fill={color}
            d="M9 24a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm11 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM4.18 3H1a1 1 0 1 1 0-2h4a1 1 0 0 1 .98.804L6.82 6H23a1 1 0 0 1 .982 1.187l-1.601 8.398A2.995 2.995 0 0 1 19.4 18H9.7a3 3 0 0 1-3-2.414L5.028 7.24a.995.995 0 0 1-.017-.084L4.18 3zm3.04 5l1.44 7.195c.095.475.517.814 1.02.805h9.74c.483.01.905-.33.998-.797L21.79 8H7.221z"
          />
        ) : null}
      </g>
    </svg>
  )
}
