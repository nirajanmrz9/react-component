In layout componet we have Navbar and LayoutBody components

Navbar component shows us the navbar of our menu, which have props that change the logo tile and navbar menu
Navbar component props are
  1. menus(type:Array) :- use for creating the menu on navbar
  2. logo (type:string): - use for showing the logo
  3. title (type:string):- Pages title

LayoutBody component shows us the layout menus, toggle and display content
LayoutBody cmponent props are
  1. isAdmin(type:boolean) : Use for changing the layout to admin layout and dashboard layout.
  2. onClick(type: event listener): use for calling function
  3. toogle(type:boolean): use for displaying and hiding search bar.
  4. children(type:React.ReactNode) :- it is a special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags when invoking a component

example:- 

      <Navbar menus={menus} logo={logo} />
      <LayoutBody isAdmin={isAdmin} onClick={toggleMenu} toggle={toggle}>
        {children}
      </LayoutBody>
