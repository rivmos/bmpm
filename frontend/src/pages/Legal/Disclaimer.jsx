import React from 'react'
import Newsletter from '../../components/Newsletter'

const Heading = ({text}) => <h1 className='text-3xl mt-6 mb-2'>{text}</h1>

const Disclaimer = () => {
    return (
        <>
            <div className='max-w-8xl mx-auto'>
                <h1 className='text-center text-5xl py-12'>Disclaimer</h1>

                <h1 className='text-4xl mb-6'>Disclaimer for BM Packing Machines</h1>
                <p className='legal-paragraph'>If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at info@bmpackingmachines.com</p>
                
                <Heading text="Disclaimers for BM Packing Machines" />
                <p className='legal-paragraph'>All the information on this website – <a href="https://bmpackingmachines.com/" className='hover:text-lightBrown text-darkGrey'>https://bmpackingmachines.com/</a> – is published in good faith and for general information purpose only. BM Packing Machines does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (BM Packing Machines), is strictly at your own risk. BM Packing Machines will not be liable for any losses and/or damages in connection with the use of our website.</p>
                <p className='legal-paragraph'>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone ‘bad’.</p>
                <p className='legal-paragraph'>Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their “Terms of Service” before engaging in any business or uploading any information.</p>
                
                <Heading text="Consent" />
                <p className='legal-paragraph'>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
                
                <Heading text="Update" />
                <p className='legal-paragraph'>Should we update, amend or make any changes to this document, those changes will be prominently posted here.
                </p>
            </div>
            <Newsletter />
        </>
    )
}

export default Disclaimer