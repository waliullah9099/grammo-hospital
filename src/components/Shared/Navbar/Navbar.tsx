import Button from "@/components/UI/Button";
import Link from "next/link";


const Navbar = () => {
    return (
        <div className="container flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary-base">Grammo Hospital</h1>
            <ul className="flex items-center gap-6">
                <Link className="text-lg font-medium" href="/">Consultrations</Link>
                <Link className="text-lg font-medium" href="/">Health Plan</Link>
                <Link className="text-lg font-medium" href="/">Medicine</Link>
                <Link className="text-lg font-medium" href="/">Diagnostics</Link>
                <Link className="text-lg font-medium" href="/">NGOs</Link>
            </ul>
            <Link href='/login'><Button >Login</Button> </Link>
        </div>
    );
};

export default Navbar;