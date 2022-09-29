import React from 'react';
import './footer.css';

const FooterPart = () => {
    return (
        <div className='footer-faq'>
            <div className='faq-1'>
           <h3> How does react work ?</h3>
           <p> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
          </div>

          <div className='faq-1'>
           <h3> Different of Props and State ?</h3>
            <p> 
                Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. 
            </p>
          </div>

          <div className='faq-1'>
           <h3> How does react work ?</h3>
           <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, ullam. Lorem ipsum     dolor sit amet consectetur adipisicing elit. Alias, quisquam.</p>
          </div>
    </div>
    );
};

export default FooterPart;