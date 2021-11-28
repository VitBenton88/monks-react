function Social() {
    const social_data = [
        {
          href: "https://www.facebook.com/nervousmonks/",
          icon: "fa-facebook"
            
        },
        {
          href: "https://www.instagram.com/nervousmonks/",
          icon: "fa-instagram"
    
        },
        {
          href: "https://soundcloud.com/nervousmonks",
          icon: "fa-soundcloud"
    
        },
        {
          href: "https://nervousmonks.bandcamp.com/releases",
          icon: "fa-bandcamp"
    
        },
      ]

      const renderSocialIcon = ({href, icon}) => <li key={icon} className="d-inline-block"><a href={href} target="_blank" rel="noreferrer"><i className={`fab ${icon} to-neon`}></i></a></li>

    return ( 
        <ul id="social">
            {social_data.map(renderSocialIcon)}
        </ul>
     )
}

export default Social
