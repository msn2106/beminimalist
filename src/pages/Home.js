import React, { useState } from 'react'


const data = [
  {
    id: 1,
    title: "Mayank Singh",
    desc: "The one and only skincare product that actually worked on my skin!! Very effective, shows improvement, budget friendly, gentle on skin",
  },
  {
    id: 2,
    title: "Siddhant Negi",
    desc: "Very much pocket friendly, suitable for absolute sensitive skin and visible results.. so glad to have come across this amazing brand",
  },
  {
    id: 3,
    title: "Sujata Sharma",
    desc: "Test review",
  },
  {
    id: 4,
    title: "Aniket Kumar",
    desc: "Test review",
  }, {
    id: 5,
    title: "Rushikesh Desale",
    desc: "Test review",
  }, {
    id: 6,
    title: "Sujata Sharma",
    desc: "4dede",
  }, {
    id: 7,
    title: "Sujata Sharma",
    desc: "4dede",
  },

]

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "16px",
  margin: "16px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  flex: "1 0 300px",
  maxWidth: "20%",
  background: "white"
};

const titleStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "8px",
  textAlign: "center"
};

const arrowStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "24px",
  cursor: "pointer",
};

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const Card = ({ title, children }) => (
  <div style={cardStyle}>
    <p style={{ textAlign: "center", }}>{children}</p>
    <h2 style={titleStyle}>{title}</h2>
  </div>
);




const Home = () => {

  const [startCardIndex, setStartCardIndex] = useState(0);



  const handleLeftArrowClick = () => {
    setStartCardIndex((prevIndex) => prevIndex === 0 ? data.length - 1 : prevIndex - 1);
  };

  const handleRightArrowClick = () => {
    setStartCardIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <div style={{ background: "#eee" }}>
      <i className="fas fa-chevron-left arrow" onClick={handleLeftArrowClick}></i>
      <div className="review-list" style={containerStyle}>
        {data.slice(startCardIndex, startCardIndex + 3).map((ele) => (
          <Card key={ele.id} title={ele.title}>
            {ele.desc}
          </Card>
        ))}
      </div>
      <i
        className="fas fa-chevron-right arrow"
        onClick={handleRightArrowClick}
      ></i>
    </div>
  )
}

export default Home