import React from 'react'


const ContentProject = ({description, content}) => {
  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
      <span style={{color: "#616775", marginRight: "0.5rem", fontSize: "1.5rem"}}>{description}: </span>
      {content.map((c, index) => (
        <span key={index} style={{color:"#CCD7F5", fontSize: "1.5rem", fontWeight: 450}}>
          {c}{(index !== content.length -1) && <span>,&nbsp;</span>}
        </span>
      ))}
    </div>
  );
}

export default ContentProject