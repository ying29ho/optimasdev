import Link from "next/link";
import {motion} from 'framer-motion'
export const NavLinks =(props)=>{
    const animateFrom ={opacity: 0, y:-40};
    const animateTo = {opacity:1, y:0}
    return(
    <div className="">
        <ul>
            <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.10}}
            onClick={()=> props.isMobile && props.closeMobileMenu()}>
                <Link className="" href="/about">
                    <a className="">About Us</a>
                </Link>
            </motion.li>
            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.20}}
            onClick={()=> props.isMobile && props.closeMobileMenu()}>
                <Link className="" href="/contact">
                    <a className="">Contact</a>
                </Link>
            </motion.li>
        </ul>
    </div>
    )
  }