import { resourcesLinks, platformLinks, communityLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="mt-20 mx-[50px] lg:mx-[100px] py-10 border-t border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((item, index) => (
              <li key={index}>
                <a className="text-neutral-300 hover:text-white" href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((item, index) => (
              <li key={index}>
                <a className="text-neutral-300 hover:text-white" href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((item, index) => (
              <li key={index}>
                <a className="text-neutral-300 hover:text-white" href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center mt-[60px]">
        <p className="text-neutral-400">&copy; 2024 All rights reserved.</p>
        <p className="mt-1">Made with ❤️ by Chandu.</p>
      </div>
    </footer>
  )
}

export default Footer;  