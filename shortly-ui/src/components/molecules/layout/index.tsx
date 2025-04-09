import { FC, PropsWithChildren } from "react";
import { BaseComponentProps } from "@/types/base-component-props";

import Footer from "@/components/atoms/footer";
import Header from "@/components/atoms/header";

interface LayoutProps extends PropsWithChildren, BaseComponentProps {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
