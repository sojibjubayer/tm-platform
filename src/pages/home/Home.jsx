import { Link } from 'react-router-dom';
import banner from '../../assets/todo3.jpg'

const Home = () => {
    return (
        <div className="relative">
            <div class=" inline-block">
                <div class="absolute top-0 left-0 w-full h-full bg-teal-100 opacity-50"></div>
                <img src={banner} alt="" class='' />
            </div>
            <Link to='dashboard'>
                <div className='flex justify-center '>
                    <button className="text-black font-bold  py-3 rounded-lg bg-teal-300 absolute -mt-[450px] md:w-[30%] text-2xl">Let's Explore</button>
                </div>
            </Link>

        </div>
    );
};

export default Home;