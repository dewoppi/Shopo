import React from 'react'
import styles from "./Navbar.module.scss"
import {BsChevronDown} from "react-icons/bs"
import {BsArrowClockwise} from "react-icons/bs"
import {FiHeart} from "react-icons/fi"
import {HiOutlineShoppingBag} from "react-icons/hi"
import {BsPerson} from "react-icons/bs"



const Navbar = () => {
  return (
  <div className={styles.navbar}>
     <div className="container ">
        <div className="row justify-content-center align-items-center">
          <div className="col-2">
            <img  src="https://shopo.quomodothemes.website/assets/images/logo.svg" alt="" />
          </div>
          <div className="col-6">
            <form className={styles.form}>
              <input type="text" placeholder='Search Product...' />
              <input type="text" placeholder='All categories '  /> <BsChevronDown/>
              <button>Search</button>
            </form>
          </div>
          <div className="col-4">
            <div className={styles.icons}>
            <BsArrowClockwise/>
            <FiHeart/>
            <HiOutlineShoppingBag/>
            <BsPerson/>
            </div>
            

          </div>
        </div>
      </div>
  </div>
     
   
  )
}

export default Navbar;