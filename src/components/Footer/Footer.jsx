import { Link } from 'react-router-dom';
import { logo1 } from '../../images';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={logo1} alt="Footer logo" />
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos commodi ipsum tempora dolorum odio non placeat soluta eius voluptas reprehenderit.
                </p>
                <div className="footer__socials">
                    <a href="htttps://linkedin.com" target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="htttps://facebook.com" target='_blank' rel='noreferrer noopener'><FaFacebook/></a>
                    <a href="htttps://twitter.com" target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href="htttps://instagram.com" target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className='footer__copyright'>
            <small>2022 Da-Kr Dev &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer