export default function AdminLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Nav></Nav>
      <div className="container my-6">{children}</div>
    </>
  );
}
