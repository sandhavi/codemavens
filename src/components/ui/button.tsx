import { ReactNode, forwardRef } from 'react';

type ButtonVariant = 'default' | 'ghost' | 'outline' | 'secondary';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className = '',
    variant = 'default',
    size = 'default',
    children,
    ...props
}, ref) => {
    // Base styles
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    // Variant styles
    const variantStyles = {
        default: "bg-gray-900 text-white hover:bg-gray-800",
        ghost: "hover:bg-gray-100 hover:text-gray-900",
        outline: "border border-gray-200 bg-white hover:bg-gray-100",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    };

    // Size styles
    const sizeStyles = {
        default: "h-9 px-4 py-2 text-sm",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-8 text-base",
        icon: "h-9 w-9 p-0",
    };

    // Combine all styles
    const combinedStyles = [
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className,
    ].join(' ');

    return (
        <button
            ref={ref}
            className={combinedStyles}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };