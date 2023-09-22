const Switch: React.FC<React.ComponentPropsWithoutRef<'input'>> = ({
  checked,
  onClick,
}) => {
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        checked={checked}
        className="peer sr-only"
        onClick={onClick}
        type="checkbox"
      />
      <div className="peer h-6 w-11 rounded-full   bg-red-500 after:absolute after:left-[2px]  after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:peer-focus:ring-green-800" />
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Toggle
      </span>
    </label>
  )
}

export default Switch
