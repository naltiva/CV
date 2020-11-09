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

            </div>
        </div> 
    )
}


const ColumnRight =() => {
    return (
        <div className="column--right">
            <div className="skils">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi, exercitationem iure, hic eius expedita dignissimos eos deserunt neque molestiae libero, pariatur voluptates blanditiis? Ratione quod recusandae distinctio maxime a?</p>
            </div>
            <div className="column--right__language">

            </div>
            <div className="column--right__interests">

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