import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <section className="blog">
        <h2 className="Qa-title">Question and Answer</h2>
      <article className="articleDiv">
        <h4 className="blog-title">Props vs State</h4>
        <p>
          Props and State are not same .
          <br />
           we can use props  pass data parent Component to nested component .
          props syntax like attribute type. This props value pass by a component.When sending the value, it is sent much like an attribute.
          also we can pass data as a dynamic value with second bracket; after send props value. We will find it as an object value inside the children component. then we can use it very easily, 
          any type of data like , object, array, string,numeric , function, also a component we can pass with props;  
        </p>
      </article>
      <article className="articleDiv">
        <h4 className="blog-title">How does useState work?</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          eligendi doloremque vero obcaecati? Porro ullam quae fugiat alias
          magni doloremque? Minima ducimus facilis eum a aperiam fuga ullam
          reiciendis animi?
        </p>
      </article>
      <article className="articleDiv">
        <h4 className="blog-title">Purpose of useEffect other than fetching data.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          eligendi doloremque vero obcaecati? Porro ullam quae fugiat alias
          magni doloremque? Minima ducimus facilis eum a aperiam fuga ullam
          reiciendis animi?
        </p>
      </article>
      <article className="articleDiv">
        <h4 className="blog-title">How Does React work?</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          eligendi doloremque vero obcaecati? Porro ullam quae fugiat alias
          magni doloremque? Minima ducimus facilis eum a aperiam fuga ullam
          reiciendis animi?
        </p>
      </article>
    </section>
  );
};

export default Blog;
