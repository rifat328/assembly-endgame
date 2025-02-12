import React from "react";

const Languages = (props) => {
  const styles = { backgroundColor: props.backgroundColor, color: props.color };
  return (
    <section className={`language ${props.className}`} style={styles}>
      <h3>{props.name}</h3>
    </section>
  );
};

export default Languages;
