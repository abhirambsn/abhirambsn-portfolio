function NavItem({ value, categoryHandler, active }) {
  let classData =
    'capitalize cursor-pointer hover:text-custom_pink-200 dark:hover:text-green-300 dark:text-white'

  if (active === value) {
    classData += ' text-custom_pink-200 dark:text-green-300'
  }
  return (
    <li
      className={classData}
      onClick={() => categoryHandler(value.toLowerCase())}
    >
      {value}
    </li>
  )
}

const CertificatesNav = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-scroll list-none scrollbar-hide">
      <NavItem {...props} value="all" />
      <NavItem {...props} value="mobile" />
      <NavItem {...props} value="cybersecurity" />
      <NavItem {...props} value="linux" />
      <NavItem {...props} value="EH" />
      <NavItem {...props} value="pentesting" />
      <NavItem {...props} value="cloud" />
      <NavItem {...props} value="edu" />
      <NavItem {...props} value="achievement" />
    </div>
  )
}

export default CertificatesNav
