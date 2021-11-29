function Orb() {
    const particles = []
    const particlesLimit = 300
    for (let i = 0; i < particlesLimit; i++) {
        particles.push(<div key={Math.floor(Date.now() + i)}></div> );
      }

    return ( 
        <div id="red-particles">
            {particles}
        </div>
    )
}

export default Orb