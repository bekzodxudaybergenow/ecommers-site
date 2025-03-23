import Logo from '../../assets/logo.svg';

function Footer() {
  return (
    <div className="py-5 border-t-1 border-[rgba(0,0,0,0.2)]">
        <div className="container flex justify-between flex-wrap gap-y-6">
            <img src={Logo} alt="Logo" />
            <nav className='flex align-center flex-wrap gap-4'>
                <a className='underline hover:text-[#873EFF] transition duration-[.3s]' href="">Terms and conditions</a>
                <a className='underline hover:text-[#873EFF] transition duration-[.3s]' href="">Privacy policy</a>
                <a className='underline hover:text-[#873EFF] transition duration-[.3s]' href="">Privacy notice for California users</a>
            </nav>
        </div>
    </div>
  )
}

export default Footer