import '../sass/ImageGrid.scss'
import { bigImages, thumbnails } from '../models/Images.model'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import close from '../assets/images/icon-close.svg'
import next from '../assets/images/icon-next.svg'
import prev from '../assets/images/icon-previous.svg'

const Modal = ({ openModal, setOpenModal }: { openModal: boolean, setOpenModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [activeThumbIndex, setActiveThumbIndex] = useState<number | null>(null);

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

                        <div className="close_modal hi" onClick={closeModal}>
                            <img src={close} alt="close" width={20} style={{ cursor: "pointer" }} />
                        </div>
                        <div className="bigImage">
                            <img src={prev} alt="prev" onClick={handlePrevClick} className='arrow_prev'
                                style={{ width: "18px", height: "18px", padding: "20px", position: "absolute", left: "-20px", top: "40%" }} />
                            {activeThumbIndex !== null && (
                                <img
                                    src={bigImages[activeThumbIndex].src}
                                    alt={bigImages[activeThumbIndex].alt}
                                />
                            )}
                            <img src={next} alt="next" onClick={handleNextClick} className='arrow_next'
                                style={{ width: "18px", height: "18px", padding: "20px", position: "absolute", right: "-20px", top: "40%" }} />
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