import React from "react";
import Header from "./Header.jsx";
import Button from "./ui/button.jsx"

export default function Home() { 

    return (
        <> 
            <Header />
            <section className = "header"> 
            <h1 className = "heading"> Welcome to SolPlanner </h1>
            <p><h2> The app to help you manage your solar panel appointments </h2>
            <br><h3> brought to you by Solar Energy Solutions</h3></br>  
            </p>
            </section> 
            <section className = "buttons-container">
                <Button>Admin</Button> <Button>Customer</Button>
                </section>
            <section className = "testimonial"> 
                <h1 className = "heading">Hear about what we do from some of our users:</h1>
                <h2> Witty Subtitle goes here here</h2>           
                <div className = "testimonials-container">
                <div className = "testimonial-container">
                    <article>
                        <h3 className = "testimonial-quote">Quote</h3>
                        <div> 
                            <p className= "testimonial"> </p>
                            <img src="" alt="customer-icon" className= "icon"/> 
                        </div>
                    </article>
                    <article>
                        <h3 className = "testimonial-quote">Quote</h3>
                        <div> 
                            <p className= "testimonial"> </p>
                            <img src="" alt="customer-icon" className= "icon"/> 
                        </div>
                    </article>
                    <article>
                        <h3 className = "testimonial-quote">Quote</h3>
                        <div> 
                            <p className= "testimonial"> </p>
                            <img src="" alt="customer-icon" className= "icon"/> 
                        </div>
                    </article>
                    <article>
                        <h3 className = "testimonial-quote">Quote</h3>
                        <div> 
                            <p className= "testimonial"> </p>
                            <img src="" alt="customer-icon" className= "icon"/> 
                        </div>
                    </article>
                    <article>
                        <h3 className = "testimonial-quote">Quote</h3>
                        <div> 
                            <p className= "testimonial"> </p>
                            <img src="" alt="customer-icon" className= "icon"/> 
                        </div>
                    </article>
                    <article>
                        <h3 className = "testimonial-quote">Quote</h3>
                        <div> 
                            <p className= "testimonial"> </p>
                            <img src="" alt="customer-icon" className= "icon"/> 
                        </div>
                    </article>
                </div>
                </div>
            </section>
            <section className = "icons-container"> 
                /* icon links to go here - X, Instagram, YouTube, LinkedIn */ 
            </section>
            <section className = "use_cases-explore-resources">
               <div className = "use_case-container"> 
                    <h3>Use Cases</h3>
                    <p> 
                    <link itemProp="UI Design" href="www.google.com"/>
                    </p>
                    <p> 
                    <link itemProp="UX Design" href="www.google.com"/>
                    </p>    
                    <p> 
                    <link itemProp="Wireframing" href="www.google.com"/>
                    </p>    
                    <p> 
                    <link itemProp="Diagramming" href="www.google.com"/>
                    </p>    
                    <p> 
                    <link itemProp="Brainstorming" href="www.google.com"/>
                    </p>    
                    <p> 
                    <link itemProp="Online whiteboard" href="www.google.com"/>
                    </p>    
                    <p> 
                    <link itemProp="Team collaboration" href="www.google.com"/>
                    </p>    
                    <p> 
                    <link itemProp="" href="www.google.com"/>
                    </p>       
               </div>
               <div className = "explore-container">
                    <h3>Explore</h3>
                    <p> 
                    <link itemProp="Design" href="www.google.com"/>
                    </p>    
                    <p> 
                    <link itemProp="Prototype" href="www.google.com"/>
                    </p>    
                    <p> 
                    <link itemProp="Development features" href="www.google.com"/>
                    </p>    
                    <p> 
                    <link itemProp="Design systems" href="www.google.com"/>
                    </p>    
                    <p> 
                    <link itemProp="Collaboration features" href="www.google.com"/>
                    </p>    
                    <p> 
                    <link itemProp="Design features" href="www.google.com"/>
                    </p>    
                    <p> 
                    <link itemProp="FigJam" href="www.google.com"/>
                    </p>
               </div>
               <div className = "resources-container">
                    <h3>Resources</h3>
                    <p> 
                    <link itemProp="Blog" href="www.google.com"/>
                    </p>    
                    <p> 
                    <link itemProp="Best practices" href="www.google.com"/>
                    </p>    
                    <p> 
                    <link itemProp="Colors" href="www.google.com"/>
                    </p>    
                    <p> 
                    <link itemProp="Color wheel" href="www.google.com"/>
                    </p>    
                    <p> 
                    <link itemProp="Support" href="www.google.com"/>
                    </p>    
                    <p> 
                    <link itemProp="Developers" href="www.google.com"/>
                    </p>    
                    <p> 
                    <link itemProp="Resource library" href="www.google.com"/>
                    </p>      
               </div>
            </section>
        </>
    )
}