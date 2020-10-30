import "./page.scss";

const Header = () => {
    return (
        <div className="header">
            <section className="presentation">
                <h1>Noelia Pereira</h1>
                <h2>Title</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque aspernatur, vel placeat qui saepe, iusto doloribus porro aliquam voluptatem quod nesciunt cum laboriosam! Qui vero, est quam aliquid voluptas ipsum!</p>
            </section>
            <section className="contact-list">
                <div className="contact-list__item">
                    <img/>
                    <span></span>
                </div>
            </section>
        </div>
    )
}

const Content =() => {
    return (
        <div className="column--left">

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

export default Cv;