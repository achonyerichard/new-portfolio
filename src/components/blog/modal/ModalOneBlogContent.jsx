import React from "react";

const ModalOneBlogContent = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1 className="text-center">
           <span>Blog</span>
        </h1>
        <span className="title-bg">posts</span>
      </div>
      {/* Meta Starts */}

      <div className="meta open-sans-font">
        <span>
          <i className="fa fa-user"></i> Richard
        </span>
        <span className="date">
          <i className="fa fa-calendar"></i> 9 January 2021
        </span>
        <span>
          <i className="fa fa-tags"></i> reactjs, tech , web development, 
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Challenges faced while working on my first React project.</h1>
      <img src="img/blog/blog-post-1.png" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
        Upon learning html, css and Javascript , it was a matter of What's next. The answer was pretty simple, Reactjs and I began my journey.
              
        </p>
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
          Learning is synthesizing seemingly divergent ideas and data.
          </p>
        </div>
        <p>
          Getting accustomed to new words like hooks, state, props, e.t.c. were the start of my confusion, My frist problem was prop drilling. What do you mean by drilling, This is tech not construction. I had difficulty understanding the idea of props but just like every learning process patience is key.
        </p>
        <p>
          For the newbies, it gets easier, it gets better and it also gets harder. This is coming from  newbie. I got to mster props and faced a new challenge STATE MANAGEMENT.
        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalOneBlogContent;
