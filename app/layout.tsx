import "./globals.css";
export const metadata = {
 title: "FCC Intelligence",
 description: "From Data to Decisions",
};
export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
<html lang="en">
<body>{children}</body>
</html>
 );
}