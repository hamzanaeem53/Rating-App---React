const Button = ({ children, className, submitRating, disabled }) => {
    return (
        <button className={className} onClick={submitRating} disabled={disabled}>{children}</button>
    );
}

export default Button;