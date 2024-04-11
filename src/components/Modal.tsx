import bigImg from '../assets/images/image-product-1.jpg'
import thumb1 from '../assets/images/image-product-1-thumbnail.jpg'
import thumb2 from '../assets/images/image-product-2-thumbnail.jpg'
import thumb3 from '../assets/images/image-product-3-thumbnail.jpg'
import thumb4 from '../assets/images/image-product-4-thumbnail.jpg'
import '../sass/ImageGrid.scss'

import { motion, AnimatePresence } from 'framer-motion'


const Modal = ({ openModal, setOpenModal }) => {

    const closeModal = () => {
        setOpenModal(false)
    }

    return (
        <AnimatePresence>

            {
                openModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overlay"
                        onClick={closeModal}
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
                            <div className="close_modal">
                                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#FF7E1B" fillRule="evenodd" />
                                </svg>
                            </div>
                            <div className="bigImage">
                                <img src={bigImg} alt="bigImg" />
                            </div>
                            <div className="small_images">
                                <div ><img src={thumb1} alt="thumb1" /></div>
                                <div><img src={thumb2} alt="thumb2" /></div>
                                <div><img src={thumb3} alt="thumb3" /></div>
                                <div><img src={thumb4} alt="thumb4" /></div>
                            </div>
                        </div>
                    </motion.div>
                )}

        </AnimatePresence>


    )
}
export default Modal