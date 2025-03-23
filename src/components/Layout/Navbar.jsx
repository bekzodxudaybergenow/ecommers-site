import { useContext, useState } from 'react';
import Logo from '../../assets/logo.svg';
import { CardList } from '../../context/CardListProvider';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Navbar() {
  const {cardList} = useContext(CardList)

  return (
    <div className="Navbar py-5 border-b-1 border-[rgba(0,0,0,0.2)]">
        <div className="flex justify-between container">
          <Link to='/'>
            <img src={Logo} alt="Logo" />
          </Link>
          <div className='flex items-center gap-x-4'>
            <nav className="hidden md:flex gap-x-4 items-center">
                <Link to='/' className="hover:text-[#873EFF] font-medium transition duration-[.3s]" href="">Home</Link>
                <Link className="hover:text-[#873EFF] font-medium transition duration-[.3s]" href="">Service</Link>
                <Link className="hover:text-[#873EFF] font-medium transition duration-[.3s]" href="">About</Link>
                <Link className="hover:text-[#873EFF] font-medium transition duration-[.3s]" href="">Contact</Link>
            </nav>
                <Link to='carts'>
                  <button className='flex hover:text-[#873EFF] transition duration-[.3s] cursor-pointer'>
                    <FaCartShopping className='' />
                    <sup className='mt-1 ml-1 font-medium'>{cardList.length}</sup>
                  </button>
                </Link>
                <button className='bg-[#873EFF] hover:bg-[#6e3ac9] active:bg-[#873EFF] duration-[.3s] cursor-pointer block w-[80px] rounded-[5px] text-white py-1.5 mt-auto outline-none'>Category</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar