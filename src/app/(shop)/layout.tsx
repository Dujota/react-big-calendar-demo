// Style Sheets and Styled Components

import "~/styles/normalize.scss";
import "~/styles/globals.css";
import "~/styles/styles.css";
import "~/styles/typography.scss";
import "~/styles/forms.scss";
import "animate.css";


import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Cheap Cancun Car Rentals",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
              
              {children}
              
        
      </body>
    </html>
  );
}
