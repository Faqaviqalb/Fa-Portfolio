import React from 'react'
import photo1 from "../assets/7450187-removebg-preview.png"

function Hero() {
  return (
    <div className='Hero-section'>
        <div className="container-fluid">
            <div className="left-content">
                <h1>
                    <div mode="out-in" class="content-line">
                        <div class="content-word color-primary">
                            <span class="color color-1">H</span>
                            <span class="color color-2">e</span>
                            <span class="color color-3">l</span>
                            <span class="color color-4">l</span>
                            <span class="color color-5">o</span>
                            <span class="color color-1">,</span>
                        </div>
                        <div class="content-word color-primary">
                            <span class="color color-3">I</span>
                            <span class="color color-4">'</span>
                            <span class="color color-5">m</span>
                        </div>
                        <div class="content-word color-primary">
                            <span class="color color-2">F</span>
                            <span class="color color-3">a</span>
                            <span class="color color-4">r</span>
                            <span class="color color-5">n</span>
                            <span class="color color-1">a</span>
                            <span class="color color-2">z</span>
                            <span class="color color-3">!</span>
                        </div>
                    </div>
                    <div mode="out-in" class="content-line">
                        <div class="content-word color-secondary">
                            <span class="color color-1">A</span>
                        </div>
                        {/* <div class="content-word color-secondary">
                            <span class="color color-2">j</span>
                            <span class="color color-3">u</span>
                            <span class="color color-4">n</span>
                            <span class="color color-5">i</span>
                            <span class="color color-1">o</span>
                            <span class="color color-2">r</span>
                        </div> */}
                        <div class="content-word color-secondary">
                            <span class="color color-2">f</span>
                            <span class="color color-3">r</span>
                            <span class="color color-4">o</span>
                            <span class="color color-5">n</span>
                            <span class="color color-1">t</span>
                            <span class="color color-2">-</span>
                            <span class="color color-3">e</span>
                            <span class="color color-4">n</span>
                            <span class="color color-5">d</span>
                        </div>
                        <div class="content-word color-secondary">
                            <span class="color color-1">d</span>
                            <span class="color color-2">e</span>
                            <span class="color color-3">v</span>
                            <span class="color color-4">e</span>
                            <span class="color color-5">l</span>
                            <span class="color color-1">o</span>
                            <span class="color color-2">p</span>
                            <span class="color color-3">e</span>
                            <span class="color color-4">r</span>
                        </div>
                        <div class="content-word color-secondary">
                            <span class="color color-2">w</span>
                            <span class="color color-3">i</span>
                            <span class="color color-4">l</span>
                            <span class="color color-5">l</span>
                            <span class="color color-1">i</span>
                            <span class="color color-2">n</span>
                            <span class="color color-3">g</span>
                        </div>
                        <div class="content-word color-secondary">
                            <span class="color color-2">t</span>
                            <span class="color color-3">o</span>
                        </div>
                        <div class="content-word color-secondary">
                            <span class="color color-2">m</span>
                            <span class="color color-3">a</span>
                            <span class="color color-5">k</span>
                            <span class="color color-1">e</span>
                        </div>
                        <div class="content-word color-secondary">
                            <span class="color color-2">w</span>
                            <span class="color color-3">e</span>
                            <span class="color color-4">b</span>
                            <span class="color color-5">s</span>
                            <span class="color color-4">i</span>
                            <span class="color color-1">t</span>
                            <span class="color color-2">e</span>
                            <span class="color color-3">s</span>
                        </div>
                        <div class="content-word color-secondary">
                            <span class="color color-5">s</span>
                            <span class="color color-1">h</span>
                            <span class="color color-2">i</span>
                            <span class="color color-3">n</span>
                            <span class="color color-1">e</span>
                        </div>
                        <div class="content-word color-secondary">
                            <span class="color color-3">b</span>
                            <span class="color color-4">r</span>
                            <span class="color color-5">i</span>
                            <span class="color color-1">g</span>
                            <span class="color color-2">h</span>
                            <span class="color color-3">t</span>
                            <span class="color color-5">e</span>
                            <span class="color color-4">r</span>
                        </div>
                        <div class="content-word color-secondary">
                            <span class="color color-3">t</span>
                            <span class="color color-4">h</span>
                            <span class="color color-5">a</span>
                            <span class="color color-1">n</span>
                        </div>
                        <div class="content-word color-secondary">
                            <span class="color color-5">a</span>
                        </div>
                        <div class="content-word color-secondary">
                            <span class="color color-2">s</span>
                            <span class="color color-3">u</span>
                            <span class="color color-4">p</span>
                            <span class="color color-5">e</span>
                            <span class="color color-1">r</span>
                            <span class="color color-2">n</span>
                            <span class="color color-2">o</span>
                            <span class="color color-3">v</span>
                            <span class="color color-4">a</span>
                        </div>
                    </div>
                </h1>
            </div>
            <div className="right-content">
                <div className='img-container'>
                    <img src={photo1} />
                </div>
            </div>
        </div>
        <div className="custom-shape-divider-bottom-1706782977">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
      
    </div>
  )
}

export default Hero
