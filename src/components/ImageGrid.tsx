import bigImg from '../assets/images/image-product-1.jpg'
import thumb1 from '../assets/images/image-product-1-thumbnail.jpg'
import thumb2 from '../assets/images/image-product-2-thumbnail.jpg'
import thumb3 from '../assets/images/image-product-3-thumbnail.jpg'
import thumb4 from '../assets/images/image-product-4-thumbnail.jpg'
import '../sass/ImageGrid.scss'
const ImageGrid = () => {
    return (
        <div className="image_grid">
            <div className="bigImage">
                <img src={bigImg} alt="big image of sneaker" />
            </div>
            <div className="small_images">
                <div><img src={thumb1} alt="" /></div>
                <div><img src={thumb2} alt="" /></div>
                <div><img src={thumb3} alt="" /></div>
                <div><img src={thumb4} alt="" /></div>
            </div>
        </div>
    )
}
export default ImageGrid