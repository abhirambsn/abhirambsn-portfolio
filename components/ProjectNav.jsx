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

const ProjectNav = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-scroll list-none scrollbar-hide">
      <NavItem {...props} value="all" />
      <NavItem {...props} value="react" />
      <NavItem {...props} value="django" />
      <NavItem {...props} value="api" />
      <NavItem {...props} value="mobile" />
    </div>
  )
}

export default ProjectNav
