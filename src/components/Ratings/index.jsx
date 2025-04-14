import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as emptyStar,
} from "@fortawesome/free-solid-svg-icons";

const StarRatings = ({ rating }) => {
  //console.log(rating);
  // Calculate the full, half, and empty stars based on the rating
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="text-center">
      {/* Render full stars */}
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <FontAwesomeIcon
            key={`full-${index}`}
            icon={faStar}
            className="text-yellow-300 w-6 h-6"
          />
        ))}

      {/* Render half star if applicable */}
      {hasHalfStar && (
        <FontAwesomeIcon
          icon={faStarHalfAlt}
          className="text-yellow-300 w-6 h-6"
        />
      )}

      {/* Render empty stars */}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <FontAwesomeIcon
            key={`empty-${index}`}
            icon={emptyStar}
            className="text-gray-300 w-6 h-6"
          />
        ))}
    </div>
  );
};

export default StarRatings;
