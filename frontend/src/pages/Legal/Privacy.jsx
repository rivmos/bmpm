import React from 'react'
import Newsletter from '../../components/Newsletter'

const Heading = ({text}) => <h1 className='text-2xl md:text-3xl mt-8 mb-4'>{text}</h1>

const Privacy = () => {
    return (<>
        <div className='max-w-8xl mx-auto px-6'>
            <h1 className='text-center text-3xl md:text-5xl py-8 md:py-12'>Privacy Policy</h1>
            At BM Packing Machines, accessible from <a href="https://bmpackingmachines.com/" className='hover:text-lightBrown text-darkGrey'>https://bmpackingmachines.com/</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by BM Packing Machines and how we use it.<p className='legal-paragraph'></p>
            <p className='legal-paragraph'>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

            <Heading text="Log Files" />
            <p className='legal-paragraph'>BM Packing Machines follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.</p>

            <Heading text="Cookies and Web Beacons" />
            <p className='legal-paragraph'>Like any other website, BM Packing Machines uses ‘cookies’. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information.</p>

            <Heading text="Privacy Policies" />
            <p className='legal-paragraph'>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on BM Packing Machines, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
            <p className='legal-paragraph'>Note that BM Packing Machines has no access to or control over these cookies that are used by third-party advertisers.</p>

            <Heading text="Third Party Privacy Policies" />
            <p className='legal-paragraph'>BM Packing Machine’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>
            <p className='legal-paragraph'>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites. What Are Cookies?</p>

            <Heading text="Children’s Information" />
            <p className='legal-paragraph'>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
            <p className='legal-paragraph'>BM Packing Machines does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

            <Heading text="Online Privacy Policy Only" />
            <p className='legal-paragraph'>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in BM Packing Machines. This policy is not applicable to any information collected offline or via channels other than this website.</p>

            <Heading text="Consent" />
            <p className='legal-paragraph'>By using our website, you hereby consent to our Privacy.
            </p>
        </div>
        <Newsletter />
    </>
    )
}

export default Privacy