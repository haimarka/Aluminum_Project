import React from "react";

function About(){
    return(
        <div className="about"><br />
            <h3 className='aboutHeader'>קצת עלינו</h3><br />
              <article className='aboutSummaryContainer'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eius, exercitationem quaerat ducimus saepe praesentium odit natus adipisci sapiente repellat repudiandae soluta? Sequi laudantium tempora doloremque sunt odio ad reiciendis?
                   In a ea officia quo amet maiores neque eligendi assumenda nam enim praesentium doloremque natus, delectus molestiae laboriosam provident minus corporis sint! Totam quis iusto et expedita quod! Impedit, incidunt?</p>
              </article>
              <article className='aboutDetailsContainer'>
                <p>Phone: 0526122936<br/>location: hermon st' 21, yavne</p>
              </article>
        </div>
    )
}

export default About;