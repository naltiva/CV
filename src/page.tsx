import "./page.scss";

const Header = () => {
    return (
        <div className="header">
            <section className="presentation">
                <h1 className="presentation__name">Noelia Pereira</h1>
                <h2 className="presentation__title">Researcher</h2>
            </section>
        </div>
    )
}



const Experience = (props) => {
    return (
        <div>
            <div>
                <span className="role-header__title">{props.title}</span>
            </div>
            <div>
                <span className="role-header__place">{props.place}</span><span className="role-header__date"> – </span><span className="role-header__date">{props.dates}</span>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
}

const Education = (props) => {
    return (
        <div>
            <div>
                <span className="education__title">{props.title}</span>
            </div>
            <div>
                <span className="education__place">{props.place}</span>
            </div>
            <div>
                <span className="education__date">{props.dates}</span>
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
            <section>
                <p className="presentation__text">My name is Noelia, I originally started with a bachelor in chemistry, by its third year I found myself focusing mainly on biochemistry and other biology related subjects, my end of bachelor project was on molecular labeling on bacterial organisms. I found this last project quite intriguing so I decided to my master’s in molecular genetics and biotechnology. Over this period I developed a keen interest in nutrition and microbiome and I managed to join Fred Warren’s group in the Quadram Institute to work on identifying how digestion affects psyllium. During the time working in Fred’s group I had a high degree of autonomy and did both experiment and protocol design, experiment runs and data analysis.</p>
            </section>
            <div className="column--left__experience">
                <h2 className="section-header">Experience</h2>
                <Experience title="Researche associate" place="Quadram Institute, Norwich, UK" dates="2/2020 to 7/2020">
                    <div className="role-header--description">
                        <p className="m025">Master capstone project: Effects of rheology and linkage composition on fermentation characteristics and microstructure of highly viscous arabinoxylan fractions in a model human colon system.</p>
                        {/* <p className="m025">(Colon model, fluorescence in situ hybridization (FISH), fluorescence microscopy, psyllium)</p> */}
                        <p className="m025">Research group Fred Warren<a className="ml05" href="https://quadram.ac.uk/fred-warren/">https://quadram.ac.uk/fred-warren</a></p>
                    </div>
                </Experience>
                <Experience title="Summer Internship" place="Quadram Institute, Norwich, UK" dates="6/2019 to 8/2019">
                    <div className="role-header--description">
                        <p className="m025">Development of a methodology to study the bacteria population in the duodenum adapting currents protocols for fluorescence in situ hybridization (FISH) and flow cytometry.</p>
                        {/* <p className="m025">(Fluorescence in situ hybridization (FISH), fluorescence microscopy)</p> */}
                        <p className="m025">Research group Fred Warren<a className="ml05" href="https://quadram.ac.uk/fred-warren/">https://quadram.ac.uk/fred-warren</a></p>
                    </div>
                </Experience>
                <Experience title="Internship" place="Pharmacy faculty, Seville, Spain" dates="11/2017 to 09/2018">
                    <div className="role-header--description">
                        <p className="m025">Hybrid histidine kinase on the halophile bacteria Chromohalobacter salexigens and its involvement on the cross-regulation network of ectoine metabolism.</p>
                        <p className="m025">Research group J. Nieto and Montserrat Argandoña<a className="ml05" href="https://investigacion.us.es/sisius/sis_showpub.php?idpers=8492">https://bit.ly/38xegv3</a></p>
                        {/* <p className="m025">(Cross regulation network of ectoine metabolism)</p>                    */}
                   </div>
                </Experience>
                <Experience title="Degree capstone project" place="CIQUS, Santiago de Compostela, Spain" dates="10/2015 to 07/2016">
                    <div className="role-header--description">
                        <p className="m025">Degree capstone project: Adaptation of the IC-Tagging molecular labeling system for usage on bacterial organisms applying plasmid cloning.</p>
                        <p className="m025">Research group F. Javier Benavente and J. Manuel Martínez Costas<a className="ml05" href="https://www.usc.es/ciqus/en/groups/molecular-virology">https://www.usc.es/ciqus/en/groups/molecular-virology</a></p>
                        {/* <p className="m025">(Molecular Labeling)</p> */}
                    </div>
                </Experience>
                <Experience title="Internship" place="CIQUS, Santiago de Compostela, Spain" dates="02/2014 to 09/2014">
                    <div className="role-header--description">
                        <p className="m025">Amino-acid masking through photolabile groups. Study of supramolecular chemistry of DNA-protein interactions. On the basis of the available structural information on the interaction of different families of transcription factors with dsDNA, we aimed at developing small, synthetic versions that could somewhat mimic DNA binding properties of such natural counterparts.</p>
                        <p className="m025">Research group José Luis Mascareñas<a className="ml05" href="https://www.usc.es/ciqus/en/groups/mascare%C3%B1as-lopez-gulias">https://bit.ly/3lkWwqs</a></p>
                        {/* <p className="m025">(Amino-acid masking through photolabile groups)</p> */}
                    </div>
                </Experience>
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
            <section className="contact-list">
                    <div className="contact-list__item">
                        <img className="icon" src="../static/mail.png" alt="mail"/><span className="contact-list__item__span">noeliapereira@protonmail.com</span>
                    </div>
                    <div className="contact-list__item">
                        <img className="icon" src="../static/mobile-phone.png" alt="phone"/><span className="contact-list__item__span">07493915259</span>                        
                    </div>
                    <div className="contact-list__item">
                        <img className="icon" src="../static/linkedin.png" alt="linkedin"/><span className="contact-list__item__span">https://bit.ly/3pnlOXg</span>
                    </div>
            </section>

            <div className="column--right__skills">
                <h2 className="section-header">Skills</h2>   
                <ul>
                    <li>Colon model</li>
                    <li>Fluorescence in situ hybridization (FISH)</li>
                    <li>Fluorescence microscopy</li>
                    <li>Molecular Labeling</li>
                    <li>Plasmid design</li>
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
                        <img className="hobbies__icon" src="../static/dancesalsa.png" alt="dance"/><span className="hobbies__icon__text">Dance</span>
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
                        <img className="hobbies__icon" src="../static/climbing.png" alt="climbing"/><span className="hobbies__icon__text">Climb</span>
                    </div>
                    <div className="hobbies__item">
                        <img className="hobbies__icon" src="../static/hiking.png" alt="hiking"/><span className="hobbies__icon__text">Hike</span>
                    </div>
                </div>
            </div>

            <div className="education">
                <h2 className="section-header">Education</h2>

                <Education 
                    title="MSc in Molecular Genetis & Biotechnology" 
                    place="University of Seville, Seville, Spain" 
                    dates="2020">
                </Education>
                <Education 
                    title="BSc in Chemistry" 
                    place="USC, Santiago de Compostela, Spain" 
                    dates="2016"> 
                </Education>
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