import Link from 'next/link'
import Image from 'next/image'

    
    


const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                
                {/* <Image 
                    src= "/techsupport2.jpg" 
                    width={345}
                    height={150}
                    alt='tech support'/> */}
            </div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/learn"><a>Learn</a></Link>
                <Link href="/imaging"><a>Imaging</a></Link>
                <Link href="/Customers"><a>Customers</a></Link>
                
        </nav>
    );  
}

export default Navbar;