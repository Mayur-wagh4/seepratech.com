import React from 'react';

const Button = ({
  children,
  onClick,
  className = '', // allows additional classes for customization
  type = 'button', // default to 'button' type
  isLoading = false, // handle loading state
  disabled = false, // handle disabled state
  ...rest // allow other props (like aria-label, etc.)
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isLoading || disabled} // Disable the button when loading or explicitly disabled
      className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ease-in-out 
        ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
        ${disabled ? 'bg-neutral-300 text-neutral-500 cursor-not-allowed' : 'bg-black text-white  border border-neutral-800 hover:text-black hover:bg-gray-200 hover:transform hover:translate-y-[-2px] hover:shadow-medium'}
        shadow-soft
        ${className}`} // Use dynamic styles and pass additional classes via className prop
      {...rest} // Pass other props to the button (e.g. aria-label)
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <svg 
            className="animate-spin h-5 w-5 text-neutral-800" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0"></path>
          </svg>
        </span>
      ) : (
        children // Display button text/children when not loading
      )}
    </button>
  );
};

export default Button;
