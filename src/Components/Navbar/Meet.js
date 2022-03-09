import React from 'react'
import './Meet.css'

function Meet() {

         const readMoreBtn = document.querySelector(".read-more-btn");
         const text = document.querySelector(".text");
        const handleReadMore = () =>{
         readMoreBtn.addEventListener("click", (event) => {
        text.classList.toggle("show-more");
        if (readMoreBtn.innerText === "Read More") {
        readMoreBtn.innerText = "Read Less";
         } else {
           readMoreBtn.innerText = "Read More";
          }
        });
        }
  return (
      <div>
    <div className='header'><h1 >Meet the team</h1></div>
    <div className='grid2'>
        <div className='col_1'>
            <div className='profil'>
                <img className='imag' src='https://thumbs.dreamstime.com/b/person-icon-black-background-person-solid-vector-eps-90447225.jpg'width={90} height={90} />
            </div>
                <h1 className='firstheading'>Springs</h1>
                <h2 className='secondheading'>Founder</h2>
                <p className='text'>Spriggs will be fore-fronting the development of the project, this includes but is not limited to managing smart contracts, ensuring all development runs smoothly. From maintaining the website to prov<span className="dots"> ...</span> <span className="moreText">iding new and unique utility for our community, Spriggs will be the lead dev within these en-devour.</span></p>
                <button onClick={handleReadMore} className="read-more-btn">Read More</button>
        </div>
        <div className='col_2'>
        <div className='profil'>
                <img className='imag' src='https://thumbs.dreamstime.com/b/person-icon-black-background-person-solid-vector-eps-90447225.jpg'width={90} height={90} />
            </div>
            
                <h1 className='firstheading'>Springs</h1>
                <h2 className='secondheading'>Founder</h2>
                <p className='text'>Spriggs will be fore-fronting the development of the project, this includes but is not limited to managing smart contracts, ensuring all development runs smoothly. From maintaining the website to prov<span className="dots"> ...</span> <span className="moreText">iding new and unique utility for our community, Spriggs will be the lead dev within these en-devour.</span></p>
                <button onClick={handleReadMore} className="read-more-btn">Read More</button>
              </div>
        <div className='col_3'>
        <div className='profil'>
                <img className='imag' src='https://thumbs.dreamstime.com/b/person-icon-black-background-person-solid-vector-eps-90447225.jpg'width={90} height={90} />
            </div>
            
                <h1 className='firstheading'>Springs</h1>
                <h2 className='secondheading'>Founder</h2>
                <p className='prg'>Spriggs will be fore-fronting the development of the project, this includes but is not limited to managing smart contracts, ensuring all development runs smoothly. From maintaining the website to prov...</p>
        </div>
        <div className='col_3'>
        <div className='profil'>
                <img className='imag' src='https://thumbs.dreamstime.com/b/person-icon-black-background-person-solid-vector-eps-90447225.jpg'width={90} height={90} />
            </div>
            
                <h1 className='firstheading'>Springs</h1>
                <h2 className='secondheading'>Founder</h2>
                <p className='prg'>Spriggs will be fore-fronting the development of the project, this includes but is not limited to managing smart contracts, ensuring all development runs smoothly. From maintaining the website to prov...</p>   
        </div>


    </div>
    
    </div>
  )
};
export default Meet;
