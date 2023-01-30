import React from 'react'
import styles from "./samsung.module.scss"
const Samsung = () => {
  return (
    <div className={styles.samsung}>
<div className="container">
    <div className="row">
        <div className="col-lg-7">

          <div className={styles.img}>
          <img  src="https://images.unsplash.com/photo-1573996987033-47fd3a4ca35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" alt="" />
          </div>
          
        </div>
        <div className="col-lg-5">
        <div className={styles.img}>
          <img  src="https://images.unsplash.com/photo-1674071393771-eaeaa3d4d1c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
          </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Samsung