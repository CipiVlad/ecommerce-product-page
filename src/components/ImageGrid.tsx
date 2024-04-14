import bigImg from '../assets/images/image-product-1.jpg'
import thumb1 from '../assets/images/image-product-1-thumbnail.jpg'
import thumb2 from '../assets/images/image-product-2-thumbnail.jpg'
import thumb3 from '../assets/images/image-product-3-thumbnail.jpg'
import thumb4 from '../assets/images/image-product-4-thumbnail.jpg'
import '../sass/ImageGrid.scss'
const ImageGrid = ({ openModal, setOpenModal }: { openModal: boolean, setOpenModal: React.Dispatch<React.SetStateAction<boolean>> }) => {



    return (
        <>
            <div className="image_grid onMobileImageGrid">
                <div className="bigImage" onClick={() => setOpenModal(true)}>
                    <img src={bigImg} alt="big image of sneaker" />
                </div>
                <div className="small_images" onClick={() => setOpenModal(true)}>
                    <div ><img src={thumb1} alt="thumb1" /></div>
                    <div><img src={thumb2} alt="thumb2" /></div>
                    <div><img src={thumb3} alt="thumb3" /></div>
                    <div><img src={thumb4} alt="thumb4" /></div>
                </div>
            </div>
        </>

    )
}
export default ImageGrid