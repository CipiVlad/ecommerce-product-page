
import '../sass/ImageGrid.scss'

import { bigImages, thumbnails } from '../models/Images.model'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import close from '../assets/images/icon-close.svg'

const Modal = ({ openModal, setOpenModal }: { openModal: boolean, setOpenModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [activeThumbIndex, setActiveThumbIndex] = useState<number | null>(null);

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
                            <img src={close} alt="close" width={20} style={{ cursor: "pointer" }} />
                        </div>
                        <div className="bigImage">
                            {activeThumbIndex !== null && (
                                <img
                                    src={bigImages[activeThumbIndex].src}
                                    alt={bigImages[activeThumbIndex].alt}
                                />
                            )}
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