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
          we can use props pass data parent Component to nested component . it's
          called props drilling . props syntax like attribute type. This props
          value pass by a component.When sending the value, it is sent much like
          an attribute. also we can pass data as a dynamic value with second
          bracket; after send props value. We will find it as an object value
          inside the children component. then we can use it very easily,props
          read only. props can't be modify. props pass the value unidirectional
          way. any type of data like , object, array, string,numeric , function,
          also a component we can pass with props;
          <br />
          state is very useful . we can apply state to manage our web
          application any content changed. if web application any content can be
          changed depending on user action. we can easily do this type work
          using state. state can be modify. The value of state changes can be
          asynchronous way. all code are run synchronous way.but state value
          update asynchronous way. we can pass the state value in props.
        </p>
      </article>
      <article className="articleDiv">
        <h4 className="blog-title">How does useState work?</h4>
        <p>
          react have some build in special function which is called hook .
          useState one of them .useState is special hook. we can use it to mange
          our state . it's use only react functional component. first we need to
          import useState hook in react. after import we call the useSate() with
          default value . the default value can be [],{},0,null ,'', anything
          this useState hook return two value in an array. first value is
          useState default value / update value.' and second value is a special
          function . we can use this special function to update useSate default
          value; all code run are synchronous way. but this special function
          update useState value asynchronous way. after update state value. we
          can got this update value as return array first value. and we can use
          this first array value to show data in ui;
        </p>
      </article>
      <article className="articleDiv">
        <h4 className="blog-title">
          Purpose of useEffect other than fetching data.
        </h4>
        <p>
          useEffect is an another hook . which is very powerful we can use this
          hook to mange our web site side effect. first we need to import
          useEffect hook in react after import we can pass two parameter first
          one anonymous function,second one dependency; without dependency our
          dom can't stop rendering. empty array dom render one time. if we can
          declare a value as dependency . then when dependency value change the
          dom can be randers;
          <br />
          normally we can use it to get data in server side. also we can do some
          other work use this hook. react not allow to change direct dom
          element. but if we need to changed dom element. then we can use
          useEffect and easily change the element, also if we need to connect
          our website to third party any side then we can do this using
          useEffect;
        </p>
      </article>
      <article className="articleDiv">
        <h4 className="blog-title">How Does React work?</h4>
        <p>
          React is a popular javascript library. react can't understand html
          element but react understand jsx . jsx full from is javascript xml
          which is html syntactic sugar. when we write jsx . react have a
          special compiler which is called babel. babel compiled jsx to react
          element. and finally render it browser. react haas their own dom which
          is called virtual .virtual dom is a soft copy of normal dom when we
          run our code the browser. make all element to create a dom tree. and
          also react create their own virtual dom same to same. virtual dom is
          simple and cleaner but much batter and faster then real dom. that why
          when we need to change dom specific any element we can change easily
          but it can't effect real dom because real dom only one time render in
          react . but behind the scene the element change in virtual dom only.
          and virtual dom find and compare with real dom which content has been
          changed. after compare and finally just update specific changed
          element in real dom . this comparing done by mainly through response
          diff. algorithm.This is how react works
        </p>
      </article>
    </section>
  );
};

export default Blog;
