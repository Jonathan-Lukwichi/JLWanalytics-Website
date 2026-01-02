
const Footer = () => {
  return (
    <footer id="contact" className="py-16 text-center">
      <div className="container mx-auto px-4">
        <p className="text-gray-400 mb-2">
          Let's build the future of African business, together.
        </p>
        <a 
          href="mailto:jonathanlukwichi29@gmail.com" 
          className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple hover:opacity-80 transition-opacity duration-300"
        >
          jonathanlukwichi29@gmail.com
        </a>
        <div className="mt-8 text-gray-500">
          <p>Based in South Africa</p>
          <p>&copy; {new Date().getFullYear()} JLWanalytics (Pty) Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
