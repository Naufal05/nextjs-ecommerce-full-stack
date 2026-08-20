import { Nav, NavLink } from "../../components/ui/Nav";

export default function AdminLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Nav>
        <NavLink href="/admin"> Dashbaord</NavLink>
        <NavLink href="/admin/products"> PRoducts</NavLink>
        <NavLink href="/admin/users"> Customers</NavLink>
        <NavLink href="/admin/orders"> Sales</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  );
}
