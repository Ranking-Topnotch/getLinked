import React from 'react'
import './time.css'

const Time = () => {
  return (
    <div className='timee'>
        <h3 className='time_head'>Timeline</h3>
        <div className='h4'> 
            <h4>Here is the breakdown of the time we anticipate 
                using for the upcoming event.</h4>
        </div>
        <section className='time_con'>
            <div className='time_con_1'>
                <div>
                    <h3>Hackathon Announcement</h3>
                    <p>The getlinked tech hackathon 1.0 is formally announced
                        to the general public and teams begin to get ready to register</p>
                </div>

                <h3>November 18, 2023</h3>

                <div>
                    <h3>Teams Registration ends</h3>
                    <p>Interested Participants are no longer Allowed to
                        register</p>
                </div>

                <h3>November 18, 2023</h3>

                <div>
                    <h3>Getlinked Hackathon 1.0 Offically Begins</h3>
                    <p>Accepted teams can now proceed to build their
                        ground breaking skill driven solutions</p>
                </div>

                <h3>November 18, 2023</h3>


            </div>

            <div className='faq_line'>
                <div className='line long'></div>
                <p>1</p>
                <div className='line'></div>
                <p>2</p>
                <div className='line'></div>
                <p>3</p>
                <div className='line'></div>
                <p>4</p>
                <div className='line'></div>
                <p>5</p>
                <div className='line'></div>
                <p>6</p>
            </div>

            <div className='time_con_2'>
                <h3>November 18, 2023</h3>

                <div>
                    <h3>Teams Registration begins</h3>
                    <p>Interested teams can now show their interest in the
                        getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                </div> 

                <h3>November 18, 2023</h3>

                <div>
                    <h3>Announcement of the accepted teamsand ideas</h3>
                    <p>All teams whom idea has been accepted into getlinked tech
                        hackathon 1.0 2023 are formally announced</p>
                </div>  

                <h3>November 18, 2023</h3>

                <div>
                    <h3>Demo Day</h3>
                    <p>Teams get the opportunity to pitch their projects to judges.
                        The winner of the hackathon will also be announced on
                        this day</p>
                </div>  
            </div>
        </section>
    </div>
  )
}

export default Time