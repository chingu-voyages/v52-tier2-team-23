import img from "/placeholder-logo.webp"; //check

export default function Footer() {
  return (
    <footer>
      <div className="flex h-20 bg-white">
        <img className="h-14 w-auto" src={img} alt="Solar Energy Solutions" />
      </div>
    </footer>
  );
}
