import "./page.scss";

const Header = () => {
    return (
        <div className="header">
            <section className="presentation">
                <h1>Noelia Pereira</h1>
                <h2>Title</h2>
                <p className="presentation__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque aspernatur, vel placeat qui saepe, iusto doloribus porro aliquam voluptatem quod nesciunt cum laboriosam! Qui vero, est quam aliquid voluptas ipsum!</p>
            </section>
            <section className="contact-list">
                    <div className="contact-list__item">
                        <img className="icon" src="../static/mail.png" alt="mail"/><span className="contact-list__item__span">noeliapereira@protonmail.com</span>
                    </div>
                    <div className="contact-list__item">
                        <img className="icon" src="../static/mobile-phone.png" alt="phone"/><span className="contact-list__item__span">0729255xxxx</span>                        
                    </div>
                    <div className="contact-list__item">
                        <img className="icon" src="../static/linkedin.png" alt="linkedin"/><span className="contact-list__item__span">linkedin</span>
                    </div>
            </section>
        </div>
    )
}



const Experience = (props) => {
    return (
        <div>
            <div>
                <span className="role-header__title">{props.title}</span><span className="role-header__date">{props.dates}</span>
            </div>
            <div>
                <p className="role-header__place">{props.place}</p>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
}

const ColumnLeft =() => {
    return (
        <div className="column--left">
            <div className="column--left__experience">
                <h2 className="section-header">Experience</h2>
                <Experience title="Title" place="Group - Institution -Location" dates="2019-2020">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente excepturi amet suscipit temporibus repudiandae, reprehenderit rem deserunt ducimus at maxime dolores optio nam ea molestiae dolorem saepe voluptatum nesciunt?</p>
                </Experience>
                <Experience title="One More" place="My house" dates="never">
                    <p>One</p>
                    <ul>
                        <li>One</li>
                        <li>Two</li>
                        <li>Three</li>
                    </ul>
                </Experience>
                <Experience title="Title" place="Group - Institution -Location" dates="2019-2020">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente excepturi amet suscipit temporibus repudiandae, reprehenderit rem deserunt ducimus at maxime dolores optio nam ea molestiae dolorem saepe voluptatum nesciunt?</p>
                </Experience>
                <Experience title="Title" place="Group - Institution -Location" dates="2019-2020">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente excepturi amet suscipit temporibus repudiandae, reprehenderit rem deserunt ducimus at maxime dolores optio nam ea molestiae dolorem saepe voluptatum nesciunt?</p>
                </Experience>
            </div>
            
            <div className="column--left__education">
                <h2 className="section-header">Education</h2>
                <Experience 
                    title="Master in Molecular Genetis & Biotechnology: Genetics" 
                    place="University of Seville - Seville, Spain" 
                    dates="2020"></Experience>
                <Experience 
                    title="Chemistry: University of Santiago de Compostela" 
                    place="USC - Santiago de Compostela, Spain" 
                    dates="2016"></Experience>
            </div>
        </div> 
    )
}

const DotBar = (props) => {
    const dots = [];
    for(let i = 0; i < 5; i++) {
        dots.push(<span className={`dotbar__dots__dot${i < props.score ? "--active" : ""}`}/>)
    }

    return (
        <div className="dotbar">
            <span className="dotbar__text">{props.idiom}</span>
            <div className="dotbar__dots">
                {dots}
            </div>
        </div>
    )
}

const ColumnRight =() => {
    return (
        <div className="column--right">
            <div className="column--right__skills">
                <h2 className="section-header">Skills</h2>   
                <ul>
                    <li>Libero</li>
                    <li>Adipisicing liit</li>
                    <li>Animi sapiente</li>
                    <li>Suscipit</li>
                </ul>
            </div>
            <div className="column--right__language">
                <h2 className="section-header">Languages</h2>
                <DotBar idiom="English" score={2} />
                <DotBar idiom="Spanish" score={5}/>  
                <DotBar idiom="Galician" score={4}/>
            </div>
            <div className="column--right__interests">
                <h2 className="section-header">Hobbies</h2>
                <div className="hobbies">
                    <div className="hobbies__item">
                        <img className="hobbies__icon" src="../static/dance.png" alt="dance"/><span className="hobbies__icon__text">Dance</span>
                    </div>
                    <div className="hobbies__item">
                        <img className="hobbies__icon" src="../static/open-book.png" alt="read"/><span className="hobbies__icon__text">Read</span>
                    </div>
                    <div className="hobbies__item">
                        <img className="hobbies__icon" src="../static/yoga.png" alt="yoga"/><span className="hobbies__icon__text">Yoga</span>
                    </div>
                </div>
                <div className="hobbies">
                    <div className="hobbies__item">
                        <img className="hobbies__icon" src="../static/bake.png" alt="bake"/><span className="hobbies__icon__text">Bake</span>
                    </div>
                    <div className="hobbies__item">
                        <img className="hobbies__icon" src="../static/climbing.png" alt="climbing"/><span className="hobbies__icon__text">Climbing</span>
                    </div>
                    <div className="hobbies__item">
                        <img className="hobbies__icon" src="../static/hiking.png" alt="hiking"/><span className="hobbies__icon__text">Hiking</span>
                    </div>
                </div>
            </div>
        </div> 
    )
}

const Cv = () => {
    return  (
        <div className="cv">
            <Header/>
            <Content/>
        </div>
    )
}

const Content =() => {
    return (
        <div className="content">
            <ColumnLeft/>
            <ColumnRight/>
        </div> 
    )
}

export default Cv;