import React from 'react'
import TypeWriterEffect from "react-typewriter-effect";

export default function TypeWriter() {
    return (
        <div>
            <TypeWriterEffect
          textStyle={{
            fontFamily: "Poppins",
            color: "#fff",
            fontWeight: 700,
            fontSize: "25px",
            marginBottom: '10px',
            textTransform: 'uppercase' 
          }}
          startDelay={200}
          cursorColor="#fff"
          multiText={[
            "HTML - CSS",
            "JAVASCRIPT",
            "GIT",
            "PHP - SYMFONY",
            "REDUX - JEST",
            "LESS - SASS",
            "FIREBASE - MYSQL",
            "REACT - REACT NATIVE"
            
          ]}
          multiTextDelay={1000}
          typeSpeed={100}
        />
        </div>
    )
}
