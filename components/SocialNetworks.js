import React from 'react'
import { rhythm } from 'utils/typography'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import GithubIcon from 'react-icons/lib/fa/github'
import InstagramIcon from 'react-icons/lib/fa/instagram'
import FacebookIcon from 'react-icons/lib/fa/facebook-square'
import FoursquareIcon from 'react-icons/lib/fa/foursquare'
import SpotifyIcon from 'react-icons/lib/fa/spotify'

const SocialNetworks = (props) => {
  const marginBetweenIcons = rhythm(1/6)
  return (
    <ul className="social-networks"
      style={ props.style }
    >
    <li style={{ margin: marginBetweenIcons }}><a href="http://twitter.com/imehr" title="Twitter"><TwitterIcon /></a></li>
    <li style={{ margin: marginBetweenIcons }}><a href="http://instagram.com/imehr" title="instagram"><InstagramIcon /></a></li>
    <li style={{ margin: marginBetweenIcons }}><a href="http://github.com/imehr" title="github"><GithubIcon /></a></li>
    <li style={{ margin: marginBetweenIcons }}><a href="http://facebook.com/mehranmozaffaristudios" title="facebook"><FacebookIcon /></a></li>
    </ul>
  )
}

SocialNetworks.propTypes = {
  style: React.PropTypes.object,
}

export default SocialNetworks
