import React from "react";

function Gallery(){
    return(
        <div className="gallery">
            <h2>גלריה</h2>
            <div className="img-container">
                {/* <img className='img-T' src="https://i.pinimg.com/564x/e7/ae/29/e7ae29301c4c66b223c354650c3a6863.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/c3/98/c5/c398c5423c70cbdbc50c70797eac84d8.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/15/eb/0b/15eb0b19f5ef7bf84eb4d155dc53bff7.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/04/36/57/043657b80f9ba853c55e6f60624ca72b.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                <img className='img-T' src="https://i.pinimg.com/564x/c8/6c/2e/c86c2e7efa77eb5cd182509372476b06.jpg" alt="*t" /> */}
                
                <div className="photo-gallery">
                    <div className="column">
                       <div className="photo">
                           <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                       </div>
                       <div className="photo">
                           <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                       </div>
                       <div className="photo">
                           <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                       </div>
                    </div>
                    <div className="column">
                       <div className="photo">
                           <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                       </div>
                       <div className="photo">
                           <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                       </div>
                       <div className="photo">
                           <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                       </div>
                    </div>
                    <div className="column">
                       <div className="photo">
                           <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                       </div>
                       <div className="photo">
                           <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                       </div>
                       <div className="photo">
                           <img className='img-T' src="https://i.pinimg.com/564x/97/0c/e9/970ce994277bac1b114668e88c4eeb02.jpg" alt="*t" />
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;