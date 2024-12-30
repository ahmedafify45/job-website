import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div className=" container px-4 2xl:px-20 mx-auto mb-5 pt-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 text-gray-500">
          <img className="h-8" src={assets.logo} alt="assets_logo" />

          <p
            className="text-sm max-sm:hidden border-l-[1px] pl-2
           border-gray-500"
          >
            Copyright @GreatStack.dev | All right reserved.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
