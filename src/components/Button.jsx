function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = 'px-6 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'text-white hover:opacity-90 focus:ring-[var(--color-primary)]',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    link: 'hover:opacity-80 focus:ring-[var(--color-primary)] px-0',
  };

  const primaryStyle = variant === 'primary' ? { backgroundColor: 'var(--color-primary)' } : {};
  const linkStyle = variant === 'link' ? { color: 'var(--color-primary)' } : {};

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={{ ...primaryStyle, ...linkStyle }}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
