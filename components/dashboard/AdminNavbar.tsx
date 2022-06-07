import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import NavbarInput from '@material-tailwind/react/NavbarInput';
import Image from '@material-tailwind/react/Image';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import ProfilePicture from '../assets/img/team-1-800x800.jpg';
import Link from 'next/link';
import { useRouter } from "next/router";
import cookieCutter from "cookie-cutter";

const AdminNavbar = ({ showSidebar, setShowSidebar, location }):JSX.Element => {
    const router = useRouter();
    const logout = () =>{
        // delete cookie 
        console.log("Delete Cookie");
        cookieCutter.set('token','',{expires: new Date(0)})
        cookieCutter.set('userId','',{expires: new Date(0)})
        router.push("/");
    }
    return (
        <nav className="bg-green-500 md:ml-64 py-6 px-3">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                <div className="md:hidden">
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        iconOnly
                        rounded
                        ripple="light"
                        onClick={() => setShowSidebar('left-0')}
                    >
                        <h3 className='text-xl text-white'> Menu </h3>
                    </Button>
                    <div
                        className={`absolute top-2 md:hidden ${
                            showSidebar === 'left-0' ? 'left-64' : '-left-64'
                        } z-50 transition-all duration-300`}
                    >
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            iconOnly
                            rounded
                            ripple="light"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                        <h3 className='text-xl text-white'> Close </h3>

                        </Button>
                    </div>
                </div>

                <div className="flex justify-between items-center w-full">
                    <h4 className="uppercase text-white text-2xl tracking-wider mt-1">
                        {location}
                    </h4>
                        
                    <div className="flex justify-end items-center w-full">
                            <h4 className='text-white text-md tracking-wider mt-1'>Welcome, User</h4>
                            <h2 className='text-white text-xl tracking-wider mt-1 mx-2'>|</h2>
                            <Link href='/' >
                            <a className='text-white text-md tracking-wider mt-1'>Home</a>
                            </Link>
                            <h2 className='text-white text-xl tracking-wider mt-1 mx-2'>|</h2>
                            <a onClick={logout} className='text-white text-md cursor-pointer tracking-wider mt-1'>Logout</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default AdminNavbar;