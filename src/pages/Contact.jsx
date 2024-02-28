import React from 'react'
import './Contact.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


export default function Contact() {

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const faq = button.nextElementSibling;
            const icon = button.children[1];

            faq.classList.toggle('show');
            icon.classList.toggle('rotate');
        })
    })
    return (
        <>

            <Navbar />
            <div className='contact-body'>
                <section className="contact">
                    <div className="contact-content">
                        <h2>Contact Us</h2>
                        <p>If you have any queries, feel free to contact us.</p>
                    </div>
                    <div className="contact-container">
                        <div className="contact-info">
                            <div className="contact-box">
                                <div className="contact-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAvFJREFUSEvFlj1oFEEUx/9v94hiEcVOIczMGY1iYUgR8aOIWoiVKMRKgzaKmMb4UdiJoEU0jSiIIH5VolgqIhoUQVH8ANEQc7tvktioaBkk5zxZucix7u7NxSLT3b3///3mzey8GcIcDZojLpoGG2OUc66LiDQAAcBBELyOomi8mSJ8waS1PgBgAMDyHMCIiJy11l6pTahwHg3BbW1tS8MwvAug27Oipy0tLTtHR0e/FekLweVyeYVzbhjAEk/ojGwiDMMNlUplIs+XC25vb2+tVqtvAZgmoTPyN6VSad3Y2NjPLH8uWCl1nYj25ECfAHicxERkCxFtzExONBTH8RFvsNZ6LYDnGYaPYRjuqlQq7+tjxpg1InIHwLKUxwVBsDKKok/pXJkVa62HABxOib9Uq9WuycnJz1kVKKUMEb0BsLA+TkTH4jg+6wtOKlqdEu9l5mtF+22MOSoigynNA2be6gv+AWBRvdg5t3h8fDz5P3cYYzpEZCQliJm57AVWSk0TUalezMzJ719FYK31fABTKc0UMy/wAmuto/QxCoJANWqLtX1OvH+HiIxZa//pdpkflzHmYXJMUgkOWWsvFlWslBogonMpzX1m3uZVsVLqPBH1p8TfwzDszOtG5XJ5uXPuFYDW1IQHrbXHvcDGmG4ReZFR3UgYhr0Z5zjR3wbQluFZxczpDy7/WtRafwCwKmdpHwF4WottB9CZoxtm5k1ZsdyWaYzpE5HCc1u030lMRDZba/+0Vq+lnhFprZ8BWN8IkBUXkRvW2r48b+G1WGsI7wDMaxL+1TnXUdRwGj4EtNb7ACSvCt8xHQTBhiiKXhYZGoITs9b6EoD9PuTkKo3j+GYjrRe4p6enxMy3AOxokPAMM59oBE3iXuBaolApdZWIdud8TJettV6r0iz4j15rfQHAwTq4A3CKmU/6vC5nfM1U/JdljOkXkdMAAhHptdbe81nees2swEmC5AVKRC3p9uk7gVmDfQGzaiD/m7zI/xu4KxAu4qvYWAAAAABJRU5ErkJggg==" /></div>
                                <div className="contact-text">
                                    <h3>Address</h3>
                                    <p>SAKEC, Chembur, Mumbai - 400088</p>
                                </div>
                            </div>
                            <div className="contact-box">
                                <div className="contact-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAjJJREFUSEvtlj9oFEEUxr+3eyCijY2NwszendgpVgo2Z2caTWcTgl2wURARMSFqiCIigjYhnUiadGqhWHmNoJVoJ97evgFtbGwUEW7vebPMLntnVu+SPVN428zO8Ob7vffmzR/CNn20TVxMwP8s832pVkrNE9E5APtK9uCziKwYY26muhlYKTVFRM9KBg7KnWTmF3YwD7bRLjvL7wB2leREpiUi88aYW31grfW13sB1BwuIaE1Ejm8FTkSvRGQGQOR0bjBzwsgizoOZ2Y6T1voCAOvhzhEd+AHgKjPfByA9bfkT2Hpio4YDJ7a1Wq0ex/EagKNDwt/4vj8ThmErtR8aDOCx7/tzYRh+cZM9rfUlAEsAdhQ48BPAIjPf7bVd5/TeOI5XAUwPFbEz+grgIjM/TEFBEBwUkXUAhwfg74joTBRFH3JRngVwD8CenO2Ga5ylekD0ZaVSmW21Wp/seKPRqBhjrojIYlIkREtKqdvNZrNj+/V6fX+n03kE4MQGmRkJDBH5RkQLzPzAFosVDILgkG2jKHrvALYYz4vIMhHtLliO0cA5kdee58222+2PeeFqtXqg2+3aKI/9pQA3Dba6toiswB3b0VpfdruhqOjyvmwJnAq9dT9Hhtxm1qwU8Ai8zHQCToqkaB9vJqVFc35PtXsEpNdimbBMS0QW0sdAdjsFQXBKRJ6MhZieMESnoyh6mpx4OZCnlFoloqkxPX2eG2Pm0gtk8rwd5xL3af9/qf4FW/ruH0RAlS0AAAAASUVORK5CYII=" /></div>
                                <div className="contact-text">
                                    <h3>Email</h3>
                                    <p>sakec.marathon@sakec.ac.in</p>
                                </div>
                            </div>
                            <div className="contact-box">
                                <div className="contact-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAopJREFUSEvtlstrFEEQxr/qHWR3FSMeEpE4mZngaw8eVERQJPjIQXL0heSsXkREERQRRARBFJFc1JtefODFP0Ai8SAYEQkEg5t0z5KDePCFRITdLrdhV2ZnZzK72ZEctI/VVd+vu6urqwmLNGiRuPgP/nPyfX19FwCcJqIRpdTltFPSdNSO42SZ+T4RHazDiOiSlPJKmvAGcE9Pz9JcLvccwLYIyAml1J204A1g27Z3CCFexogzER2WUj5JA94Adl13FzO/iBNm5jIR7VNKjXYKD4M3MfO7BNGfADYrpd53Am8AO46zAsCXJEEiOielvJ7kN9981K0uAVgzT9Bby7IGisXi97TBjwAcihJl5vFajr92AjWxTTt2XXeYmR9ECL/O5/O7Jycnf3QKjQR7nteltf4EYEkQIIRYNzMz8yENaCTYGB3HMQ/FsSCEmc/4vn/zr4Jt2y4IISYAiADoG4ANSqmPUfD+/v7uSqVyVGs9ViqV3iQtMLYtVkvrVrW0ToUEJsrl8sDs7OznoL23t3elZVnmxdsIoAJgWCn1sK1yqjsXCoVlc3NzUwBWhwSmMpnM0PT0dNHYzfuezWZHiWhryO+4UupuHHzej4Bt21uEEGMAciEBDeAegGsAzH0YjAGcV0oZn6aR+APxPG9Ia/0sqvSS8mjmmXnE9/2TYd9EcO2WHzG1TURWK7AmCNENKeXZoL0lsAlwXXeQmR8D6GoXzsw/qqW43BxAPbZlcG3nq5j5dvB30soiqu30ou/7Vxe042CQ53k7tdamO21PAhPRUynlgQXlOE7c87y1Wuu9zLyfiPZE3P5XtU72K1VwSCxj2/Z6IUR33Z7P58fjmkpbOU461nbm/z3wb9Xy0x/njq0jAAAAAElFTkSuQmCC" /></div>
                                <div className="contact-text">
                                    <h3>Phone</h3>
                                    <div className="contact1">
                                        <p>Tanish Nandu :&nbsp;</p>
                                        <p>9833837878</p>
                                    </div>
                                    <div className="contact1">
                                        <p>Anshita Jain :&nbsp;</p>
                                        <p>9340136961</p>
                                    </div>
                                    <div className="contact1">
                                        <p>Ashish Bangari :&nbsp;</p>
                                        <p>9372838067</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section>
                    <h1 className="title">FAQ's</h1>

                    <div className="questions-container">
                        <div className="question">
                            <button>
                                <span>What's the best way to study JavaScript?</span>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJ5JREFUSEvtk9sNgCAMRS+b6CY6ipPoJuokruIoehNICKFQTEj8qD++6Dn0Njh0vlxnPkxQTdgi+n9EK4ATwC1sdQAwATikVkpDJnzz8DkjIXz3gkWSlAQEXG8h7+wglsRw/hu/dMCanITfw86LcC7UnINUQihzr8K1grQTvqvgLYJYwmcx83QWmojimjDw6gELC1oFarAJ1FHZDKpRPbjcGRnmtrrsAAAAAElFTkSuQmCC" />
                            </button>
                            <p>Start With An Online Course.An online tutorial is probably the best way to learn JavaScript.If you're serious about learning fast, efficiently and without missing any important information, then you should consider enrolling in an online course.</p>
                        </div>

                        <div className="question">
                            <button>
                                <span>What should I learn after JavaScript / js?</span>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJ5JREFUSEvtk9sNgCAMRS+b6CY6ipPoJuokruIoehNICKFQTEj8qD++6Dn0Njh0vlxnPkxQTdgi+n9EK4ATwC1sdQAwATikVkpDJnzz8DkjIXz3gkWSlAQEXG8h7+wglsRw/hu/dMCanITfw86LcC7UnINUQihzr8K1grQTvqvgLYJYwmcx83QWmojimjDw6gELC1oFarAJ1FHZDKpRPbjcGRnmtrrsAAAAAElFTkSuQmCC" />
                            </button>
                            <p>I suggest taking a look at Typescript and learning some popular frontend framework (Angular, React, Vue). If you are interested in backend, take a look at Node. js.</p>
                        </div>

                        <div className="question">
                            <button>
                                <span>Can I get a job after learning JavaScript?</span>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJ5JREFUSEvtk9sNgCAMRS+b6CY6ipPoJuokruIoehNICKFQTEj8qD++6Dn0Njh0vlxnPkxQTdgi+n9EK4ATwC1sdQAwATikVkpDJnzz8DkjIXz3gkWSlAQEXG8h7+wglsRw/hu/dMCanITfw86LcC7UnINUQihzr8K1grQTvqvgLYJYwmcx83QWmojimjDw6gELC1oFarAJ1FHZDKpRPbjcGRnmtrrsAAAAAElFTkSuQmCC" />
                            </button>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam ea odit voluptate culpa quas explicabo.</p>
                        </div>

                        <div className="question">
                            <button>
                                <span>How long will it take to learn JavaScript?</span>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJ5JREFUSEvtk9sNgCAMRS+b6CY6ipPoJuokruIoehNICKFQTEj8qD++6Dn0Njh0vlxnPkxQTdgi+n9EK4ATwC1sdQAwATikVkpDJnzz8DkjIXz3gkWSlAQEXG8h7+wglsRw/hu/dMCanITfw86LcC7UnINUQihzr8K1grQTvqvgLYJYwmcx83QWmojimjDw6gELC1oFarAJ1FHZDKpRPbjcGRnmtrrsAAAAAElFTkSuQmCC" />
                            </button>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corporis pariatur a maiores minus tempore magni nam beatae dolores omnis.</p>
                        </div>
                    </div>
                </section> */}


            </div>
            
            <Footer />
        </>
    )
}

