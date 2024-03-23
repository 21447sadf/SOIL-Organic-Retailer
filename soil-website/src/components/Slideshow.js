import React from "react";

// Array holds images for the slideshow to display
const items = ["Corn.jpg", "MuesliBar.jpg", "Pasta.jpg", "Spinach.jpg", "Yoghurt.jpg"];

//Time delay
const delay = 5000;

//Slideshow Tutorial: https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react
function Slideshow () {


    // Hook to keep track of slide displays
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);


    // Clears timeOut each time the slide changes
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
    }


    // Hook to change slide every 5s
    React.useEffect(() => {
        resetTimeout();
        // setTimeout sets a time delay between each slide
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === items.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
        resetTimeout();
        };
      }, [index]);


    //STYLING
    // Slideshow container
    const slideShowStyle = {
        margin: "0 auto",
        overflow: "hidden",
        width: "100%"
    };

    // Slideshow slider container
    const sliderStyle = {
        whiteSpace: "nowrap",
        transform: `translate3d(${-index * 100}%, 0, 0)`,
        transition: "ease 1000ms"
    };

    // Slides
    const slideStyle = {
        display: "inline-block",
        height: "1000px",
        width: "100%",
        borderRadius: "40px"
    };

    // Images 
    const imageStyle = {
        width: "100%",
        height: "1000px",
        fit: "cover"
    };

    //Buttons
    const slideshowDots = {
        textAlign: "center"
    };

    //Inactive slide dots
    const inactiveDot = {
        display: "inline-block",
        height: "20px",
        width: "20px",
        borderRadius: "50%",
        cursor: "pointer",
        margin: "15px 7px 0px",
        backgroundColor: "#c4c4c4"
    };

    //Active slide dots
    const activeDot = {
        display: "inline-block",
        height: "20px",
        width: "20px",
        borderRadius: "50%",
        cursor: "pointer",
        margin: "15px 7px 0px",
        backgroundColor: "#797777"
    };



    return (
       //Slideshow container
      <div className="slideshow" style={slideShowStyle}>
        <div className="slideshowSlider" style={sliderStyle}>
            {items.map((imageUrl, index) => (
                <div className="slide" key={index} style={slideStyle}>
                    <img src={imageUrl} alt="Slide" style={imageStyle}/>
                </div>
            ))}
        </div>
        
        {/* Arrows to control slideshow */}
        <a className="prev"
                  onClick={() => {
                    setIndex(index-1 === 0 ? 4 : index-1);
                }}>❮
                </a>
        <a className="next"
                  onClick={() => {
                    setIndex(index+1 === items.length ? 0 : index+1);
                }}>❯
                </a>

        {/* Slideshow buttons */}
        <div className="slideshowDots" style={slideshowDots}>
            {items.map((_, idx) => (
            <div 
            key={idx} 
            className="slideshowDot" 
            style = {index === idx ? activeDot : inactiveDot}
            onClick={() => {
                setIndex(idx);
            }}
            >
            </div>
            ))}
            </div>
        </div>
    );
  }

  export default Slideshow;