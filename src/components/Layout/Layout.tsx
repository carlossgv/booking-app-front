import ResponsiveAppBar from '../AppBar/AppBar';

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <ResponsiveAppBar />
      <main>{children}</main>
    </>
  );
}
