import React from 'react'
import Image10 from '../../image/Ellipse 2.png'
import Image11 from '../../image/8046554 1.png'

import './purpose.css'

const Purpose = () => {
  return (
    <div className='purpose_con'>
        <section className='purpose_sec1'> 
            <img className='purpose_img' src={Image10} alt='hackalton' />
            <img className='purpose_img2' src={Image11} alt='hackalton' />
        </section>

        <section>
            <h3>
                Judging Criteria <br />
                <span>Key attributes</span>
            </h3>
            <h4 className='section_'>
                <span>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
                solution. Consider whether it addresses a real-world problem in a novel 
                way or introduces innovative features.
            </h4>
            <h4 className='section_'>
                <span>Functionality:</span> Assess how well the solution works. Does it perform its 
                intended functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
            </h4>
            <h4 className='section_'>
                <span>Impact and Relevance:</span> Determine the potential impact of the solution 
                in the real world. Does it address a significant problem, and is it relevant 
                to the target audience? Judges would assess the potential social, 
                economic, or environmental benefits.
            </h4>
            <h4 className='section_'>
                <span>Technical Complexity:</span> Evaluate the technical sophistication of the solution. 
                Judges would consider the complexity of the code, the use of advanced 
                technologies or algorithms, and the scalability of the solution.
            </h4>
            <h4 className='section_'>
                <span>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered 
                to the rules and guidelines of the hackathon, including deadlines, use of 
                specific technologies or APIs, and any other competition-specific requirements.
            </h4>

            <p className='purpose_read'>Read more</p>
        </section>

    </div>
  )
}

export default Purpose