import MenuNavbar from "@/components/MenuNavbar"

function MenuLayout({children}) {
  return (
    <>
    <MenuNavbar />
     {children} 
    </>
  )
}

export default MenuLayout
