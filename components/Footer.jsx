import {
  AiFillInstagram,
  AiFillMail,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 text-base-content rounded">
          <div>
            <div className="grid grid-flow-col gap-4">
              <a className="w-[50px]" href="https://github.com/razikdontcare">
                <AiFillGithub size={28} />
              </a>
              <a
                className="w-[50px]"
                href="https://www.instagram.com/razikdontcare"
              >
                <AiFillInstagram size={28} />
              </a>
              <a className="w-[50px]" href="https://youtube.com/razikdontcare">
                <AiFillYoutube size={28} />
              </a>
              <a className="w-[50px]" href="mailto:contact@razik.my.id">
                <AiFillMail size={28} />
              </a>
            </div>
          </div>
          <div>
            <p>&copy; 2023 Abdurrazik - All Rights Reserved</p>
          </div>
        </footer>
    )
}

export default Footer