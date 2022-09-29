import React from 'react';
import './footer.css';

const FooterPart = () => {
    return (
        <div className='footer-faq'>
     
         <div className='faq-1'>
           <h3> How does react work ?</h3>
           <p className='faq'> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
          </div>

          <div className='faq-1'>
           <h3> Different of Props and State ?</h3>
            <p className='faq'> 
                Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. 
            </p>
          </div>

          <div className='faq-1'>
           <h3> useEffect </h3>
          <p className='faq'> Why is useEffect called inside a component? Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don't need a special API to read it — it's already in the function scope.</p>
          </div>
         
      
    </div>
    );
};

export default FooterPart;