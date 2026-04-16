const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
]

export const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto px-8 py-4 rounded-md flex justify-between items-center bg-secondary-background fixed top-4 left-0 right-0 shadow-lg backdrop-blur-sm bg-opacity-80 z-100">
        <div className="text-2xl font-bold">Hossain Sany</div>
        <ul className="flex items-center justify-end gap-10">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-blue-500">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
