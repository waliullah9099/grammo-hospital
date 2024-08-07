import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedinIcon from "@/assets/landing_page/linkedin.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary-muted pt-20 pb-10">
      <div className="container space-y-12">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary-base">
            Grammo Hospital
          </h1>
          <ul className="flex items-center gap-6">
            <Link className="text-lg font-medium" href="/">
              Consultrations
            </Link>
            <Link className="text-lg font-medium" href="/">
              Health Plan
            </Link>
            <Link className="text-lg font-medium" href="/">
              Medicine
            </Link>
            <Link className="text-lg font-medium" href="/">
              Diagnostics
            </Link>
            <Link className="text-lg font-medium" href="/">
              NGOs
            </Link>
          </ul>
        </div>
        <ul className="flex items-center justify-center gap-6  border-b border-dashed border-b-[#999] pb-12">
          <Link href="/">
            <Image
              width={40}
              height={30}
              src={facebookIcon}
              alt="social icons"
            />
          </Link>
          <Link href="/">
            <Image
              width={40}
              height={30}
              src={twitterIcon}
              alt="social icons"
            />
          </Link>
          <Link href="/">
            <Image
              width={40}
              height={30}
              src={instagramIcon}
              alt="social icons"
            />
          </Link>
          <Link href="/">
            <Image
              width={40}
              height={30}
              src={linkedinIcon}
              alt="social icons"
            />
          </Link>
        </ul>
        <div className="text-center">
          <span>
            &copy; {currentYear} Grammo Hospital. All Rights Reserveds
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
