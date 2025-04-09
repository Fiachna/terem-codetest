import { FC, PropsWithChildren } from "react";

import Footer from "@/components/atoms/footer";
import Header from "@/components/atoms/header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
