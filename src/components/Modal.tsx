import '../sass/ImageGrid.scss'
import { bigImages, thumbnails } from '../models/Images.model'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'


const Modal = ({ openModal, setOpenModal }: { openModal: boolean, setOpenModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [activeThumbIndex, setActiveThumbIndex] = useState<number | null>(null);
    const [fill_X, setFill_X] = useState("");
    const [fill_right_arrow, setFill_right_arrwo] = useState("");
    const [fill_left_arrow, setFill_left_arrow] = useState("");

    const handleNextClick = () => {
        if (activeThumbIndex !== null && activeThumbIndex < thumbnails.length - 1) {
            setActiveThumbIndex(activeThumbIndex + 1);
        }
    };

    const handlePrevClick = () => {
        if (activeThumbIndex !== null && activeThumbIndex > 0) {
            setActiveThumbIndex(activeThumbIndex - 1);
        }
    };

    const handleThumbnailClick = (index: number) => {
        setActiveThumbIndex(index);
    };

    useEffect(() => {
        //render first big image
        setActiveThumbIndex(0);
    }, []);

    const closeModal = () => {
        setOpenModal(false);
    };

    return (
        <AnimatePresence>
            {openModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overlay"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0,0,0,0.75)",
                        display: "grid"
                    }}
                >

                    <div className="image_grid modal" style={{
                        position: "absolute",
                        top: "15vh",
                        left: "35vw",
                        display: "grid"
                    }}>

                        <div className="close_modal" onClick={closeModal}>
                            <svg width="30" height="20" xmlns="http://www.w3.org/2000/svg"
                                onMouseEnter={() => setFill_X("#fff")}
                                onMouseLeave={() => setFill_X("")}
                            ><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                                fill={fill_X ? "hsl(26, 100%, 55%)" : "#fff"} fillRule="evenodd"
                                style={{ cursor: "pointer" }}

                                /></svg>
                        </div>
                        <div className="bigImage">
                            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"
                                className="arrow_prev"
                                style={{ width: "18px", height: "18px", padding: "20px", position: "absolute", left: "-20px", top: "40%" }}
                                onClick={handlePrevClick}
                                onMouseEnter={() => setFill_left_arrow("#1D2026")}
                                onMouseLeave={() => setFill_left_arrow("")}
                            >
                                <path d="M11 1 3 9l8 8" stroke={fill_left_arrow ? "hsl(26, 100%, 55%)" : "#1D2026"} stroke-width="2" fill="none" fillRule="evenodd"

                                />
                            </svg>

                            {activeThumbIndex !== null && (
                                <img
                                    src={bigImages[activeThumbIndex].src}
                                    alt={bigImages[activeThumbIndex].alt}
                                />
                            )}
                            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"
                                className="arrow_next"
                                style={{ width: "18px", height: "18px", padding: "20px", position: "absolute", right: "-20px", top: "40%" }}
                                onClick={handleNextClick}
                                onMouseEnter={() => setFill_right_arrwo("#1D2026")}
                                onMouseLeave={() => setFill_right_arrwo("")}
                            ><path d="m2 1 8 8-8 8" stroke={fill_right_arrow ? "hsl(26, 100%, 55%)" : "#1D2026"} stroke-width="2" fill="none" fillRule="evenodd"

                                /></svg>
                        </div>
                        <div className="small_images_modal">
                            <div>
                                {thumbnails.map((image, index) => (
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        key={index}
                                        className={index === activeThumbIndex ? 'thumb_active' : ''}
                                        onClick={() => handleThumbnailClick(index)}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </motion.div>
            )}

        </AnimatePresence>
    );
};

export default Modal;