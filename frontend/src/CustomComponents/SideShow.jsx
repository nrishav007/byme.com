import { Image } from "@chakra-ui/image";
import { Box, Container } from "@chakra-ui/layout";
import { useEffect, useRef, useState } from "react";


    const delay = 3500;
    
    export default function Slideshow({data,cwidthBase,cwidthMd,cwidthLg,ImageWBase,ImageWMd,ImageWLg}) {
      const [index, setIndex] = useState(0);
      const timeoutRef = useRef(null);
    
      function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    
      useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === data.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
      }, [index]);
    
      return (
        <>
            <Container className="slideshow" maxW={{base : `${cwidthBase}`, md : `${cwidthMd}`, lg : `${cwidthLg}`}}>
            <div className="slideshowSlider"  style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
                {data.map((elem, index) => (
                <Box className="slide" key={elem.id}>
                   <Image shadow='lg' m='auto' src={elem.images} w={{base : `${ImageWBase}`, md :`${ImageWMd}`, lg : `${ImageWLg}`}}/>
                </Box>
                ))}
            </div>
            </Container>
        </>
      );
    }
    
 