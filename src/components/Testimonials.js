import '../styles/testimonials.css'
import img1 from '../assets/images/Person 1.png'
import img2 from '../assets/images/image 1.png'
import img3 from '../assets/images/image 2.png'
import img4 from '../assets/images/image 3.png'
import stars from '../assets/icons/Rating.svg'

const data = [
    {   
        name: "Sam Smith",
        photo: img1,
        review: "Very tasty food"
    },
    {
        name: "Mikaela Sanchez",
        photo: img2,
        review: "Lovely, my favorite."
    },
    {
        name: "Edward Moss",
        photo: img3,
        review: "Delicious food!"
    },
    {
        name: "Rachel Hatpy",
        photo: img4,
        review: "The very best."
    }
]

const Review = ({index}) => {
    return (
        <>
        <div className={`review box${index + 1}`}>
            <h3>{data[index].name}</h3>
            <div id="photo">
                <img src={data[index].photo} alt='review'/>
                <div>{data[index].review}</div>
            </div>
            <img src={stars} alt='stars' width='70%'/>
        </div>
        </>
    )
}

const Testimonials = () => {
    return (
        <div className='testimonials-area'>
            <div className="testimonials align">
                <h1>Testimonials</h1>
                <Review index={0} />
                <Review index={1} />
                <Review index={2} />
                <Review index={3} />
            </div>
        </div>
    )
}
export default Testimonials