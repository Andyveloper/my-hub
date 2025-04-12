const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6 mt-12 text-center flex flex-col items-center gap-2 text-sm opacity-80">
      <div className="flex gap-2 items-center text-base">
        Hecho con
        <span className="animate-pulse">💻</span>+<span className="animate-bounce">☕</span>+
        <span className="hover:animate-spin">🎮</span>
      </div>
      <div className="text-xs">
        © {new Date().getFullYear()} Mauricio's Hub. Todos los derechos y los videojuegos
        reservados.
      </div>
    </footer>
  )
}

export default Footer
