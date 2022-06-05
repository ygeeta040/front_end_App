import img3 from '../images/logo.jpg';
import Products from '../components/Products';


const Home = ()=>{
    return (
        <>
        <div className="hero py-16">
            <div className="container  mx-auto flex items-center justify-between">
                <div className="w-1/2">
                    <h6 className="text-lg"><em>Are you hungry?</em></h6>
                    <h1 className="text-2xl md:text-6xl font-bold">Don't wait!</h1>
                    <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-orange-500 hover:bg-yellow-600">Order Now</button>
                </div>
                <div className="w-1/2">
                <img  src={img3} alt='pizza'/>
                </div>
            </div>
            
            
        </div>
        <div className='pb-5'>
            <Products/>
        </div>
        </>
    )
}

export default Home;