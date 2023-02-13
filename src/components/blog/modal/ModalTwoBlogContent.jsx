import React from "react";

const ModalTwoBlogContent = () => {
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
          <i className="fa fa-calendar"></i> 5 March 2022
        </span>
        <span>
          <i className="fa fa-tags"></i> reactjs, javascript,
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>The React Governor and State Manager</h1>
      <img src="img/blog/blog-post-2.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
          Learning state management made me feel like a react governor but it
          was an amazing experience...
        </p>
        {/* <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
            Most photographers find it hard to see interesting pictures in
            places in which they are most familiar. A trip somewhere new seems
            always exactly what our photography needed, as shooting away from
            home consistently inspires us to new artistic heights.
          </p>
        </div> */}
        <p>
          Redux vs Context API, the endless battle for most react developers but an easy answer for me ,Context wins. I mean it feels natural and redux seems like a whole new concept on its own . Miss me with that
        </p>
        <p>
          If I'm being honest learning state management gave me some confidence as a developer .i felt like a react developer, only thing close to that feeling was learning useEffect. but it felt nice to fall in love with a new concept and master it .
        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalTwoBlogContent;
