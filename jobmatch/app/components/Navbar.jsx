import Link from 'next/link';
import Image from 'next/image';



const Navbar = () => {
  return (
    <section>
      <nav className="flex-between w-full mb-16 pt-3" >
        <Link href="/" className="flex gap-2 flex-center">
          <Image
            src="/logo.png"
            alt="Job Match Logo"
            width={30}
            height={30}
            className="object-contain"
          />
        </Link>
      </nav>
    </section>
  );
};

export default Navbar;
