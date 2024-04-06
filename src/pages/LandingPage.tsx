import ImageGrid from '../components/ImageGrid'
import ProductDescription from '../components/ProductDescription'
import '../sass/LandingPage.scss'
const LandingPage = () => {
    return (
        <div>
            <div className="landing_page_flex_container">
                <ImageGrid />
                <ProductDescription />
            </div>
        </div>
    )
}
export default LandingPage