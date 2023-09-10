import { Link } from "react-router-dom";
import { useState } from "react";


const  Navbar = ({handleDarkMode, handleLightMode, handleOpen}) => {
    const [mouseHover, setMouseHover] = useState('');
    const [darkClick , setDarkClick]  = useState('false');
    
     
    function handleHoverOn(e){
        e.preventDefault();
         setMouseHover(true);
 
         setTimeout(() => {
             setMouseHover(false);
           }, 1000);
     }
 
     function handleHoverOff(r){
         r.preventDefault();
          setMouseHover(false);
      }
     
    
     function handleDarkMode1(){
        setDarkClick(!darkClick);
    }
    function handleLightMode1(e){
        setDarkClick(!darkClick);
    }

    return (  
        <div>
    <nav className="navbar">

        <div className={`flex md:justify-center justify-between h-14 w-full bg backdrop-blur-sm ${!darkClick ? ' bg-gradient-to-r from-green-700 to-teal-700 brightness-100 ': 'bg-gradient-to-r from-cyan-300 to-fuchsia-500 brightness-150'}`}>

         <h1 className={`py-2.5 md:py-1 md:mr-28 md:ml-0 ml-7 text-lg md:text-4xl font-light first-letter:text-xl  md:first-letter:text-4xl first-letter:font-extrabold ${!darkClick && 'text-white'}`}>React Mini Project</h1>
         
         <div className="flex mt-3 md:ml-10">
         <svg 
            onMouseEnter={handleHoverOn}
            onMouseLeave={handleHoverOff} 
            onClick={() => { handleDarkMode(); handleDarkMode1(); }}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
            className={`w-7 h-7   text-gray-700 ml-2 end-0 cursor-pointer transition-transform ${mouseHover && 'animate-spin'} ${!darkClick && 'hidden'}`}>       <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
           </svg>

           <svg 
            onMouseEnter={handleHoverOn}
            onMouseLeave={handleHoverOff} 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
            onClick={() => { handleLightMode(); handleLightMode1(); }}
            className={`w-9 h-8 ml-2 cursor-pointer transition-transform ${mouseHover && 'animate-spin'} ${!darkClick ? 'text-white' : 'hidden'}`}>       <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
           </svg>

           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
           className={`w-6 h-6 md:hidden flex ml-2 mr-4 mt-0.5 ${!darkClick && 'text-white'}`}
           onClick={handleOpen}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
           </svg> 


         <Link to="/" className={`md:text-xl ml-3 md:flex hidden bg-slate-400 h-8 px-3 text-md bg-opacity-50 hover:text-red-700 text-slate-800   hover:bg-cyan-500 rounded-xl hover:bg-opacity-40 ${!darkClick && 'text-white'}`}>FormField</Link>
        
         <Link to="/todo" className={`md:text-xl md:mr-0 mr-2 ml-3 md:flex hidden bg-slate-400 h-8 px-3 text-md bg-opacity-50 hover:text-red-700 text-slate-800   hover:bg-cyan-500 rounded-xl hover:bg-opacity-40 ${!darkClick && 'text-white'}`}>TodoApp</Link>
          
          
         
        </div>
        </div>
            
        
    </nav>

    </div>

    );
        
}
 
export default Navbar;