interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function NavLink({ href, className = '', children }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`text-foreground font-sans underline-offset-8 hover:underline hover:text-accent ${className}`}
    >
      {children}
    </a>
  );
}