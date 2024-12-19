function NavLink({link, text}) {
return (
    <a className = "font-semibold mx-4 my-2 text-2xl text-[#737373]"
       href={link}>{text}</a>
    )
}

export default NavLink;