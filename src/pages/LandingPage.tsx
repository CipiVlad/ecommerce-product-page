import { useState } from 'react'
import ImageGrid from '../components/ImageGrid'
import ProductDescription from '../components/ProductDescription'
import '../sass/LandingPage.scss'
import Modal from '../components/Modal'
const LandingPage = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)

    return (
        <div>
            <div className="landing_page_flex_container">
                <ImageGrid openModal={openModal} setOpenModal={setOpenModal} />
                <ProductDescription />
            </div>
            {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}
        </div>
    )
}
export default LandingPage