import { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";
import Button from "./Button";

const Rating = () => {
    const stars = Array.from({ length: 5 }, (_, i) => i + 1);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'];

    const handleSubmit = () => {
        if (rating > 0) {
            setSubmitted(true);
        }
    };
    const closeModal = () => {
        setSubmitted(false);
        setRating(0);
        setHover(0);

    };


    return (
        <div className="rating-container">
            <h2>Rate Your Experience</h2>
            <div className="stars">
                {
                    stars.map((star) => (
                        <Star
                            key={star}
                            star={star}
                            rating={rating}
                            hover={hover}
                            clickStar={setRating}
                            hoverStar={setHover}
                            leaveStar={() => setHover(0)}

                        />
                    ))
                }
            </div>
            {
                rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>
            }
            <Button className="submit-btn" disabled={rating === 0} submitRating={handleSubmit}>Submit</Button>
            <Modal rating={rating} isOpen={submitted} onClose={closeModal} />

        </div>
    );
}
export default Rating;