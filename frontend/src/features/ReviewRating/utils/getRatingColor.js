export default function getRatingColor(ratingValue) {
    return ratingValue === 0
        ? "#ffd43b"
        : ratingValue < 2
        ? "#e8590c"
        : ratingValue < 3
        ? "#e67700"
        : ratingValue < 3.5
        ? "#ffd43b"
        : ratingValue < 4
        ? "#a9e34b"
        : ratingValue < 4.5
        ? "#40c057"
        : "#2f9e44";
}
