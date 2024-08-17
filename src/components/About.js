import React, { useEffect } from 'react';

export default function About(props) {
    useEffect(() => {
        props.addPage('About');
    }, [props]);
    return (
        <div className={`bg-${props.mode === 'dark' ? 'secondary' : 'light'} py-5`}>
            <div className="conteiner" >
                <img className="d-block mx-auto mb-4" src={props.logo} alt="" width="72" height="57" />
                <p className="fs-5 fw-bold text-body-emphasis text-center">Features</p>
            </div >
            <div className={`container text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
                <div className="px-4 py-5 my-5 text-left">
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Welcome to PayPlus, your trusted partner in payment processing. At PayPlus, we
                            are
                            committed to revolutionizing the way businesses and individuals handle their financial
                            transactions.
                            Our mission is to provide a seamless, secure, and efficient payment experience that meets the
                            diverse needs of our clients.
                        </p>
                        <p>Founded on the principles of innovation and reliability, PayPlus leverages cutting-edge technology to
                            deliver fast and secure payment solutions. We understand that in today’s fast-paced world, the
                            ability to process payments quickly and safely is crucial. That’s why we have designed our platform
                            to be user-friendly, ensuring that managing payments is as simple and intuitive as possible.
                        </p>

                        <p>Security is at the heart of everything we do. We employ advanced encryption protocols and
                            state-of-the-art fraud detection systems to protect your sensitive information. Our adherence to the
                            highest industry standards and regular security audits ensure that your transactions are always
                            secure and compliant with regulatory requirements.

                        </p>
                        <p>At PayPlus, we pride ourselves on our exceptional customer support. Our dedicated team is available
                            24/7 to assist you with any questions or issues you may have. We believe in building long-lasting
                            relationships with our clients by providing personalized service and support tailored to your unique
                            needs.
                        </p>
                        <p>Our competitive and transparent pricing model means you get the best value without any hidden fees.
                            Whether you are a small business owner looking for reliable payment processing or an individual
                            needing a secure way to manage your finances, PayPlus is here to help.
                        </p>
                        <p>Join us at PayPlus and experience a payment processing solution that is secure, efficient, and
                            designed with you in mind.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
